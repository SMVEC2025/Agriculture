import BreadcrumbInstructor from "../../common/breadcrumb/BreadcrumbInstructor";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import CoursesDetailsArea from "./CoursesDetailsArea";
import InstructorDetailsArea from "./InstructorDetailsArea";

 
const InstructorDetails = () => {
  return (
    <>
    <Preloader />
			<BreadcrumbInstructor />
      <InstructorDetailsArea />       
      <CoursesDetailsArea />       
			<MarqueeOne style_2={true} />
			<FooterOne />
      <ScrollTop />
    </>
  );
};

export default InstructorDetails;