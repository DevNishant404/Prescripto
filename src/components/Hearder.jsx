import { assets } from "../assets/assets";

function Header() {
    return ( 

        <div className="bg-primary flex md:flex-row flex-col md:px-10 justify-between px-3 rounded-lg">
            <div className="flex flex-col gap-4 pt-10 pb-5  md:pt-30">
                <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-white ">Book Appointment <br /> With Trusted Doctors</h1>
                <div className="flex lg:items-center flex-col lg:flex-row gap-2">
                    <img className="w-20" src={assets.group_profiles} alt="" />
                    <p className="text-sm font-semibold text-white leading-tigh">simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassel-free</p>
                </div>
                <a href="#speciality_menu" className="w-fit rounded-full outline border-none">
                <div className="flex gap-3 bg-white text-semibold text-gray-600 rounded-full px-6 py-2 w-fit cursor-pointer hover:scale-105 transition duration-150">
                    
                    <button className="rounded-full cursor-pointer">Book appointment</button>
                    <img className="w-5 rounded-full" src={assets.arrow_icon} alt="" />
                    </div>
                </a>
                
            </div>
            <div className="md:pt-20 pt-10 flex ">
                <img className="w-100 object-cover" src={assets.header_img} alt="" />
            </div>
        </div>
     );
}

export default Header;