import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appoinment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-4 md:px-20 pb-10 overflow-x-hidden">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/doctors" element={<Doctors></Doctors>}></Route>
        <Route path="/doctors/:speciality" element={<Doctors></Doctors>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/my-profile" element={<MyProfile></MyProfile>}></Route>
        <Route path="/my-appointments" element={<MyAppointment></MyAppointment>}></Route>
        <Route path="/appointment/:docId" element={<Appointment></Appointment>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
   );
}

export default App;