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
import { useTalkBack } from "../../../context/TalkBackContext";


  

const HomeThree = () => {
  const { speakText, stopSpeaking, speaking } = useTalkBack();

const handleStartTalk = () => {
    const allText = Array.from(document.querySelectorAll('[data-talkback]'))
      .map((el) => el.textContent)
      .filter(Boolean)
      .join('. ');

    speakText(allText);
  };
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
       <button  onClick={handleStartTalk} style={{ position: 'fixed', top: 100, right: 20, zIndex: 999 }}>
        🔊 Start TalkBack
      </button>
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