import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import ContactArea from "./ContactArea";
import ContactForm from "./ContactForm";
import MapArea from "./MapArea";

 

const Contact = () => {
	return (
		<>
		<Preloader />
			<BreadcrumbEvent title="Contact" subtitle="Contact" />
			<ContactArea />
      <MapArea />
      <ContactForm />
			<MarqueeOne style_2={true} />
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default Contact;
