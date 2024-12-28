import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconResolveUrl: true,
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
})

const HomePage = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const [reviews] = useState([
    { id: 1, name: 'Ntwari Fiacre', rating: 5, text: 'Amazing service! Best car rental experience.' },
    { id: 2, name: 'Sarah Isimbi', rating: 4, text: 'Great selection of vehicles.' }
  ])

  const carPricing = [
    { category: 'Economy', price: '60', image: '/assets/car4.jpg', },
    { category: 'BMW', price: '85', image: '/assets/car5.jpg' },
    { category: 'Luxury', price: '150', image: '/assets/car1.jpg', }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  const images = [
    '/assets/car1.jpg',
    '/assets/car2.jpg',
    '/assets/car3.jpg',
    '/assets/car4.jpg',
    '/assets/car5.jpg'
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="float-right w-[94dvw] min-h-screen bg-main right-0 absolute overflow-x-hidden"
    >
      {/* Hero Section */}
      <motion.section className="h-screen relative overflow-hidden">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ x: '100%' }}
            animate={{ 
              x: index === currentImage ? '0%' : 
                 index < currentImage ? '-100%' : '100%'
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <img 
              src={img} 
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="text-center">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 text-white"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Premium Cars
            </motion.h1>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-xl font-semibold"
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full ${
                currentImage === index ? 'bg-white' : 'bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        variants={containerVariants}
        className="py-20 px-4"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Fleet
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {carPricing.map((car, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
              }}
              className="bg-white rounded-lg shadow-xl p-6"
            >
              <img src={car.image} alt={car.category} className="w-full h-48 object-cover rounded-lg mb-4"/>
              <h3 className="text-2xl font-bold">{car.category}</h3>
              <p className="text-3xl text-blue-600 font-bold">${car.price}/day</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Select
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section 
        variants={containerVariants}
        className="bg-gray-100 py-20 px-4"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12"
        >
          Customer Reviews
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
              }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <motion.div 
                className="flex items-center mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </motion.div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <p className="font-bold">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer with Map */}
      <motion.footer 
        variants={containerVariants}
        className="bg-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 123 Car Street, Kk 120 kg</p>
                <p className="flex items-center"><FaPhone className="mr-2" /> +250 790 010 0861</p>
                <p className="flex items-center"><FaEnvelope className="mr-2" /> ntwarifiacre043@gmail.com</p>
              </div>
            </motion.div>
            <div className="h-[420px] rounded-xl">
              <MapContainer 
                center={[-1.944880, 30.062380]} 
                zoom={13} 
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={[-1.944880, 30.062380,]}>
                  <Popup>
                    Visit us here! <br /> Car Rental Service
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.main>
  )
}

export default HomePage