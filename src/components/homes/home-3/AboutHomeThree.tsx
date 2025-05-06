import { Link } from "react-router-dom";
import Count from "../../../common/Count";

const AboutHomeThree = () => {
    return (
        <>
            <div className="about-section-3 section-padding">
                <div className="container">
                    <div className="about-wrapper-2">
                        <div className="row g-4 justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="about-content">
                                    <div className="section-title">
                                        <h6 className="text-white wow fadeInUp">
                                            About SMVEC
                                        </h6>
                                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                            Nurturing Minds, Cultivating the Future
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        SMVEC's College of Agriculture is committed to transforming rural India through education, research, and innovation in modern and sustainable farming. We equip future agri-leaders with practical knowledge, scientific expertise, and a passion for growth.
                                    </p>
                                    <Link to="/about" className="theme-btn red-btn wow fadeInUp" data-wow-delay=".3s">More About Us</Link>
                                    <div className="about-counter-items">
                                        <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                            <h3><span className="odometer" data-count="25">
                                                <Count number={25} text='+' />
                                            </span></h3>
                                            <p>Years of Agricultural Excellence</p>
                                        </div>
                                        <div className="counter-content wow fadeInUp" data-wow-delay=".5s">
                                            <h3><span className="odometer" data-count="99">
                                                <Count number={99} text='%' />
                                            </span></h3>
                                            <p>Student Satisfaction Rate</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-image">
                                <img className="homeabt-img" src="assets/img/smvecstudents.webp" alt="img" />

                                    <div className="counter-box">
                                        <p>More then</p>
                                        <h2><span className="odometer" data-count="2800">
                                            <Count number={2800} text='+' />
                                        </span></h2>
                                        <p>placements</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutHomeThree;