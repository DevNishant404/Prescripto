import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function RelatedDoc({ docId, speciality }) {
  const { doctors } = useContext(AppContext);
  const navigate=useNavigate()

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality == speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);
  return (

    <div className="mt-10 flex justify-center items-center flex-col">
    <h1 className="text-2xl font-semibold">Top Doctors to Book</h1>
    <p className="mb-2 text-sm">Simply browse our extensive list of trusted doctors</p>

    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-3">
        {
            relDoc.map((doctor,idx)=>{

                return (
                    <div
                    onClick={()=>{navigate(`/appointment/${doctor._id}`); scroll(0,0)}}
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
    <button onClick={()=>{navigate("/doctors"); scroll(0,0)} } className="bg-primary px-10 py-1 font-semibold rounded-full text-white cursor-pointer hover:scale-105 duration-200 mt-5">More</button>
</div>
  );
}

export default RelatedDoc;
