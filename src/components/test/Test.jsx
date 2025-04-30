import React from 'react'
import { AdvancedBannerTop } from './AdvancedBannerTop'

function Test() {
    const slides = [
        {
          title: "Cultivate Yours Future with SMVEC Agri Science",
          text: "At SMVEC, we sow the sds of knowledge and innovation in agriculture—empowering students with cutting-edge practices, sustainable farming techniques, and hands-on experience to lead the future of agri-tech and rural development.",
          background: "/assets/img/hero/hero-1.jpg",
        },
        {
          title: "Cultivate Your Future with SMVEC Agri Science",
          text: "At SMVEC, we sow the sds of knowledge and innovation in agriculture—empowering students with cutting-edge practices, sustainable farming techniques, and hands-on experience to lead the future of agri-tech and rural development.",
          background: "/assets/img/hero/hero-2.jpg",
        },
        {
          title: "Cultivate Your Future with SMVEC Agri Science",
          text: "At SMVEC, we sow the sds of knowledge and innovation in agriculture—empowering students with cutting-edge practices, sustainable farming techniques, and hands-on experience to lead the future of agri-tech and rural development.",
          background: "/assets/img/hero/hero-3.jpg",
        },
      ];
  return (
    <div>
        <AdvancedBannerTop/>
        <div className='paralaxcon'>
        <div className="container">
              
              <div data-swiper-parallax="300" className="slide-title">
                <h5>Welcome to SMVEC</h5>
                <h2>{slides[0].title}</h2>
              </div>
              <div data-swiper-parallax="400" className="slide-text">
                <p>{slides[0].text}</p>
              </div>
              <div className="clearfix"></div>
              <div data-swiper-parallax="500" className="slide-btns">
                <a  className="theme-btn-s2" >Apply now</a>
                <a   className="theme-btn-s3">
                  <i className="fas fa-chevron-circle-right"></i> About us
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Test