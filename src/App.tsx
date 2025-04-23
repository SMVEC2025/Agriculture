
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
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


const router = createBrowserRouter([
  { path: "/", element: <HomeThree /> },
  { path: "/courses-details-2", element: <CoursesDetailsTwo /> },
  { path: "/event", element: <Event /> },
  { path: "/event-details", element: <EventDetails /> },
  { path: "/about", element: <About /> }, 
  { path: "/instructor", element: <Instructor /> }, 
  { path: "/instructor-details", element: <InstructorDetails /> }, 
  { path: "/gallery", element: <Gallery /> }, 
  { path: "/faq", element: <Faq /> }, 
  { path: "/contact", element: <Contact /> }, 



  { path: "*", element: <NotFound /> },
]);


function App() {

  return (
    <Wrapper> 
      <RouterProvider router={router} />
    </Wrapper>
  )
}

export default App
