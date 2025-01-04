import { FaHome, FaCar  } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';
  

const SideBar =() => {
   return (
      <main className="flex flex-col space-y-5 w-[5dvw] max-h-dvh bg-main mr-0 p-4 text-xl fixed">
        <div className="text-blue-400 ">
          <NavLink to="/">logo</NavLink>
        </div>

        <div className="space-y-7 pt-11">
         <NavLink to="/"> <FaHome className="active:text-blue-600 hover:text-green-500"/> </NavLink>
         <NavLink to="/car"> <FaCar className=""/> </NavLink>
         <NavLink to="/house"> <GiFamilyHouse className=""/> </NavLink>
         <NavLink to="/favourite"> <GrFavorite className=""/> </NavLink>
         
        </div>

        <div className="pt-7 space-y-7 text-xl">
        <NavLink to="/"><MdHistory className=""/> </NavLink>
        <NavLink to="/"><FcSettings className=""/> </NavLink>
        </div>

        <div className="pt-40 text-xl">
          <IoIosLogOut className=""/>
        </div>

      </main>
   )
 }
export default SideBar;