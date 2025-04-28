import { useContext, useEffect } from "react";
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
 
import axios from 'axios';
import { AppContext } from "../../../context/AppContext";

  

const HomeThree = () => {
  const {setEvents,setLoader} =useContext(AppContext)

useEffect(() => {
  // Replace with your endpoint; consider adding `id` in _fields for React keys
  axios
    .get('https://cms.smvhospital.com/wp-json/wp/v2/agrinewsevents?_fields=acf')
    .then((response) => {
      setEvents(response.data);
    })
    .catch(() => {
         
    })
    .finally(() => {
      setLoader(false);
    });
}, []);


  return (
    <>
    <Preloader />
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