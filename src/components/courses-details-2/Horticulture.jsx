import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import CoursesDetailHorticulture from "./CoursesDetailHorticulture";
import CoursesDetailsTwoArea from "./CoursesDetailsTwoArea";

const Horticulture = () => {
	return (
		<>
		<Preloader />
			{/* <BreadcrumbCoursesDetailsTwo /> */}
			<BreadcrumbEvent heroImage='/assets/img/breadcrumb/DJI_0981.JPG' title="About" subtitle="About" />
			<CoursesDetailHorticulture/>
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default Horticulture;
