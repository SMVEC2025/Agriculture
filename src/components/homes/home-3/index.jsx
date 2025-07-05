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
import Placement from "./Placement";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import axios from "axios";




const HomeThree = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popImage, setPopImage] = useState()

  useEffect(() => {
    async function getPop() {
      const hasVisited = sessionStorage.getItem("hasVisitedHome");

      try {
        const res = await axios.get('https://agribackend.vercel.app/api/get-pop')

        setTimeout(() => {
          if (!hasVisited && res.data?.status) {
          setShowPopup(true);
          setPopImage(res.data?.img)
          sessionStorage.setItem("hasVisitedHome", "true");
        } else {

        }
        }, 2000);
      }
      catch (err) {
        // console.log(err)
      }
    }
    getPop()

  }, []);

  return (
    <>
      {/* <Test/> */}
      {/* <HeroHomeThree /> */}
      {showPopup && <Popup popImage={popImage} onClose={() => setShowPopup(false)} />}
      <HeroSlider />
      <HomeForm />
      <Loader />
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
      <Placement />
      <TestimonialHomeThree />

      <CtaHomeThree />
      {/* <MarqueeTwo /> */}
      {/* <FooterThree /> */}
      <FooterOne />
      {/* <ScrollTop /> */}
    </>
  );
};

export default HomeThree;