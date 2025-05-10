import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent"
import Preloader from "../../common/Preloader"
import ScrollTop from "../../common/ScrollTop"
import FooterOne from "../../layouts/footers/FooterOne"
import AboutEnd from "../about/AboutEnd"
import BoardMembers from "./BoardMembers"
import Dean from "./Dean"
import { Timeline } from "./Timeline"

function AboutHistory() {
  return (
    <>
    	<Preloader />
			<BreadcrumbEvent title="history" subtitle="history" />
      <div className="applipara">
                <p>Sri Manakula Vinayagar Engineering College (SMVEC) stands as a beacon of academic excellence and visionary leadership in the field of higher education. Established with the noble mission of empowering students through quality technical education, SMVEC has grown from its humble beginnings into one of the most respected engineering institutions in the region.</p>
            </div>
      <Timeline/>
      <Dean/>
      <BoardMembers/>
			<AboutEnd/>
			<FooterOne />
			<ScrollTop />
    </>
  )
}

export default AboutHistory