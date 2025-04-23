import Preloader from "../../../common/Preloader";
import FooterThree from "../../../layouts/footers/FooterThree";
import HeaderThree from "../../../layouts/headers/HeaderThree";
import AboutHomeThree from "./AboutHomeThree";
import ChooseHomeThree from "./ChooseHomeThree";
import CoursesHomeThree from "./CoursesHomeThree";
import CtaHomeThree from "./CtaHomeThree";
import FaqHomeThree from "./FaqHomeThree";
import HeroHomeThree from "./HeroHomeThree";
import InstagramHomeThree from "./InstagramHomeThree";
import TestimonialHomeThree from "./TestimonialHomeThree";
import HomeEvent from "./HomeEvent";
 

const HomeThree = () => {
  return (
    <>
    <Preloader />
      <HeaderThree />
      <HeroHomeThree />
      <AboutHomeThree />
      {/* <MarqueeTwo /> */}
      <CoursesHomeThree />
      <ChooseHomeThree />
      {/* <EventHomeThree /> */}
      <HomeEvent/>
      <TestimonialHomeThree />
      {/* <MarqueeTwo /> */}
      {/* <PartnarsHomeThree /> */}
      {/* <BlogHomeThree /> */}
      <FaqHomeThree />
      <InstagramHomeThree />
      <CtaHomeThree />
      {/* <MarqueeTwo /> */}
      <FooterThree />
      {/* <ScrollTop /> */}
    </>
  );
};

export default HomeThree;