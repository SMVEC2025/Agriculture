import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent"
import Preloader from "../../common/Preloader"
import ScrollTop from "../../common/ScrollTop"
import FooterOne from "../../layouts/footers/FooterOne"
import AboutArea from "../about/AboutArea"
import AboutEnd from "../about/AboutEnd"

function AboutHistory() {
  return (
    <>
    	<Preloader />
			<BreadcrumbEvent title="history" subtitle="history" />
      <AboutArea />
         
			<AboutEnd/>
			<FooterOne />
			<ScrollTop />
    </>
  )
}

export default AboutHistory