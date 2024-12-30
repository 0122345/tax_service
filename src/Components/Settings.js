
import React,{useState} from 'react'

const Settings = () => {
     const [profiling, setProfiling] = useState(true);

     const profile = [
          {
               name: "Ntwari Ashimwe Fiacre",
               age: 25,
               email: "ntwarifiacre043@gmail.com",
               phone: '0788 123 456',
               address: 'Kigali, Rwanda',
          }
     ] 

    return(
      <main className="">
          <div className="">
              <h1 className=""><u>Settings</u></h1>


              
              <div id="profile_sett" className="">
                Edit Profile
                 
                </div>

              <div className="">
              <label className="block text-gray-700">Theme</label>
              <select className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">
                <option>System UI</option>
                <option>Dark UI</option>
                <option>Light UI</option>
              </select>
              </div>
          </div>
      </main>
    )
}

export default Settings