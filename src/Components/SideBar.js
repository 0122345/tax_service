import { FaHome, FaCar  } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { GrFavorite } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
  

const SideBar =() => {
   return (
      <main className="w-[6dvw] max-h-dvh bg-main">
        <div className="text-blue-400 text-xl">
          logo
        </div>

        <div className="">
          <FaHome className=""/>
          <FaCar />
          <GiFamilyHouse />
          <GrFavorite />
          <MdHistory />
          <FcSettings />
        </div>

        <div>
          <IoIosLogOut />
        </div>
      </main>
   )
 }
export default SideBar;