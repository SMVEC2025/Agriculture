import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, FreeMode } from "swiper/modules";
import "ionicons/icons";
import "ionicons/dist/ionicons/ionicons.esm";

declare global {
  interface Window {
    particlesJS: any;
  }
}

const Slider: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination, Mousewheel, FreeMode],
      grabCursor: true,
      initialSlide: 4,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      speed: 1000,
      freeMode: false,
      mousewheel: {
        thresholdDelta: 30,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      on: {
        click(this: any) {
          swiper.slideTo(this.clickedIndex);
        },
      },
    });

    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 180,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            anim: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "right",
            random: true,
            out_mode: "none",
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  const characters = [
    { name: "Lucas", img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
    { name: "Mike",img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
    { name: "Mike",img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
    { name: "Mike",img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
    { name: "Mike",img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
    { name: "Mike",img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
    { name: "Mike",img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
    { name: "Mike",img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
    { name: "Mike",img: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
  ];

  return (
    <div>
      <div id="particles-js" className="particles" />

      <div className="container">
        <div className="swiper">
          <div className="swiper-wrapper">
            {characters.map((char, index) => (
              <div key={index} className="swiper-slide">
                <img src={char.img} alt={char.name} />
                <p>{char.name}</p>
              </div>
            ))}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>

      <a
        href="https://www.youtube.com/@ecemgokdogan/videos"
        target="_blank"
        rel="noopener noreferrer"
        className="logo"
      >
        <img
          src="https://assets.codepen.io/9868786/youtube.webp"
          alt="HTML tutorial"
        />
      </a>
    </div>
  );
};

export default Slider;
