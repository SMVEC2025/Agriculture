import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Cards from "./Cards";
import FeesDetails from "./FeesDetails";


const CoursesDetailsTwoArea = () => {

    const { setFormOpen } = useContext(AppContext);

    return (
        <>

            <section className="courses-details-section section-padding mt-5">
                <div className="container">
                    <div className="courses-details-wrapper">
                        <div className="courses-image">

                        </div>
                        <div className="row g-4">
                            <div className="col-lg-8">
                                <div className="courses-details-items sticky-style">
                                    <div className="breadcrumb-content">
                                        <h1>B.Sc. (Hons.) Agriculture</h1>

                                    </div>
                                    <div className="courses-details-content mt-0">

                                        <div className="tab-content">
                                            <div id="Course" className="tab-pane fade show active">
                                                <div className="description-content">
                                                    <h3>Description</h3>
                                                    <p className="mb-3">
                                                        B.Sc. degree in Agriculture is an undergraduate program that focuses on the scientific principles and modern practices involved in farming, crop production, soil management, and agricultural sustainability. The course covers a wide range of topics, including agronomy, soil science, plant pathology, entomology, agricultural economics, horticulture, genetics, and irrigation techniques. Students gain in-depth knowledge of crop cultivation methods, pest and disease control, seed technology, organic farming, and the use of biotechnology in agriculture.

                                                        The program also emphasizes sustainable farming practices, efficient water and nutrient management, and the integration of modern technologies like precision agriculture. Through practical training, students develop the skills required for managing farms, agricultural enterprises, and research projects.

                                                        Upon completion, graduates can pursue careers in the agricultural sector as agricultural officers, farm managers, agronomists, soil scientists, seed technologists, or extension officers. They can also work with agro-based industries, research institutions, or start their own farming ventures and agri-business enterprises.


                                                    </p>

                                                    <h3 className="mt-5">subjects covered</h3>

                                                    <div className="row  mb-5">
                                                        <div className="col-lg-6">
                                                            <ul className="list-item">
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Soil Science
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Agronomy
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Plant Pathology
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Agricultural Economics
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Genetics & Plant Breeding
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Entomology
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Horticulture
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Agricultural Engineering                                                                </li>


                                                            </ul>
                                                        </div>

                                                        <h3 className="mt-5">Fees Detail</h3>
                                                        <div>
                                                            <FeesDetails />
                                                        </div>
                                                        <h3 className="mt-5">career opportunities</h3>
                                                        <div>
                                                            <Cards />
                                                        </div>

                                                    </div>




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
                                            <img src="//assets/img/agriculturecourse.webp" className="opacity-0.8" alt="img" />
                                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark z--1 opacity-25"></div>
                                            <h3 className="courses-title">Bsc</h3>
                                            <h4 className="topic-title">Agriculture science</h4>
                                            <div className="arrow-items">


                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <h3>4 years</h3>
                                            <p>
                                                B.Sc. degree in Agriculture is an undergraduate program that focuses on the scientific principles and modern practices involved in farming...                                        </p>
                                            <div className="courses-btn" >
                                                <button onClick={() => setFormOpen(true)} className="theme-btn">Apply now</button>
                                            </div>
                                        </div>
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