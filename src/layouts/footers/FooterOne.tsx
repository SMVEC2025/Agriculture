import { Link } from "react-router-dom";



const FooterOne = ({ style_2 }: any) => {
    return (
        <>
            <footer className={`footer-section fix ${style_2 ? "" : "footer-bg"}`}>
                <div className="container">
                    <div className={`footer-widget-wrapper ${style_2 ? "style-4" : ""}`}>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link to="/">
                                            {style_2 ? <img src="assets/img/logo/black-logo-2.svg" alt="img" />
                                                :
                                                <img className="footer_logo" src="assets/img/agrilogo.png" alt="img" />
                                            }
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Education the foundation personal and societal growth, empowering individuals with knowledge.
                                        </p>
                                        <div className="social-icon">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-dribbble"></i></a>
                                            <a href="#"><i className="fab fa-behance"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Courses</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li><Link to="/courses-detail-agriculture">B.Sc. (Hons.) Agriculture</Link></li>
                                        <li><Link to="/courses-detail-horticulture">B.Sc. (Hons.) Horticulture
                                        </Link></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Link</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li><Link to="/about">About SMVEC</Link></li>
                                        <li><Link to="/courses">Faculty</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/faq">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                Sri Manakula Vinayagar College of Agricultural Sciences
                                                Sri Manakula Vinayagar Engineering College Campus
                                                Madugarai Road,Madagadipet
                                                Mannadipet Commune
                                                Puducherry – 605 107
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`footer-name ${style_2 ? "style-2" : ""}`}>
                    <h2>
                        SMVEC
                    </h2>
                </div>
            </footer>
        </>
    );
};

export default FooterOne;