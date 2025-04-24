import Count from "../../common/Count";

const AboutArea = () => {
    return (
        <>
            <section className="about-section fix">
                <div className="about-wrapper-5">
                    <div className="container">
                        <div className="row g-4 justify-content-between">
                            <div className="col-lg-6">
                                <div className="section-title mb-0">
                                    <h6 className="wow fadeInUp">About SMVEC</h6>
                                    <h2 id="about-h2" className="wow fadeInUp" data-wow-delay=".3s">
                                        Empowering Learners for a Sustainable Future and Agricultural Innovation
                                    </h2>
                                    <img src="https://smvec.ac.in/wp-content/uploads/2024/06/Sri_Manakula_Vinayagar_Engineering_College.webp" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        Sri Manakula Vinayaga Educational Trust founded the Sri Manakula Vinayagar College of Agriculture and Horticulture to provide quality and affordable education in agricultural sciences. Affiliated with Pondicherry University, the college offers undergraduate, postgraduate, and research programs in Agriculture and Horticulture.

                                        The campus features modern infrastructure including Wi-Fi, a central library, advanced labs, greenhouses, experimental farms, and smart classrooms. Students benefit from hostel facilities, 24/7 security, and other amenities like an ATM and purified drinking water.

                                        Accredited by reputed agencies, the college ensures strong academic standards and career opportunities. Students have excelled in academics, secured placements in top organizations, and contributed to agricultural innovation.
                                    </p>
                                    <div className="counter-box-items">
                                        <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                            <h2><span className="odometer" data-count="23">
                                                <Count number={23} text='+' />
                                            </span></h2>
                                            <p>Years Of Experience</p>
                                        </div>
                                        <p className="text wow fadeInUp" data-wow-delay=".5s">
                                            Education not only empowers people pursue their career goals
                                            also encourages responsible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutArea;