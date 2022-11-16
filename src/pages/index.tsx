import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/sections/contact/Contact";
import TopCreators from "../components/sections/creators/topCreators/TopCreators";
import HowToBeCreator from "../components/sections/creators/howToBeCreator/HowToBeCreator";
import HomeSection from "../components/sections/home/Home";
import Meet from "../components/sections/meet/Meet";
import NotableDrops from "../components/sections/notableDrops/NotableDrops";
import Sidebar from "../components/navbar/sideBar/Sidebar";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen overflow-hidden max-w-screen ">
      <Navbar />
      <Sidebar />
      <HomeSection />
      <div className="flex flex-col child:py-[80px] bg-colection-100">
        <NotableDrops />
        <TopCreators />
        <HowToBeCreator />
        <Meet />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
