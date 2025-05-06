 
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Count from '../../../common/Count';

 


const TestimonialHomeThree = () => {
    const studentsTestimonial =[
        {
          "name": "Sowmya R.",
          "class": "B.Sc. Agriculture",
          "message": "Studying at SMVEC has been a life-changing experience. The faculty here not only teach but truly inspire us to explore modern agricultural practices with real-world exposure."
        },
        {
          "name": "Aravind S.",
          "class": "B.Sc. Horticulture",
          "message": "The infrastructure and hands-on training in the horticulture department are outstanding. SMVEC is giving me the perfect foundation for a career in sustainable farming."
        },
        {
          "name": "Meenakshi D.",
          "class": "B.Sc. Horticulture",
          "message": "What I love most about SMVEC is the supportive environment and the opportunity to be part of various eco-friendly initiatives that align with our studies."
        },
        {
          "name": "Vignesh K.",
          "class": "B.Sc. Agriculture",
          "message": "The 25-year legacy of SMVEC speaks for itself. The exposure we get through seminars, research work, and industrial visits is unmatched."
        },
        {
          "name": "Revathi M.",
          "class": "B.Sc. Agriculture",
          "message": "Joining SMVEC was one of the best decisions I’ve made. The agriculture program is designed to blend tradition with technology, which is exactly what the industry needs today."
        },
        {
          "name": "Dinesh R.",
          "class": "B.Sc. Horticulture",
          "message": "SMVEC’s commitment to excellence is visible in every aspect—from labs to learning materials. It’s truly preparing us to make a difference in the green world."
        },
        {
          "name": "Keerthana A.",
          "class": "B.Sc. Horticulture",
          "message": "Being here has given me a deeper understanding of plant science and practical horticulture. I feel confident stepping into the professional world thanks to SMVEC."
        },
        {
          "name": "Manoj V.",
          "class": "B.Sc. Agriculture",
          "message": "SMVEC nurtures our ambitions. The agricultural program here is not just about theory but about learning how to solve real agricultural challenges."
        }
      ]
      
  return (
    <>
      <section className="testimonial-section-3 fix pt-0 section-padding" >
      <img src="/assets/img/4G3A8463.JPG" alt="" />
            <div className="counter-section-2 section-padding pt-0">
                <div className="container custom-container">
                    <div className="counter-wrapper-2 bg-cover" style={{background: `url(/assets/img/counter-bg.jpg)`}}>
                        <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
                            <div className="icon">
                                <i className="flaticon-success"></i>
                            </div>
                            <div className="content">
                                <h2><span className="odometer" data-count="48.5"> <Count number={48} text='.5k'  /> </span></h2>
                                <p>Students</p>
                            </div>
                        </div>
                        <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
                            <div className="icon">
                                <i className="flaticon-medal"></i>
                            </div>
                            <div className="content">
                                <h2><span className="odometer" data-count="100"> <Count number={100} text='+'  /> </span></h2>
                                <p>Awards Winning</p>
                            </div>
                        </div>
                        <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
                            <div className="icon">
                                <i className="flaticon-satisfaction"></i>
                            </div>
                            <div className="content">
                                <h2><span className="odometer" data-count="99"> <Count number={99} text='%'  /> </span></h2>
                                <p>Placement Rate</p>
                            </div>
                        </div>
                        <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
                            <div className="icon">
                                <i className="flaticon-instructor"></i>
                            </div>
                            <div className="content">
                                <h2><span className="odometer" data-count="250"> <Count number={250} text='+'  /> </span></h2>
                                <p>Staffs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="text-white wow fadeInUp">
                    Voices of Growth
                    </h6>
                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                        258+ Students Say About <br />
                        Our University
                    </h2>
                </div>
                <Swiper
                    spaceBetween={30}
                    speed={2000}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,  
                    }}
                    pagination={{
                        el: ".dot",
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                      1199: {
                          slidesPerView: 3,
                      },
                      991: {
                          slidesPerView: 2,
                      },
                      767: {
                          slidesPerView: 1,
                      },
                      575: {
                          slidesPerView: 1,
                      },
                      0: {
                          slidesPerView: 1,
                      },
                  }}
                 className="swiper testimonial-slider-3">
                  {studentsTestimonial.map((e,i)=>(
                    
                    <SwiperSlide className="swiper-slide" key={i}>
                    <div className="testimonial-card-items">
                        <div className="client-info">
                            <h3>{e.name}</h3>
                            <p>{e.class}</p>
                        </div>
                        {/* <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-1.png)`}}></div> */}
                        <p>
                            {e.message}
                        </p>
                        <div className="icon">
                            <i className="flaticon-double-quotes"></i>
                        </div>
                    </div>
                </SwiperSlide>
                  ))}
                        
                   
                    <div className="swiper-dot white-color text-center mt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default TestimonialHomeThree;