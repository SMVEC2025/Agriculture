import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import FaqArea from "./FaqArea";

 
const Faq = () => {
  return (
    <>
   
    <Preloader />
			<BreadcrumbEvent title="Faq" subtitle="Faq" />
			<FaqArea />       
			{/* <MarqueeOne style_2={true} /> */}
			<FooterOne />
      <ScrollTop />
    </>
  );
};

export default Faq;