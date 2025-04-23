import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import AboutArea from "./AboutArea";
import AboutCounter from "./AboutCounter";
import FeatureArea from "./FeatureArea";

 

const About = () => {
	return (
		<>
		<Preloader />
			<BreadcrumbEvent title="About" subtitle="About" />
      <AboutArea />
      <FeatureArea />
      <AboutCounter />
			<MarqueeOne style_2={true} />
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default About;
