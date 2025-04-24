import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function MyAppointment() {
  const{doctors}=useContext(AppContext)

    return (

        <div>
          <p className="text-xl font-semibold mb-5">My appointments</p>
          <div>
            {
              doctors.slice(0,4).map((doc)=>{
                return (

                  <div className="flex gap-4  text-sm mb-2 border-b border-b-gray-200" key={doc._id}>
                      <img  className="flex max-h-37  bg-blue-50 rounded-md" src={doc.image} alt="" />
                      <div className="flex sm:justify-between sm:flex-row flex-col sm:items-end w-full">
                      <div className="text-sm flex flex-col gap-3">
                        <div>
                        <h3 className="font-medium text-md ">{doc.name}</h3>
                        <p className="text-gray-700">{doc.speciality}</p>
                        </div>
                        <div>
                        <p className="text-md font-medium">Address:</p>
                        <p className="text-gray-700">{doc.address.line1}</p>
                        <p className="text-gray-700">{doc.address.line2}</p>
                        </div>
                        <p>date</p>
                      </div>
                      <div className="flex flex-col gap-2">
                      <button className="px-3 py-2 cursor-pointer bg-primary text-white">Pay Online</button>
                      <button
                      
                      className="px-3 py-2 cursor-pointer border border-gray-200 hover:border-none hover:bg-red-500 transition duration-200 hover:text-white">Cancle</button>
                      </div>
                     
                      </div>

                      
                  </div>
                  
                )
              })
            }
          </div>
        </div>
      );
}

export default MyAppointment;