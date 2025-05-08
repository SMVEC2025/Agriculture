import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import CoursesDetailsTwoArea from "./CoursesDetailsTwoArea";
import heroimg from '/assets/img/breadcrumb/DJI_0981.jpg'

const CoursesDetailsTwo = () => {
	return (
		<>
		<Preloader />
			<BreadcrumbEvent heroImage={heroimg} title="About" subtitle="About" />
			<CoursesDetailsTwoArea />
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default CoursesDetailsTwo;
