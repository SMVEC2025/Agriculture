import { Link } from "react-router-dom";

 
const CoursesHomeThree = () => {
  return (
    <>
      <section className="popular-courses-section-33 fix section-padding">
            <div className="container">
                <div className="section-title color-red text-center">
                    <h6 className="wow fadeInUp">
                        Popular Offering
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                       our Academic Programs
                    </h2>
                    <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">  Hands-on training, expert mentorship, and real-world field experience to cultivate your success
                    </p>
                </div>
            
               <div className="couses-list">
               <div className="col-xl-4 col-lg-6 col-md-4">
                                <div className="popular-courses-items">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/courses-details" className="post-cat">
                                               4 years
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="https://media.istockphoto.com/id/1278397817/photo/young-indian-handsome-agronomist-with-test-tube-and-tablet.jpg?s=612x612&w=0&k=20&c=t7wH6msgXxNosvF5VHyTMUqhzN69SMBcTV5NEug43SU=" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/courses-details">
                                            B.Sc Agricultural Sciences
                                            </Link>
                                        </h4>
                                       
                                        <Link to="/courses-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="popular-courses-items bg-2">
                                    <div className="popular-thumb">
                                        <div className="post-box">
                                            <Link to="/courses-details" className="post-cat">
                                            4 years
                                            </Link>
                                        </div>
                                        <div className="thumb">
                                            <img src="https://media.istockphoto.com/id/617577124/photo/happy-young-female-botanist-collecting-sample-of-leafs.jpg?s=612x612&w=0&k=20&c=T7hJ28ZG9pV0u5zP2K4aVtHQrEF8YVfj_xEm4kExiTQ=" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link to="/courses-details">
                                            B.Sc Horticulture Sciences
                                            </Link>
                                        </h4>
                                       
                                        <Link to="/courses-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                
               </div>
            </div>
        </section>
    </>
  );
};

export default CoursesHomeThree;