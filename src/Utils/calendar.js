import React, {useState} from 'react'
import { Calendar } from 'react-calendar'
import { motion } from 'framer-motion'
import 'react-calendar/dist/calendar.css'


const Calend = () => {
    const [value, setValue] = useState(new Date());

    return (
     <motion.div
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       className='p-4'
     >

     </motion.div>
    )
}

export default Calend