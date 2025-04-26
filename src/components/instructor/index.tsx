import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import InstructorArea from "./InstructorArea";

 

const Instructor = () => {
  return (
    <>
    <Preloader />
			<BreadcrumbEvent title="faculties" subtitle="faculty" />
      <InstructorArea />       
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
      <ScrollTop />
    </>
  );
};

export default Instructor;