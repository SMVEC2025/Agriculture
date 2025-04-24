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
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/navbar/Navbar";
import Admission from "./components/homes/home-3/admission/Admission";
import Application from "./components/homes/home-3/admission/Application";
import AboutHistory from "./components/abouthistory/AboutHistory";

function App() {
  return (
    <BrowserRouter>
    <AppProvider>
      <Wrapper>
        <Navbar/>
        {/* Define your Routes here */}
        <Routes>
          <Route path="/" element={<HomeThree />} />
          <Route path="/courses-detail" element={<CoursesDetailsTwo />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<Instructor />} />
          <Route path="/faculty-details" element={<InstructorDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/application" element={<Application />} />
          <Route path="/history" element={<AboutHistory />} />
          
          
          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
