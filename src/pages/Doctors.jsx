import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Doctors() {

    const navigate=useNavigate()

    const {speciality}=useParams()
    const [filterDoc,setFilterDoc]=useState([])

    const {doctors}=useContext(AppContext)

    function applyFilter() {
        if (speciality) {
            const filtered = doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase());
    
            if (filtered.length > 0) {
                setFilterDoc(filtered);
            } else {
                setFilterDoc(doctors)
            }
        } else {
            setFilterDoc(doctors)
        }
    }
    useEffect(()=>{
        applyFilter()
    },[doctors,speciality])

    return (  

        <div>
            <p className="md:text-xl mb-5 font-semibold text-gray-700">Browse through the doctors specialist</p>
            <div className="flex md:flex-row flex-col gap-2">
                <div className="w-fit pr-3 flex md:flex-col flex-row justify-center flex-wrap md:justify-start gap-2">
                    <p className="bg-blue-50 px-1 rounded text-gray-700 hover:text-black cursor-pointer border border-gray-200" onClick={()=>navigate("/doctors/General physician")}>Genreal Physician</p>
                    <p className="bg-blue-50 px-1 rounded text-gray-700 hover:text-black cursor-pointer border border-gray-200" onClick={()=>navigate("/doctors/Gynecologist")}>Gynecologist</p>
                    <p className="bg-blue-50 px-1 rounded text-gray-700 hover:text-black cursor-pointer border border-gray-200" onClick={()=>navigate("/doctors/Dermatologist")}>Dermatologist</p>
                    <p className="bg-blue-50 px-1 rounded text-gray-700 hover:text-black cursor-pointer border border-gray-200" onClick={()=>navigate("/doctors/Pediatricians")}>Pediatricians</p>
                    <p className="bg-blue-50 px-1 rounded text-gray-700 hover:text-black cursor-pointer border border-gray-200" onClick={()=>navigate("/doctors/Neurologist")}>Neurologiist</p>
                    <p className="bg-blue-50 px-1 rounded text-gray-700 hover:text-black cursor-pointer border border-gray-200" onClick={()=>navigate("/doctors/Gastroenterologist")}>Gastroenterologist</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-3">
                {
                    filterDoc.map((doctor,idx)=>{
                        return(
                            <div
                            onClick={()=>navigate(`/appointment/${doctor._id}`)}
                            key={idx} className="border overflow-hidden rounded-lg cursor-pointer border-gray-200 shadow">
                                <img className="bg-blue-50 hover:scale-105 duration-500" src={doctor.image} alt="" />
                                <div className="p-2">
                                    <div className="text-green-500 text-sm flex gap-2 items-center">
                                        <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                        <p>Available</p>
                                    </div >
                                    <p className="text-sm font-semibold  overflow-hidden text-ellipsis  whitespace-nowrap">{doctor.name}</p>
                                    <p className="text-sm font-semibold  overflow-hidden text-ellipsis  whitespace-nowrap text-gray-800">{doctor.speciality}</p>
                                </div>
                               
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default Doctors
