import BreadcrumbEvent from "../../../../common/breadcrumb/BreadcrumbEvent"
import Preloader from "../../../../common/Preloader"
import ScrollTop from "../../../../common/ScrollTop"
import FooterOne from "../../../../layouts/footers/FooterOne"
import AboutEnd from "../../../about/AboutEnd"
import ApplicationForm from "./ApplicationForm"
import Qualification from "./Qualification"

function Application() {
  return (
    <>
    <Preloader />
    <BreadcrumbEvent title="Apply for Bsc.agri" subtitle="Apply for Bsc.agri" />
    <div className="applipara">
    <p>The Master of Arts Degree in Islamic Texts provides students with access to the rational and traditional Islamic sciences through a guided course of study in primary sources. Our instructional approach is both didactic and dialectic, incorporating both contemporary and classical methods of learning. </p>
    </div>
    <div className="appli_container">
        <div className="appli_container1">
            <h6>Bsc.agriculure</h6>
            <p>B.Sc. Agriculture is a four-year undergraduate program designed to provide in-depth knowledge of agricultural science and modern farming practices. The course covers a wide range of subjects including agronomy, soil science, horticulture, agricultural economics, plant breeding, pest management, and sustainable agriculture. Students gain hands-on experience through fieldwork, lab experiments, and rural agricultural work experience programs (RAWE). With the growing focus on food security and sustainable practices, B.Sc. Agriculture opens up diverse career opportunities in government agencies, agribusiness firms, research institutions, and entrepreneurship in the agri-tech space.

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

export default Application