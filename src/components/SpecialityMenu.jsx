import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

function SpecialityMenu() {
    return ( 

        <div id="speciality_menu" className="flex flex-col justify-center items-center md:mt-10 mt-4 gap-4">
            <h1 className="font-semibold text-xl md:text-2xl">Find by Speciality</h1>
            <p className="text-center text-sm  text-gray-600">Simply browse through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free</p>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-2">
                {
                    specialityData.map((data,idx)=>{
                        return <Link className="flex hover:-translate-y-1 transition duration-200 flex-col justify-center items-center" key={idx} to={`/doctors/${data.speciality}`}>
                            <img className="w-20" src={data.image} alt="" />
                            <p className="font-sm font-semibold">{data.speciality}</p>
                        </Link>
                    })
                }
            </div>
        </div>
     );
}

export default SpecialityMenu;