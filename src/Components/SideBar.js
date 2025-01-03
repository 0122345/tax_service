import { FaHome, FaCar  } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
  

const SideBar =() => {
   return (
      <main className="flex flex-col space-y-5 w-[5dvw] max-h-dvh bg-main mr-0 p-4 text-xl fixed">
        <div className="text-blue-400 ">
          logo
        </div>

        <div className="space-y-7 pt-11">
          <FaHome className="active:text-blue-600 hover:text-green-500"/>
          <FaCar className=""/>
          <GiFamilyHouse className=""/>
          <GrFavorite className=""/>
         
        </div>

        <div className="pt-7 space-y-7 text-xl">
        <MdHistory className=""/>
        <FcSettings className=""/>
        </div>

        <div className="pt-40 text-xl">
          <IoIosLogOut className=""/>
        </div>

      </main>
   )
 }
export default SideBar;