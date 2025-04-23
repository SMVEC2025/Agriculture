import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import EventLisrArea from "./EventLisrArea";

 

const Event = () => {
  return (
    <>
    <Preloader />
      <BreadcrumbEvent title="Event List" subtitle="Event List" />
      <EventLisrArea />
			<MarqueeOne style_2={true} />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Event;