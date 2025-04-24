import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Banner() {

    const navigate=useNavigate()
    return ( 

        <div className="bg-primary rounded-lg text-white mt-10 sm:mt-20 flex md:px-10 py-5 px-3 relative">
            <div>
                <h1 className="text-2xl font-bold">Book Appointment <br /> with 100+ Trusted Doctors</h1>
                <button onClick={()=>{navigate("/login");scroll(0,0)}} className="px-10 bg-white font-semibold cursor-pointer hover:scale-105 duration-200 text-gray-700 rounded-full mt-5 py-2 ">Create Account</button>
            </div>
            <div className="w-1/2 sm:block hidden">
                <img className=" z-20 w-60 absolute right-0 bottom-0" src={assets.appointment_img} alt="" />
                
            </div>
        </div>
     );
}

export default Banner;