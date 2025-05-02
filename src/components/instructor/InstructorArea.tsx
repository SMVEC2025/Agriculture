import { Link } from "react-router-dom";



const InstructorArea = () => {
    const facultyDetails = [
        {
            name: 'Dr. A. K. RAO KELUSKAR',
            image: '/assets/img/faculty/1.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Mr. S. SENTHIL KUMAR',
            image: '/assets/img/faculty/2.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Ms. K. SOWMIA',
            image: '/assets/img/faculty/3.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Mr. M. SELVA GANAPATHY',
            image: '/assets/img/faculty/4.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Mr. H. EASHWARDASS',
            image: '/assets/img/faculty/5.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Mrs. J. SAROJA',
            image: '/assets/img/faculty/6.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Mrs. R. HEMA',
            image: '/assets/img/faculty/7.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Dr. V. RAJENDRA PRASATH',
            image: '/assets/img/faculty/8.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Dr. V. DEVI SHANTHINI',
            image: '/assets/img/faculty/9.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Ms. I. INDUJA',
            image: '/assets/img/faculty/10.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Mr. V. MOHANE',
            image: '/assets/img/faculty/11.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Dr. R. THIRUMALAI',
            image: '/assets/img/faculty/111.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Dr. M. REVATHI',
            image: '/assets/img/faculty/12.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Mrs. J. VIMAL KEERTHANA',
            image: '/assets/img/faculty/13.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Dr. M. SUBASRI',
            image: '/assets/img/faculty/14.jpg',
            desig:"Assistant Professor",
        },  {
            name: 'Mrs. G. SANDHYA ',
            image: '/assets/img/faculty/15.jpg',
            desig:"Assistant Professor",
        },  {
            name: 'Mr. K. MUKILAN',
            image: '/assets/img/faculty/16.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Mr. R. INEYA BHARATHI ',
            image: '/assets/img/faculty/17.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Ms. R. GANDHIMATHI',
            image: '/assets/img/faculty/18.jpg',
            desig:"Assistant Professor",
        },
        {
            name: 'Mr. K. ELAVARASAN',
            image: '/assets/img/faculty/19.jpg',
            desig:"Assistant Professor",
        },

    ]
    return (
        <>
            <section className="team-section-5 fix section-padding pt-0">
                <div className="container">
                    <div className="section-title  text-center">
                        <h6 className="wow fadeInUp">
                            Our faculties
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Meet Our Expert faculties
                        </h2>
                    </div>
                    <div className="row">
                        {facultyDetails?.map((e, i) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="team-card-items style-2">
                                    <div className="thumb">
                                        <img src={e.image} alt="img" />
                                        {/* <div className="social-icon">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-behance"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div> */}
                                    </div>
                                    <div className="content">
                                        <h4>{e.name}</h4>
                                        <p>{e.desig}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default InstructorArea;