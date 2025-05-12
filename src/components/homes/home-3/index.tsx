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
import HomeForm from "./HomeForm";
import Loader from "./Loader";
import AssistantReader from "../../../common/AssistantReader";


  

const HomeThree = () => {



  return (
    <>
       {/* <Test/> */}
      {/* <HeroHomeThree /> */}
      <HeroSlider/>
     <HomeForm/>
   
     <Loader/>
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
      <AssistantReader/>
      {/* <ScrollTop /> */}
    </>
  );
};

export default HomeThree;