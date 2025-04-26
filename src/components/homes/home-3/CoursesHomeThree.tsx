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
                       our Academic Programs
                    </h2>
                    <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">  Hands-on training, expert mentorship, and real-world field experience to cultivate your success
                    </p>
                </div>
            
               <div className="couses-list">
                <Program/>
                
               </div>
            </div>
        </section>
    </>
  );
};

export default CoursesHomeThree;