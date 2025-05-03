import { Link } from "react-router-dom";

 

const CtaHomeThree = () => {
  return (
    <>
       <section className="quality-coureses-section section-padding fix theme-red-bg">
            <div className="container-fluid">
                <div >
                    {/* <div className="col-xl-2 col-lg-6">
                        <div className="coureses-image float-bob-x">
                            <img src="assets/img/courses/girl.png" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s" />
                            <div className="bg-shape">
                                <img src="assets/img/courses/bg-shape.png" alt="img" />
                            </div>
                        </div>
                    </div> */}
                    <div >
                        <div className="quality-coureses-content text-center">
                            <div className="section-title">
                                <h6 className="text-white wow fadeInUp">
                                Admission Open
                                </h6>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                Build Your Future in Agriculture with SMVEC
                                </h2>
                            </div>
                            <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".3s">        Join SMVEC and be part of India’s agri-tech revolution. Learn from experienced faculty and gain hands-on field experience.
                            </p>
                            <Link to="/courses-details" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-lg-6">
                        <div className="coureses-image style-2 float-bob-y">
                            <img src="https://img.freepik.com/free-photo/man-blue-shirt-smiling-with-backpack_1187-2295.jpg?t=st=1745402549~exp=1745406149~hmac=3eef1279265c2b5e91e995e9aa1dab8201f229b0f4a66730dfdc89d24d20c8d2&h=382" alt="img" className="wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.4s" />
                            <div className="bg-shape">
                                <img src="assets/img/courses/bg-shape-2.png" alt="img" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  );
};

export default CtaHomeThree;