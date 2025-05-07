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
    <p>Campus life at SMVEC is vibrant, inclusive, and designed to nurture both academic excellence and personal growth. Spread across a lush, green campus with state-of-the-art infrastructure, SMVEC offers students a dynamic environment where learning extends beyond the classroom. Students benefit from well-equipped labs, digital libraries, modern hostels, and a wide range of sports and recreational facilities.</p>
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