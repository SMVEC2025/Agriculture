 
import { lazy } from 'react';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';
const MyTimer = lazy(() => import('../../common/Timer'));

const EventDetailsArea = ({events}) => {
  return (
    <>
        <section className="event-details-section section-padding pt-0">
            <div className="container">
                <div className="event-details-wrapper">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="event-details-items">
                                <div className="details-image">
                                    <img src={events?.acf?.image} alt="img" />
                                </div>
                                <div className="event-details-content">
                                    <h3>{events?.acf?.title}</h3>
                                    <p className="mb-4">
                                        Are you looking for ways to improve your study habits and boost your academic performance? Join us for an engaging workshop where we’ll explore effective study techniques that will help you excel in your studies. This session will cover proven method note-taking, time management, memory enhancement, and exam preparation. Whether you're in high school or college, these skills.
                                    </p>
                                    <p className="mb-5">
                                        UI (User Interface) Design is the process of creating the visual elements of a product, including layout, color schemes, typography, and interactive features like buttons and icons.
                                    </p>
                                    <h3>
                                        What You Will Learn
                                    </h3>
                                    <p>
                                        Together, UX and UI design ensure that digital products are not only functional and accessible but also engaging and visually coherent, enhancing both usability and overall user satisfaction.
                                    </p>
                                    <ul className="details-list">
                                        <li><i className="fas fa-check-circle"></i>How to create a personalized study plan that works for you.</li>
                                        <li><i className="fas fa-check-circle"></i>Techniques to manage your time more effectively</li>
                                        <li><i className="fas fa-check-circle"></i>Strategies to improve focus and avoid distractions.</li>
                                        <li><i className="fas fa-check-circle"></i>Memory-boosting methods to retain information longer.</li>
                                        <li><i className="fas fa-check-circle"></i>Tips on reducing stress during exam preparation..</li>
                                    </ul>
                                    <h3>
                                        Event Location
                                    </h3>
                                    <p>
                                        This event is open to students of all levels looking to improve their study skills and academic performance.
                                    </p>
                                    <div className="map-area">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4366.429478669725!2d79.6345067!3d11.9146599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5358c4d27d10a9%3A0x5013c5b96143ae32!2sSri%20Manakula%20Vinayagar%20Engineering%20College!5e1!3m2!1sen!2sin!4v1746246532867!5m2!1sen!2sin" style={{border: "0px"}} allowFullScreen={true} loading="lazy"></iframe>
                                    </div>
                                    {/* <h3>
                                        Event Speaker
                                    </h3>
                                    <p>
                                        Join us for an exciting event designed to help students enhance their academic performance through proven study techniques and strategies. This interactive session will provide valuable insights into time management, note-taking, memory retention, and exam preparation.
                                    </p> */}
                                    {/* <div className="row g-0">
                                        <div className="col-md-4">
                                            <div className="event-image-items border-right-none">
                                                <div className="event-image">
                                                    <img src="/assets/img/event/details-2.png" alt="img" />
                                                </div>
                                                <div className="event-content">
                                                    <h4>
                                                        <Link to="/event-details">Shawn M. Sanchez</Link>
                                                    </h4>
                                                    <span>Leadership Speakers</span>
                                                    <div className="social-icon">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                                        <a href="#"><i className="fab fa-behance"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="event-image-items border-right-none">
                                                <div className="event-image">
                                                    <img src="/assets/img/event/details-3.png" alt="img" />
                                                </div>
                                                <div className="event-content">
                                                    <h4>
                                                        <Link to="/event-details">Michael C. Polak</Link>
                                                    </h4>
                                                    <span>English Speakers</span>
                                                    <div className="social-icon">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                                        <a href="#"><i className="fab fa-behance"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="event-image-items">
                                                <div className="event-image">
                                                    <img src="/assets/img/event/details-4.png" alt="img" />
                                                </div>
                                                <div className="event-content">
                                                    <h4>
                                                        <Link to="/event-details">Paul G. Bergeron</Link>
                                                    </h4>
                                                    <span>UX/UI Speakers</span>
                                                    <div className="social-icon">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                                        <a href="#"><i className="fab fa-behance"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="event-details-information sticky-style">
                                <h4>Event Information</h4>
                                <ul className="information-list">
                                    <li>
                                        <span>
                                            <i className="fas fa-calendar-alt"></i>
                                             Date
                                        </span>
                                        <span className="text">15 October 2024</span>
                                    </li>
                                 
                                    <li>
                                        <span>
                                            <i className="far fa-clock"></i>
                                             Time
                                        </span>
                                        <span className="text">08:00 am</span>
                                    </li>
                                   
                                    <li>
                                        <span>
                                            <i className="far fa-map-marker-alt"></i>
                                            Location
                                        </span>
                                        <span className="text">New York</span>
                                    </li>
                                   
                                </ul>
                        
                               <div className='sharebtn_main'>
                               <ShareButton/>
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

export default EventDetailsArea;