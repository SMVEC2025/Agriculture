import React, { useRef, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { AppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { AdvancedBannerTop } from "../../test/AdvancedBannerTop";

const slides = [
  {
    title: "Cultivate Your Future with SMVEC Agri Science",
    text: "At SMVEC, we sow the seeds of knowledge and innovation in agriculture—empowering students with cutting-edge practices, sustainable farming techniques, and hands-on experience to lead the future of agri-tech and rural development.",
    background: "/assets/img/campushome.webp",
    backgroundlayer: "/assets/img/campuslayer.png",

  },
  {
    title: "Cultivate Yours Future with SMVEC Agri Science",
    text: "At SMVEC, we sow the seeds of knowledge and innovation in agriculture—empowering students with cutting-edge practices, sustainable farming techniques, and hands-on experience to lead the future of agri-tech and rural development.",
    background: "/assets/img/gardenhome.webp",
    backgroundlayer: "/assets/img/gardenlayer.png",
  },
  {
    title: "Cultivate Your Future with SMVEC Agri Science",
    text: "At SMVEC, we sow the seeds of knowledge and innovation in agriculture—empowering students with cutting-edge practices, sustainable farming techniques, and hands-on experience to lead the future of agri-tech and rural development.",
    background: "/assets/img/entrancehome.webp",
    backgroundlayer: "/assets/img/entrancelayer.png",

  }

];

const HeroSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const { setFormOpen } = useContext(AppContext)
  const navigate = useNavigate()
  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      swiperInstance.on("progress", () => {
        swiperInstance.slides.forEach((slide: any) => {
          const slideProgress = slide.progress;
          const innerOffset = swiperInstance.width * 0.5;
          const innerTranslate = slideProgress * innerOffset;
          const inner = slide.querySelector(".slide-inner");
          if (inner) {
            inner.style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
          }
        });
      });

      swiperInstance.on("touchStart", () => {
        swiperInstance.slides.forEach((slide: any) => {
          slide.style.transition = "";
        });
      });

      swiperInstance.on("setTransition", (speed: number) => {
        swiperInstance.slides.forEach((slide: any) => {
          slide.style.transition = `${speed}ms`;
          const inner = slide.querySelector(".slide-inner");
          if (inner) {
            inner.style.transition = `${speed}ms`;
          }
        });
      });
    }
  }, []);

  return (
    <div className="newhero_main">

      <section className="hero-slider hero-style">
        <Swiper
          ref={swiperRef}
          loop={true}
          speed={1000}
          parallax={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}

          navigation={false}
          modules={[Navigation, Autoplay, Parallax]}
          className="swiper-container"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="advancedlayer">
                <AdvancedBannerTop
                  backgroundimg={slide.background}
                  backgroundlayerimg={slide.backgroundlayer}
                />
              </div>
              <div
                className="slide-inner slide-bg-image"

              >

                <div className="layerhome">

                </div>

                <div className="container">

                  <div data-swiper-parallax="300" className="slide-title">
                    <h5>Welcome to SMVEC</h5>
                    <h2>{slide.title}</h2>
                  </div>
                  <div data-swiper-parallax="400" className="slide-text">
                    <p>{slide.text}</p>
                  </div>
                  <div className="clearfix"></div>
                  <div data-swiper-parallax="500" className="slide-btns">
                    <a className="theme-btn-s2" onClick={() => setFormOpen(true)}>Apply now</a>
                    <a onClick={() => navigate('/about')} className="theme-btn-s3">
                      <i className="fas fa-chevron-circle-right"></i> About us
                    </a>
                  </div>
                </div>
              </div>

            </SwiperSlide>

          ))}
        </Swiper>

        {/* Swiper controls are auto-added */}
      </section>
    </div>
  );
};

export default HeroSlider;
