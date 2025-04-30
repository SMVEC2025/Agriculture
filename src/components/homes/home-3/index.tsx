import Preloader from "../../../common/Preloader";
import AboutHomeThree from "./AboutHomeThree";
import ChooseHomeThree from "./ChooseHomeThree";
import CoursesHomeThree from "./CoursesHomeThree";
import CtaHomeThree from "./CtaHomeThree";
import FaqHomeThree from "./FaqHomeThree";
import InstagramHomeThree from "./InstagramHomeThree";
import TestimonialHomeThree from "./TestimonialHomeThree";
import FooterOne from "../../../layouts/footers/FooterOne";
import EventHomeThree from "./EventHomeThree";
import HeroSlider from "./HeroSlider";


  

const HomeThree = () => {



  return (
    <>
    <Preloader />
       {/* <Test/> */}
      {/* <HeroHomeThree /> */}
      <HeroSlider/>

      <AboutHomeThree />
      {/* <MarqueeTwo /> */}
      <CoursesHomeThree />
      <ChooseHomeThree />
      <EventHomeThree  />
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