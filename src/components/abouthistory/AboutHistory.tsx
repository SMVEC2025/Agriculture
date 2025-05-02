import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent"
import Preloader from "../../common/Preloader"
import ScrollTop from "../../common/ScrollTop"
import FooterOne from "../../layouts/footers/FooterOne"
import AboutEnd from "../about/AboutEnd"
import BoardMembers from "./BoardMembers"
import { Timeline } from "./Timeline"

function AboutHistory() {
  return (
    <>
    	<Preloader />
			<BreadcrumbEvent title="history" subtitle="history" />
      <div className="applipara">
                <p>The Master of Arts Degree in Islamic Texts provides students with access to the rational and traditional Islamic sciences through a guided course of study in primary sources. Our instructional approach is both didactic and dialectic, incorporating both contemporary and classical methods of learning. </p>
            </div>
      <Timeline/>
      <BoardMembers/>
			<AboutEnd/>
			<FooterOne />
			<ScrollTop />
    </>
  )
}

export default AboutHistory