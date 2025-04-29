import BreadcrumbEvent from "../../../../common/breadcrumb/BreadcrumbEvent"
import Preloader from "../../../../common/Preloader"
import ScrollTop from "../../../../common/ScrollTop"
import FooterOne from "../../../../layouts/footers/FooterOne"
import AboutEnd from "../../../about/AboutEnd"
import ApplicationForm from "./ApplicationForm"

function HorticultureAdmission() {
    return (
        <>
            <Preloader />
            <BreadcrumbEvent title="Apply for B.Sc. (Hons.) Horticulture" subtitle="Apply for B.Sc. (Hons.) Horticulture
" />
            <div className="applipara">
                <p>The Master of Arts Degree in Islamic Texts provides students with access to the rational and traditional Islamic sciences through a guided course of study in primary sources. Our instructional approach is both didactic and dialectic, incorporating both contemporary and classical methods of learning. </p>
            </div>
            <div className="appli_container">
                <div className="appli_container1">
                    <h6>B.Sc. (Hons.) Horticulture
                    </h6>
                    <p>B.Sc. degree in Horticulture is an undergraduate degree program that focuses on the study of garden plants, gardening, crop production, landscaping, and related areas. Students learn about various aspects of horticulture, such as plant anatomy and physiology, soil science, plant pathology, entomology, agronomy, and post-harvest technology. Through the program, students develop a deep understanding of plant science and its applications in horticulture. They learn about different horticultural practices, including the cultivation of fruits, vegetables, ornamental plants, medicinal plants, and landscaping techniques. They also gain knowledge about sustainable and efficient crop production methods, plant propagation, plant breeding, and the management of pests, diseases, and weeds. After completing a B.Sc. Horticulture degree, graduates can pursue careers in the agricultural and horticultural sectors. They can work as horticulturists, farm managers, crop consultants, research assistants, nursery managers, landscape designers, or agricultural extension officers and also graduates can start their own horticultural businesses.

                    </p>

                </div>
                <div className="appli_container2">
                    <img src="https://img.freepik.com/free-photo/portrait-businesswoman-beige-suit-high-heels-walking-street-corporate-woman-going_1258-194142.jpg" alt="" />
                </div>
            </div>
            <ApplicationForm />
            {/* <Qualification/> */}
            <AboutEnd />
            <FooterOne />
            <ScrollTop />
        </>
    )
}

export default HorticultureAdmission