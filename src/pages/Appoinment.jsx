import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import RelatedDoc from "../components/RelatedDoc";

function Appointment() {
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const[docSlots,setDocSlots]=useState([])
  const[slotIndex,setSlotIndex]=useState(0)
  const[slotTime,setSlotTime]=useState("")
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysOfWeek=["SUN","MON","TUS","WED","THU","FRI","SAT"]


  async function fetchDocInfo() {
    const currentDoc = doctors.find((doc) => doc._id === docId);
    setCurrentDoctor(currentDoc);
  }

async function getAvailableSlots(params) {


    setDocSlots([])

    // getting current date

    let today=new Date()
    for(let i=0;i<7;i++){
        // getting date with index

        let currentDate=new Date(today)
        currentDate.setDate(today.getDate()+i)

        // setting end time of the date with index 

        let endTime=new Date()
        endTime.setDate(today.getDate()+i)
        endTime.setHours(21,0,0,0)

        // setting hours

        if(today.getDate()===currentDate.getDate()){
            currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1:10)
            
            currentDate.setMinutes(currentDate.getMinutes()>30 ? 30 :0)
        }else{
            currentDate.setHours(10)
            currentDate.setMinutes(0)
        }

        let timeSlots=[]

        while(currentDate<endTime){
            let formattedTime =currentDate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})
            // add slot to array
            timeSlots.push({
                datetime:new Date(currentDate),
                time:formattedTime
            })

            // Increment current time by 30 minutes
            currentDate.setMinutes(currentDate.getMinutes()+30)


        }

        setDocSlots(prev=>([...prev,timeSlots]))
    }

    
}



  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(()=>{

    getAvailableSlots()

  },[currentDoctor])

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])


  return (
    currentDoctor && (
      <div>
        <div className="flex sm:flex-row flex-col gap-3">
          <img
            className="bg-primary sm:w-60 sm:max-h-[250px] rounded-lg object-cover"
            src={currentDoctor.image}
            alt=""
          />
          <div>
            <div className="flex flex-col gap-2 border border-gray-200 p-3 rounded-lg shadow">
              <div className="">
                <h1 className="flex">
                  {currentDoctor.name}
                  <img className="w-4 ml-1" src={assets.verified_icon} alt="" />
                </h1>
                <div className="flex gap-2 items-center text-sm text-gray-700">
                  <p>{currentDoctor.degree} -</p>
                  <p>{currentDoctor.speciality}</p>
                  <button className="border border-gray-200 bg-blue-50 rounded-full px-2">
                    {currentDoctor.experience}
                  </button>
                </div>
              </div>
              <div>
                <p className="font-semibold">About</p>
                <p className="text-gray-700">{currentDoctor.about}</p>
              </div>
              <p>Appointment fee: ${currentDoctor.fees}</p>
            </div>
            <div className="p-3 border border-gray-200 mt-5 rounded-lg">
            <p>Booking Slots</p>
            <div className="flex gap-3 items-center hide-scrollbar overflow-x-scroll mt-4">
                {
                    docSlots.length && docSlots.map((item,index)=>(
                        <div
                        onClick={()=>setSlotIndex(index)}
                        className={`text-center py-6 min-w-16 cursor-pointer rounded-full ${slotIndex===index ? "bg-primary text-white":"border border-gray-200"}`} key={index}>
                            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center gap-8 hide-scrollbar w-full overflow-x-scroll mt-4">
                {
                    docSlots.length && docSlots[slotIndex].map((item,index)=>(
                        <p
                        onClick={()=>setSlotTime(item.time)}
                        className={`text-sm px-2 py-1 rounded-full font-light flex-shrink-0 cursor-pointer ${item.time==slotTime ? "bg-primary text-white":"text-gray-600 border border-gray-200"}`} key={index}>
                            {item.time.toLowerCase()}
                        </p>
                    ))
                }
            </div>
            <button className="bg-primary text-white text-sm font-light rounded-full  px-6 py-2 cursor-pointer mt-5">Book an appointment</button>
            </div>
          </div>
        </div>
        <RelatedDoc docId={docId} speciality={currentDoctor.speciality}></RelatedDoc>
      </div>
    )
  );
}

export default Appointment;