import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Footer() {
    const navigate=useNavigate()
    return (

        <footer className=" mt-10 sm:mt-20">
            <div className="grid sm:grid-cols-3 sm:justify-items-center gap-4 sm:gap-2 border-b pb-5 border-b-gray-200">

            <div className="flex flex-col gap-4">
                <img
                className="w-40 cursor-pointer" src={assets.logo} alt="" />
                <p className=" text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet saepe quasi nesciunt minus totam ea voluptatibus ipsa quo reiciendis architecto!</p>
            </div>
            <div>
                <h3 className="font-semibold">COMPANY</h3>
                <ul className=" text-gray-700">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div >
                <h3 className="font-semibold">GET IN TOUCH</h3>
                <ul className=" text-gray-700">
                    <li>+918881343598</li>
                    <li>bytewizard404@gmail.com</li>
                </ul>
            </div>
            </div>
            <div className="mt-3">
                <p className="font-semibold text-center text-gray-700 tracking-tight">Copyright 2025@ Prescripto -All Right Reserved</p>
            </div>
        </footer>
      );
}

export default Footer;