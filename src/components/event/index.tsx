import { useContext } from "react";
import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import EventLisrArea from "./EventLisrArea";
import { AppContext } from "../../context/AppContext";

 

const Event = () => {
  const {events} = useContext(AppContext)
  return (
    <>
    <Preloader />
      <BreadcrumbEvent title="Event List" subtitle="Event List" />
      <EventLisrArea events={events} />
			{/* <MarqueeOne style_2={true} /> */}
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Event;