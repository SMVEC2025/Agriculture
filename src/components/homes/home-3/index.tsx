import Preloader from "../../../common/Preloader";
import FooterThree from "../../../layouts/footers/FooterThree";
import AboutHomeThree from "./AboutHomeThree";
import ChooseHomeThree from "./ChooseHomeThree";
import CoursesHomeThree from "./CoursesHomeThree";
import CtaHomeThree from "./CtaHomeThree";
import FaqHomeThree from "./FaqHomeThree";
import HeroHomeThree from "./HeroHomeThree";
import InstagramHomeThree from "./InstagramHomeThree";
import TestimonialHomeThree from "./TestimonialHomeThree";
import HomeEvent from "./HomeEvent";
import FooterOne from "../../../layouts/footers/FooterOne";
import EventHomeThree from "./EventHomeThree";
 

const HomeThree = () => {
  return (
    <>
    <Preloader />
      <HeroHomeThree />
      <AboutHomeThree />
      {/* <MarqueeTwo /> */}
      <CoursesHomeThree />
      <ChooseHomeThree />
      <EventHomeThree />
      {/* <HomeEvent/> */}
      
      <InstagramHomeThree />

      {/* <MarqueeTwo /> */}
      {/* <PartnarsHomeThree /> */}
      {/* <BlogHomeThree /> */}
      <FaqHomeThree />
      <TestimonialHomeThree />

      <CtaHomeThree />
      {/* <MarqueeTwo /> */}
      {/* <FooterThree /> */}
      <FooterOne/>
      {/* <ScrollTop /> */}
    </>
  );
};

export default HomeThree;