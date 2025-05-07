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
    <p>The B.Sc (Hons) Agriculture program equips students with in-depth knowledge of agricultural sciences through a balanced blend of theoretical instruction and hands-on experience. This course emphasizes modern farming techniques, sustainable agriculture, soil and crop management, and agri-technology, while also drawing on traditional practices. With a focus on innovation and real-world application, students are prepared to contribute effectively to food security, environmental stewardship, and the advancement of rural economies.</p>
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
            <img src="/assets/img/gallery/gallery3.jpg" alt="" />
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