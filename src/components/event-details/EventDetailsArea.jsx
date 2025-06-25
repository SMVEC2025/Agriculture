
import { lazy } from 'react';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';
const MyTimer = lazy(() => import('../../common/Timer'));
import { Helmet } from 'react-helmet';

const EventDetailsArea = ({ events }) => {

    return (
        <>
           <Helmet>
                <title>{events?.acf?.title}</title>
                <meta property="og:title" content={events?.acf?.title} />
                <meta property="og:description" content={events?.acf?.description} />
                <meta property="og:image" content={events?.acf?.image} />
                <meta property="og:url" content={`https://agri.smvec.ac.in/event-details/${events?.acf?.title}`} />
                <meta property="og:type" content="article" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={events?.acf?.title} />
                <meta name="twitter:description" content={events?.acf?.description} />
                <meta name="twitter:image" content={events?.acf?.image} />
            </Helmet>
            <section className="event-details-section section-padding pt-0">
                <div className="container">
                    <div className="event-details-wrapper">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="event-details-items">
                                    <div className="details-image">
                                        <img src={events?.acf?.image} alt="img" />
                                    </div>
                                    <div className="event-details-content ">
                                        <h3 style={{marginTop:"80px"}} className='mt-50'>{events?.acf?.title}</h3>
                                        <p className="mb-4">
                                            {events?.acf?.description}
                                        </p>

                                       <div>
                                         <h3>{events?.acf?.list1?.title}</h3>
                                         
                                        <p className="mb-4">
                                            {events?.acf?.list1?.description}
                                        </p>
                                        <div className="details-image">
                                            {events?.acf?.list1?.image?(<img src={events?.acf?.list1?.image} alt="img" />):null}
                                        </div>



                                         <h3>{events?.acf?.list2?.title}</h3>
                                        <p className="mb-4">
                                            {events?.acf?.list2?.description}
                                        </p>
                                        <div className="details-image">
                                            {events?.acf?.list2?.image?(<img src={events?.acf?.list2?.image} alt="img" />):null}
                                        </div>


                                         <h3>{events?.acf?.list3?.title}</h3>
                                        <p className="mb-4">
                                            {events?.acf?.list3?.description}
                                        </p>
                                        <div className="details-image">
                                            {events?.acf?.list3?.image?(<img src={events?.acf?.list3?.image} alt="img" />):null}
                                        </div>
                                       </div>
                                        {/* <ul className="details-list">
                                        <li><i className="fas fa-check-circle"></i>How to create a personalized study plan that works for you.</li>
                                        <li><i className="fas fa-check-circle"></i>Techniques to manage your time more effectively</li>
                                        <li><i className="fas fa-check-circle"></i>Strategies to improve focus and avoid distractions.</li>
                                        <li><i className="fas fa-check-circle"></i>Memory-boosting methods to retain information longer.</li>
                                        <li><i className="fas fa-check-circle"></i>Tips on reducing stress during exam preparation..</li>
                                    </ul> */}
                                        <h3>
                                            Event Location
                                        </h3>
                                        <p>
                                            This event is open to students to improve their study skills and academic performance.
                                        </p>
                                        <div className="map-area">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4366.429478669725!2d79.6345067!3d11.9146599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5358c4d27d10a9%3A0x5013c5b96143ae32!2sSri%20Manakula%20Vinayagar%20Engineering%20College!5e1!3m2!1sen!2sin!4v1746246532867!5m2!1sen!2sin" style={{ border: "0px" }} allowFullScreen={true} loading="lazy"></iframe>
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
                                            <span className="text">{events?.acf?.date}</span>
                                        </li>

                                        <li>
                                            <span>
                                                <i className="far fa-clock"></i>
                                                Time
                                            </span>
                                            <span className="text">{events?.acf?.time}</span>
                                        </li>

                                        <li>
                                            <span>
                                                <i className="far fa-map-marker-alt"></i>
                                                Location
                                            </span>
                                            <span className="text">{events?.acf?.location}</span>
                                        </li>

                                    </ul>
                                    <h4>Share This Event</h4>

                                    <div className='sharebtn_main'>
                                        
                                        <ShareButton events={events} />
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