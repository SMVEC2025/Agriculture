 
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const InstagramHomeThree = () => {
  return (
    <>
      <div className="instagram-section fix">
            <Swiper
             spaceBetween={0}
             speed={1500}
             loop={true}
             breakpoints={{
              1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                }               
             }}
             className="swiper instagram-slider">
                 
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="https://images.pexels.com/photos/9489759/pexels-photo-9489759.jpeg" alt="img" />
                            <Link to="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="https://images.pexels.com/photos/2247678/pexels-photo-2247678.jpeg" alt="img" />
                            <Link to="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="https://images.pexels.com/photos/427649/pexels-photo-427649.jpeg" alt="img" />
                            <Link to="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="https://images.pexels.com/photos/426976/pexels-photo-426976.jpeg" alt="img" />
                            <Link to="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="https://images.pexels.com/photos/2479946/pexels-photo-2479946.jpeg" alt="img" />
                            <Link to="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                 
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="assets/img/instagram/01.jpg" alt="img" />
                            <Link to="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="assets/img/instagram/02.jpg" alt="img" />
                            <Link to="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="assets/img/instagram/03.jpg" alt="img" />
                            <Link to="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="assets/img/instagram/04.jpg" alt="img" />
                            <Link to="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="assets/img/instagram/05.jpg" alt="img" />
                            <Link to="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
            
            </Swiper>
        </div>
    </>
  );
};

export default InstagramHomeThree;