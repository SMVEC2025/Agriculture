import Program from "./admission/Program";


const CoursesHomeThree = () => {
  return (
    <>
      <section className="popular-courses-section-33 fix section-padding">
        <div className="container">
          <div className="section-title color-red text-center">
            <h6 className="wow fadeInUp">
              courses offering
            </h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              our Academic Program
            </h2>
            <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">  Our programs combine academic excellence with hands-on learning, preparing students for impactful careers in agriculture and allied sciences.
            </p>
          </div>

          <div className="couses-list">
            <Program />

          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesHomeThree;