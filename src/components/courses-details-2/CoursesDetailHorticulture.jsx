import { useContext } from "react";
import { AppContext } from "../../context/AppContext";


const CoursesDetailHorticulture = () => {

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
                                        <h1>B.Sc. (Hons.) Horticulture</h1>

                                    </div>
                                    <div className="courses-details-content mt-0">

                                        <div className="tab-content">
                                            <div id="Course" className="tab-pane fade show active">
                                                <div className="description-content">
                                                    <h3>Description</h3>
                                                    <p className="mb-3">
                                                        B.Sc. degree in Horticulture is an undergraduate program focused on the science and art of growing fruits, vegetables, flowers, ornamental plants, and landscaping. It provides students with theoretical and practical knowledge of plant propagation, breeding, pest and disease management, greenhouse management, and post-harvest technology.

                                                        The curriculum covers a wide range of subjects such as pomology, olericulture, floriculture, plantation crops, medicinal plants, and landscape horticulture. Students also learn about protected cultivation, irrigation techniques, soil management, and organic farming practices to ensure sustainable horticultural production.

                                                        After completing the course, graduates can pursue careers as horticulturists, landscape designers, nursery managers, research assistants, or entrepreneurs in the floriculture and fruit/vegetable production industries. They can work with government departments, agri-business firms, or set up their own horticulture-based ventures.
                                                    </p>
                                                    <p>
                                                        UI (User Interface) Design is the process of creating the visual elements of a product, including layout, color schemes, typography, and interactive features like buttons and icons.
                                                    </p>
                                                    <h3 className="mt-5">subjects covered</h3>

                                                    <div className="row  mb-5">
                                                        <div className="col-lg-6">
                                                            <ul className="list-item">
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Pomology
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Olericulture
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Floriculture
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Plantation Crops
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Landscape Gardening
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Post-Harvest Technology
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Medicinal and Aromatic Plants
                                                                </li>
                                                                <li>
                                                                    <i className="fas fa-check-circle"></i>
                                                                    Protected Cultivation
                                                                </li>
                                                            </ul>
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
                                            <img src="assets/img/horticulturecourse.webp" className="opacity-0.8" alt="img" />
                                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark z--1 opacity-25"></div>
                                            <h3 className="courses-title">Bsc</h3>
                                            <h4 className="topic-title">Horticulture science</h4>
                                            <div className="arrow-items">


                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <h3>4 years</h3>
                                            <p>
                                                B.Sc. degree in Horticulture is an undergraduate program focused on the science and art of growing fruits, vegetables, flowers, ornamental plants, and landscaping...
                                            </p>
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

export default CoursesDetailHorticulture;
