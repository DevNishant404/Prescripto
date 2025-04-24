import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

function Navbar() {
    const navigate=useNavigate()

    const[showMenu, setShowMenu]=useState(false)
    const[token,setToken]=useState(true)
    const [openProfile,setOpenProfile]=useState(false)

    function handleonclick(){
      setShowMenu(false)
    }

    document.addEventListener("scroll",()=>{
      setShowMenu(false)
      setOpenProfile(false)
    })

    console.log(openProfile)
  return (
    <div
    
    className="flex items-center justify-between border-b border-b-gray-200  py-4 mb-5">
      <img onClick={()=>navigate("/")} className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className="hidden md:flex gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="gap-3 flex relative">
        {
            token?
             <div className=" group relative cursor-pointer">
              <div
              onClick={()=>setOpenProfile(true)}
              className="flex items-center gap-2 cursor-pointer">
              <img src={assets.profile_pic} className="w-8 rounded-full" alt="" />
              <img src={assets.dropdown_icon} className="w-2.5" alt="" />
              </div>
                
                <div className={`absolute top-0 right-0 pt-14 text-base ${openProfile? "block":"hidden"} font-medium  text-gray-600  z-20  `}>
                <div className="min-w-48 bg-stone-100 rounded p-3  flex flex-col gap-2">
                    <p  onClick={()=>{navigate("/my-profile");setOpenProfile(false)}}  className="hover:text-black cursor-pointer">My Profile</p>
                    <p  onClick={()=>{navigate("/my-appointments");setOpenProfile(false)}}  className="hover:text-black cursor-pointer">My appointment</p>
                    <p  onClick={()=>{setToken(false),setOpenProfile(false)}}  className="hover:text-black cursor-pointer">Logout</p>
                </div>
                </div>
                
             </div>:
             <button onClick={()=>navigate("/login")} className="bg-primary cursor-pointer text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
        }
        <img
        onClick={(e)=>{setShowMenu(true);e.stopPropagation()}}
        className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt="" />

        {/* mobile menu */}
        <div
        onClick={(e)=>e.stopPropagation()}
        className={`bg-white ${showMenu?"block":"hidden"} fixed right-0 top-0 border border-gray-200 shadow w-64 p-3`}>
          <div className="flex justify-between items-center  ">
            <img className="w-25" src={assets.logo} alt="" />
            <img onClick={()=>setShowMenu(false)} className="w-5 cursor-pointer" src={assets.cross_icon} alt="" />
          </div>
          <div className="mt-5">
            <ul>
            <NavLink to={"/"}>
          <li onClick={()=>handleonclick()} className="py-1 hover:bg-gray-100 hover:text-black text-gray-800">Home</li>
        </NavLink>
        <NavLink to={"/doctors"}>
          <li onClick={()=>handleonclick()} className="py-1 hover:bg-gray-100 hover:text-black text-gray-800">All Doctors</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li onClick={()=>handleonclick()} className="py-1 hover:bg-gray-100 hover:text-black text-gray-800">About</li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li onClick={()=>handleonclick()} className="py-1 hover:bg-gray-100 hover:text-black text-gray-800">Contact</li>
        </NavLink>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Navbar;
