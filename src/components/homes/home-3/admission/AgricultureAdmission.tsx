import BreadcrumbEvent from "../../../../common/breadcrumb/BreadcrumbEvent"
import Preloader from "../../../../common/Preloader"
import ScrollTop from "../../../../common/ScrollTop"
import FooterOne from "../../../../layouts/footers/FooterOne"
import AboutEnd from "../../../about/AboutEnd"
import ApplicationForm from "./ApplicationForm"

function AgricultureAdmission() {
  return (
    <>
    <Preloader />
    <BreadcrumbEvent title="Apply for B.Sc. (Hons.) Agriculture" subtitle="Apply for B.Sc. (Hons.) Agriculture" />
    <div className="applipara">
    <p>The Master of Arts Degree in Islamic Texts provides students with access to the rational and traditional Islamic sciences through a guided course of study in primary sources. Our instructional approach is both didactic and dialectic, incorporating both contemporary and classical methods of learning. </p>
    </div>
    <div className="appli_container">
        <div className="appli_container1">
            <h6>B.Sc. (Hons.) Agriculture</h6>
            <p>B.Sc. degree in Agriculture is an undergraduate program that focuses on the scientific principles and modern practices involved in farming, crop production, soil management, and agricultural sustainability. The course covers a wide range of topics, including agronomy, soil science, plant pathology, entomology, agricultural economics, horticulture, genetics, and irrigation techniques. Students gain in-depth knowledge of crop cultivation methods, pest and disease control, seed technology, organic farming, and the use of biotechnology in agriculture.

The program also emphasizes sustainable farming practices, efficient water and nutrient management, and the integration of modern technologies like precision agriculture. Through practical training, students develop the skills required for managing farms, agricultural enterprises, and research projects.

Upon completion, graduates can pursue careers in the agricultural sector as agricultural officers, farm managers, agronomists, soil scientists, seed technologists, or extension officers. They can also work with agro-based industries, research institutions, or start their own farming ventures and agri-business enterprises.



</p>
              
        </div>
        <div className="appli_container2">
            <img src="https://img.freepik.com/free-photo/portrait-businesswoman-beige-suit-high-heels-walking-street-corporate-woman-going_1258-194142.jpg" alt="" />
        </div>
    </div>
    <ApplicationForm/>
    {/* <Qualification/> */}
    <AboutEnd/>
    <FooterOne />
    <ScrollTop /> 
    </>
 )
}

export default AgricultureAdmission