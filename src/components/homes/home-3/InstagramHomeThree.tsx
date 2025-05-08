
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';



const InstagramHomeThree = () => {
    const galleryItems = [
        { image: '/assets/img/gallery/gallery1.jpg', name: "on field training", category: "students" },
        { image: '/assets/img/gallery/gallery2.jpg', name: "eagle shot", category: "university" },
        { image: '/assets/img/gallery/gallery3.jpg', name: "25th year of success", category: "arts and culture" },
        { image: '/assets/img/gallery/gallery4.jpg', name: "campus life", category: "students" },
        { image: '/assets/img/gallery/gallery5.jpg', name: "pongal festival", category: "arts and culture" },
        { image: '/assets/img/gallery/gallery6.jpg', name: "Smvec Anthem Song", category: "arts and culture" },
        { image: '/assets/img/gallery/gallery7.jpg', name: "celestia 2025", category: "arts and culture" },
        { image: '/assets/img/gallery/gallery8.jpg', name: "celestia 2025", category: "arts and culture" },

    ];
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
                    {galleryItems.map((e, i) => (

                        <SwiperSlide  key={i} className="swiper-slide">
                            <div className="instagram-image">
                                <img src={e.image} alt="img" />
                                <Link to="/gallery" className="icon"><i className="far fa-arrow-right"></i></Link>
                            </div>

                        </SwiperSlide>
                    ))}





                </Swiper>
            </div>
        </>
    );
};

export default InstagramHomeThree;