 

const FaqHomeThree = () => {
  return (
    <>
      <section className="faq-section fix section-padding pt-10 " style={{position:"relative"}}>
            <div className="container">
                <div className="faq-wrapper style-2">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="section-title color-red">
                                    <h6 className="wow fadeInUp">
                                        Asked Questions
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Frequently Asked
                                        Questions   
                                    </h2>
                                </div>
                                <div className="faq-items mt-4 mt-md-0 mb-0">
                                <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header lh-base" id="headingOne">
                                                    <button className="accordion-button lh-base" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        What courses are offered at SMVEC College of Agriculture and Horticulture
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show"
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            SMVEC offers undergraduate programs such as B.Sc. Agriculture and B.Sc. Horticulture, focusing on modern agricultural practices, plant science, soil management, and sustainable farming techniques.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                            <h2 className="accordion-header lh-base" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        What career opportunities are available after completing a B.Sc. in Agriculture or Horticulture?                                                </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            Graduates can work as agricultural officers, farm managers, horticulturists, crop consultants, or start their own agri-business. Opportunities also exist in government departments, research institutions, and agri-tech industries.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                            <h2 className="accordion-header lh-base" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapsethree" aria-expanded="false"
                                                        aria-controls="collapsethree">
                                                        Does the college provide practical training and field exposure?                                                </button>
                                                </h2>
                                                <div id="collapsethree" className="accordion-collapse collapse"
                                                    aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            Yes, the college emphasizes hands-on learning through field visits, lab sessions, farm training, and internships, ensuring students gain real-world agricultural and horticultural experience.                                                    </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mb-0">
                                            <h2 className="accordion-header lh-base" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapsefour" aria-expanded="false"
                                                        aria-controls="collapsefour">
                                                        What facilities are available on campus for students?                                                </button>
                                                </h2>
                                                <div id="collapsefour" className="accordion-collapse collapse"
                                                    aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            SMVEC provides modern laboratories, research farms, well-stocked libraries, hostel accommodation, and Wi-Fi-enabled smart classrooms, creating a student-friendly and research-driven environment.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"> 
                           <div className="faq-image-2">
                                <img src="assets/img/faqback.png" alt="img" className="wow img-custom-anim-left" />
                                <div className="bg-shape">
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

export default FaqHomeThree;