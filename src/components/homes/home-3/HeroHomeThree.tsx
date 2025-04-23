
import { Link } from 'react-router-dom';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const HeroHomeThree = () => {
    return (
        <>
            <section className="hero-section-3 hero-3">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    effect="fade"
                    speed={3000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    }}
                    pagination={{
                        el: ".dot",
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation, EffectFade, Autoplay]}
                    className="swiper hero-slider">
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{ background: `url(/assets/img/hero/hero-3.jpg)` }}>
                            <div className="overlay-bg bg-cover" style={{ background: `url(/assets/img/hero/ovelay-bg.png)` }}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">Welcome to SMVEC</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            Cultivate Your Future<br />
                                            with SMVEC Agri Sciences
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            At SMVEC, we sow the seeds of knowledge and innovation in agriculture—empowering students with cutting-edge practices, sustainable farming techniques, and hands-on experience to lead the future of agri-tech and rural development.
                                        </p>
                                        <div className="hero-button">
                                            <Link to="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Apply Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/hero/hero-4.jpg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">Welcome to SMVEC</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            Cultivate Your Future<br />
                                            with SMVEC Agri Sciences
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            At SMVEC, we sow the seeds of knowledge and innovation in agriculture—empowering students with cutting-edge practices, sustainable farming techniques, and hands-on experience to lead the future of agri-tech and rural development.
                                        </p>
                                        <div className="hero-button">
                                            <Link to="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Apply Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/hero/hero-5.jpg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">Welcome to SMVEC</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            Cultivate Your Future<br />
                                            with SMVEC Agri Sciences
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            At SMVEC, we sow the seeds of knowledge and innovation in agriculture—empowering students with cutting-edge practices, sustainable farming techniques, and hands-on experience to lead the future of agri-tech and rural development.
                                        </p>
                                        <div className="hero-button">
                                            <Link to="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Apply Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>                 
                    <div className="array-button">
                        <button className="array-prev"><i className="far fa-chevron-left"></i></button>
                        <button className="array-next"><i className="far fa-chevron-right"></i></button>
                    </div>
                </Swiper>
               
            </section>
        </>
    );
};

export default HeroHomeThree;