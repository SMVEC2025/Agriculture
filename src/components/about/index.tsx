import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import AboutArea from "./AboutArea";
import AboutCounter from "./AboutCounter";
import AboutEnd from "./AboutEnd";
import AboutMission from "./AboutMission";
import FeatureArea from "./FeatureArea";

 

const About = () => {
	return (
		<>
		<Preloader />
			<BreadcrumbEvent title="About" subtitle="About" />
      <AboutArea />
	  <AboutMission/>
      <FeatureArea />
      {/* <AboutCounter /> */}
			{/* <MarqueeOne style_2={true} /> */}
			<AboutEnd/>
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default About;
