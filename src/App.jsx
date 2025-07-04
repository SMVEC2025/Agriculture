import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Wrapper from "./layouts/Wrapper";
import HomeThree from "./components/homes/home-3";
import CoursesDetailsTwo from "./components/courses-details-2";
import Event from "./components/event";
import EventDetails from "./components/event-details";
import About from "./components/about";
import Instructor from "./components/instructor";
import InstructorDetails from "./components/instructor-details";
import Gallery from "./components/gallery";
import Faq from "./components/faq";
import NotFound from "./components/Error";
import Contact from "./components/contact";
import { AppContext, AppProvider } from "./context/AppContext";
import Navbar from "./components/navbar/Navbar";
import Admission from "./components/homes/home-3/admission/Admission";
import HorticultureAdmission from "./components/homes/home-3/admission/HorticultureAdmission";
import AboutHistory from "./components/abouthistory/AboutHistory";
import AgricultureAdmission from "./components/homes/home-3/admission/AgricultureAdmission";
import CampusLife from "./components/campuslife";
import InstantForm from "./common/InstantForm";
import MobileMenu from "./components/navbar/MobileMenu";
import MobileMenuBtn from "./components/navbar/MobileMenuBtn";
import { useContext } from "react";
import Test from "./components/test/Test";
import { ParallaxProvider } from "react-scroll-parallax";
import Horticulture from "./components/courses-details-2/Horticulture";
import usePageTracking from "./common/usePageTracking";
import AllIndiaTour from "./components/allindiatour/Index";
import EnquiredSucessfully from "./common/EnquiredSucessfully";
import AlreadyEnquired from "./common/AlreadyEnquired";


function App() {
 usePageTracking();
  return (
    <ParallaxProvider>
    <AppProvider>
      <Wrapper>
        <Navbar/>
        <InstantForm/>
        <MobileMenu/>
        
        <Routes>
          <Route path="/" element={<HomeThree />} />
          <Route path="/courses-detail-agriculture" element={<CoursesDetailsTwo />} />
          <Route path="/courses-detail-horticulture" element={<Horticulture />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event-details/:name" element={<EventDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faculty-list" element={<Instructor />} />
          <Route path="/faculty-details" element={<InstructorDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission-agriculture" element={<AgricultureAdmission />} />
          <Route path="/admission-horticulture" element={<HorticultureAdmission />} />
          <Route path="/history" element={<AboutHistory />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/test" element={<Test />} />
          <Route path="/all-india-tour" element={<AllIndiaTour />} />
          <Route path="/success" element={<EnquiredSucessfully />} />
          <Route path="/already-enquired" element={<AlreadyEnquired />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
      </AppProvider>
      </ParallaxProvider>
  );
}

export default App;
