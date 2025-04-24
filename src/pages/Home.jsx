import Banner from "../components/Banner";
import Header from "../components/Hearder";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";

function Home() {
    return ( 

        <div>
            <Header></Header>
            <SpecialityMenu></SpecialityMenu>
            <TopDoctors></TopDoctors>
            <Banner></Banner>
        </div>
     );
}

export default Home;