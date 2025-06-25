import React from 'react'
import Preloader from '../../common/Preloader'
import BreacrumbEventDetails from '../../common/breadcrumb/BreacrumbEventDetails'
import BreadcrumbEvent from '../../common/breadcrumb/BreadcrumbEvent'
import FooterOne from '../../layouts/footers/FooterOne'
import ScrollTop from '../../common/ScrollTop'
import EventDetailsArea from '../event-details/EventDetailsArea'

function Index() {
    return (
        <>

            <Preloader />
            <BreacrumbEventDetails />
            <section className="event-details-section section-padding pt-0">
                <div className="container">
                    <div className="event-details-wrapper">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="event-details-items">
                                    <div className="details-image">
                                        <img alt="img" src='/assets/img/allindiatour/6.png' />
                                    </div>
                                    <div className="event-details-content">
                                        <h3 style={{ marginTop: "150px" }}>All India Trip</h3>
                                        <p className="mb-4">
                                            In an enriching initiative to blend experiential learning with cultural exploration, the School of Agriculture at Sri Manakula Vinayagar Engineering College (SMVEC) organized an All-India Study Tour for its students. This educational journey was designed not only to deepen the students' understanding of diverse agricultural practices across India but also to expose them to the cultural, environmental, and economic diversity of the nation. It was truly a journey that sowed seeds of knowledge, curiosity, and unity.
                                        </p>
                                        <div className="details-image">
                                            <img alt="img" src='/assets/img/allindiatour/3.png' />
                                        </div>
                                        <p>
                                            The highlight of this extraordinary journey was the visit to 17 leading agricultural institutions across India, exposing students to a broad spectrum of research, development, and field applications.
                                            This immersive educational tour served as a powerful bridge between academic learning and ground-level agricultural practices.

                                        </p>
                                        <p>
                                            The success of the All-India Agricultural Study Tour, organized by the School of Agriculture at Sri Manakula Vinayagar Engineering College (SMVEC), was driven not only by the itinerary and institutions visited but also by the dedicated faculty and staff who led the journey. Their contributions transformed what could have been a routine academic trip into a deeply impactful and inspiring educational experience for the students.

                                        </p>
                                        <div className="details-image">
                                            <img alt="img" src='/assets/img/allindiatour/2.png' />
                                        </div>
                                        <p>
                                            One of the most meaningful academic practices observed was how students diligently took notes during the faculty’s explanations at each institution. This simple yet powerful habit turned the tour into a series of live classroom sessions, with the open field as the blackboard and research centers as the lab.

                                        </p>

                                        <ul className="details-list">
                                            <li><i className="fas fa-check-circle"></i>uiding students on what to observe, record, and analyze.</li>
                                            <li><i className="fas fa-check-circle"></i>Asking students to share their notes during evening discussions and reflections.</li>
                                            <li><i className="fas fa-check-circle"></i>This approach cultivated a sense of responsibility and ownership of learning among students.</li>

                                        </ul>
                                        <div className="details-image">
                                            <img alt="img" src='/assets/img/allindiatour/1.png' />
                                        </div>
                                        <p>
                                            While the All-India Agricultural Study Tour was primarily an academic journey, it also offered moments of cultural discovery and joy. Among the most memorable highlights was the students’ visit to the Taj Mahal, one of the Seven Wonders of the World and a UNESCO World Heritage site.
                                            This stop was more than just sightseeing—it was a chance for students to experience the rich heritage, history, and architectural brilliance of India, providing a welcome blend of enjoyment, reflection, and national pride.

                                        </p>
                                    <h3 style={{ marginTop: "10px" }}>More Images</h3>
                                        <div className="details-image">
                                            <img alt="img" src='/assets/img/allindiatour/4.png' />
                                        </div>
                                        <div className="details-image">
                                            <img alt="img" src='/assets/img/allindiatour/5.png' />
                                        </div>
                                          <div className="details-image">
                                            <img alt="img" src='/assets/img/allindiatour/7.png' />
                                        </div>
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
                                            <span className="text">
                                                 09 Mar 2025 - 28 Mar 2025
                                            </span>
                                        </li>

                                        

                                        <li>
                                            <span>
                                                <i className="far fa-map-marker-alt"></i>
                                                Location
                                            </span>
                                            <span className="text">
                                                   India
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterOne />
            <ScrollTop />
        </>
    )
}

export default Index