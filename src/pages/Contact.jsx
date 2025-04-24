import { assets } from "../assets/assets";

function Contact() {
    return ( 

        <div className="">
            <h1 className="font-semibold text-xl text-center mb-10">CONTACT US</h1>
            <div className="flex sm:flex-row flex-col gap-4">
                <img className="sm:max-h-[350px]" src={assets.contact_image} alt="" />
                <div className="flex flex-col gap-6 text-gray-700">
                    <h3 className="font-semibold   text-gray-800">OUR OFFICE</h3>
                    <p>
                        54709 Willms Station <br /> Suite 350, Washington, USA
                    </p>
                    <p>
                        Tel: +918881343598 <br /> Email: bytewizard404@gmail.com
                    </p>
                    <div>
                        <h3 className="mb-3 text-xl font-semibold text-gray-800">CAREER AT PRESCRIPTO</h3>
                        <p>Learn more about our teams and job openings.</p>
                        
                    </div>
                    <button className="bg-primary sm:w-[70%] w-full text-sm text-white hover:scale-105 transition duration-200 cursor-pointer px-6 py-2 rounded-full">Explore Jobs</button>
                </div>
            </div>
        </div>
     );
}

export default Contact;