import { useState } from "react";
import VideoPopup from "../../modals/VideoPopup";
import { Link } from "react-router-dom";

 
const CoursesDetailsTwoArea = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>

        {/* video modal start */}
        <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}
         <section className="courses-details-section section-padding pt-0">
            <div className="container">
                <div className="courses-details-wrapper">
                    <div className="courses-image">
                        <img src="assets/img/courses/details-2.jpg" alt="img" />
                        <a 
                        onClick={() => setIsVideoOpen(true)}
                                    style={{ cursor: "pointer" }} className="video-btn ripple video-popup">
                            <i className="fas fa-play"></i>
                        </a>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="courses-details-items sticky-style">
                                <div className="breadcrumb-content">
                                    <h1>Bsc. Agriculture</h1>
                                   
                                </div>
                                <div className="courses-details-content mt-0">
                                   
                                    <div className="tab-content">
                                        <div id="Course" className="tab-pane fade show active">
                                            <div className="description-content">
                                                <h3>Description</h3>
                                                <p className="mb-3">
                                                    UX/UI design focuses on creating user-friendly and visually appealing digital experiences, ensuring
                                                    that products such as websites and apps are both intuitive and enjoyable UX (User Experience) Design involves understanding the needs, behaviors, and pain points of users to create a seamless, effective experience process includes conducting user research, mapping user journeys.
                                                </p>
                                                <p>
                                                    UI (User Interface) Design is the process of creating the visual elements of a product, including layout, color schemes, typography, and interactive features like buttons and icons.
                                                </p>
                                                <h3 className="mt-5">What you'll learn in this course?</h3>
                                                <p className="mb-4">
                                                    Together, UX and UI design ensure that digital products are not only functional and accessible but also engaging and visually coherent, enhancing both usability and overall user satisfaction.
                                                </p>
                                                <div className="row  mb-5">
                                                    <div className="col-lg-6">
                                                        <ul className="list-item">
                                                            <li>
                                                                <i className="fas fa-check-circle"></i>
                                                                Physics, Chemistry, Mathematics, Biology Physics
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-check-circle"></i>
                                                                Chemistry,Biology/Botany and Zoology Physics, Chemistry, Agriculture
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                    
                                                </div>
                                                <h3>How to Benefits in this Courses</h3>
                                                <p>
                                                    UI (User Interface) Design is the process of creating the visual elements of product, including layout
                                                    olor schemes, typography, and interactive features like buttons and icons design focuses aesthetics, consistency, and ensuring that the user can easily navigate and interact with the product.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="courses-sidebar-area">
                                <div className="courses-items">
                                    <div className="courses-image">
                                        <img src="assets/img/courses/22.jpg" alt="img" />
                                        <h3 className="courses-title">Bsc</h3>
                                        <h4 className="topic-title">Agriculture science</h4>
                                        <div className="arrow-items">
                                            <div className="GlidingArrow">
                                                <img src="assets/img/courses/a1.png" alt="img" />
                                            </div>
                                
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <h3>4 years</h3>
                                        <p>
                                            UX (User Experience) Design the involves understanding needs, behaviors.
                                        </p>
                                        <div className="courses-btn" >
                                            <Link to="/courses-details" className="theme-btn">Apply now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-category-items">
                                    <h5>Course Includes:</h5>
                                    <ul>
                                        <li>
                                            <span>
                                                <i className="far fa-chalkboard-teacher"></i>
                                                Instructor
                                            </span>
                                            <span className="text">Mario S. Davis</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-user"></i>
                                                Lesson
                                            </span>
                                            <span className="text">15</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-clock"></i>
                                                Duration
                                            </span>
                                            <span className="text">40h</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-user"></i>
                                                Students
                                            </span>
                                            <span className="text">50+</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-globe"></i>
                                                Language
                                            </span>
                                            <span className="text">English</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-calendar-alt"></i>
                                                Deadline
                                            </span>
                                            <span className="text">15 December 2024</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-signal-alt"></i>
                                                Skill Level
                                            </span>
                                            <span className="text">All Level</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fal fa-medal"></i>
                                                Certifications
                                            </span>
                                            <span className="text">Yes</span>
                                        </li>
                                    </ul>
                                    <Link to="/courses-details" className="share-btn"><i className="fas fa-share"></i> Share this courses</Link>
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

export default CoursesDetailsTwoArea;