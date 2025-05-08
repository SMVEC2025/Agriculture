import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import Cards from "./Cards";
import CoursesDetailsTwoArea from "./CoursesDetailsTwoArea";

const CoursesDetailsTwo = () => {
	return (
		<>
		<Preloader />
			{/* <BreadcrumbCoursesDetailsTwo /> */}
			<BreadcrumbEvent heroImage='/assets/img/breadcrumb/DJI_0981.jpg' title="About" subtitle="About" />
			<CoursesDetailsTwoArea />
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default CoursesDetailsTwo;
