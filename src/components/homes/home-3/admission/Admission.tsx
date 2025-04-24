import BreadcrumbEvent from "../../../../common/breadcrumb/BreadcrumbEvent"
import Preloader from "../../../../common/Preloader"
import ScrollTop from "../../../../common/ScrollTop"
import FooterOne from "../../../../layouts/footers/FooterOne"
import AboutEnd from "../../../about/AboutEnd"
import CoursesHomeThree from "../CoursesHomeThree"
import Journey from "./Journey"

function Admission() {
    return (  
        <>
            <Preloader />
            <BreadcrumbEvent title="Admission" subtitle="Admission" />
             <Journey/>
            <CoursesHomeThree/>
            <AboutEnd/>
            <FooterOne />
            <ScrollTop />
        </>)
}

export default Admission