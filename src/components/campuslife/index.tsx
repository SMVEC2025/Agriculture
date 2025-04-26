import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent"
import Preloader from "../../common/Preloader"
import ScrollTop from "../../common/ScrollTop"
import FooterOne from "../../layouts/footers/FooterOne"
import AboutEnd from "../about/AboutEnd"
import Facilities from "./Facilities"
import MarqueeCarousel from "./MarqueeCarousel"

function CampusLife() {
  return (
   <>
    <Preloader />
    <BreadcrumbEvent title="Campus life" subtitle="campuslife"  />
    <div className="applipara">
    <p>The Master of Arts Degree in Islamic Texts provides students with access to the rational and traditional Islamic sciences through a guided course of study in primary sources. Our instructional approach is both didactic and dialectic, incorporating both contemporary and classical methods of learning. </p>
    </div>
    <Facilities/>
    <div className="section-title color-red text-center" style={{paddingTop:"3rem"}}>
                    <h6 className="wow fadeInUp">
                        Campus life
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Explore Our Vibrant Campus
                    </h2>
                    <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">A place of growth, innovation, and endless opportunities for every student.
                    </p>
                </div>
    <MarqueeCarousel/>
    <AboutEnd/>
    <FooterOne />
    <ScrollTop />
   </>
  )
}

export default CampusLife