import { assets } from "../assets/assets";

function About() {
    return ( 

        <div>
            <h1 className="text-xl font-semibold text-center mb-5 text-gray-700">ABOUT US</h1>
            <div className="flex sm:flex-row flex-col gap-2 ">
                <div>
                    <img className="" src={assets.about_image} alt="" />
                </div>
                <div className="text-gray-700">
                    <p>Welcome To Prescripto, Your Trusted Partner In Managing Your Healthcare Needs Conveniently And Efficiently. At Prescripto, We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Mangaging Their Health Records.</p>
                    <br />
                    <p>Prescripto is Committed To Excellence In Healthcare Technology. We Continuously Strive To Enhance Our platform , Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service. Whether You're Booking Your First Appointment Or managing Ongoing Care, Prescripto Is Here To Support Your Every Step Of the Way</p>
                    <p>
                        <br />
                        <span className="font-semibold text-gray-800">Our Vision</span>
                        <br />
                        Our Vision At Prescripto Is To Create A Seamless Healthcare Experience For Every user. We Aim To Bridge The Gap between Patients And Healthcare Provider, Making It Easier For You To Access The CAre You Need, When You need it
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <h3 className="font-semibold">WHY CHOOSE US</h3>
                <div className="grid sm:grid-cols-3 border border-gray-300 mt-5">
                    <div className="sm:border border-gray-200 sm:p-3 text-gray-700 hover:border-none hover:text-white hover:bg-primary transition duration-200 group">
                        <h3 className="mb-2 text-gray-900 font-semibold group-hover:text-white">EFFICIENCY:</h3>
                        <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
                    </div>
                    <div className="sm:border border-gray-200 sm:p-3 text-gray-700 hover:border-none hover:text-white hover:bg-primary transition duration-200 group">
                        <h3 className="mb-2 text-gray-900 font-semibold group-hover:text-white">CONVENIENCE:</h3>
                        <p>Access To A Network Of Trusted Healthcare Professionals In Your Area.</p>
                    </div>
                    <div className="sm:border border-gray-200 sm:p-3 text-gray-700 hover:border-none hover:text-white hover:bg-primary transition duration-200 group">
                        <h3 className="mb-2 text-gray-900 font-semibold group-hover:text-white">PERSONALIZATION:</h3>
                        <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default About;