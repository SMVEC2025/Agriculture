import { useContext, useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [navItemsCheck, setNavItemsCheck] = useState(" ");
  const [ShowNavSlider, setShowNavSlider] = useState(false)
  const { showNav, setShowNav,setFormOpen,isMobile } = useContext(AppContext);
  const navigate = useNavigate()
  const handleMouseIn = (value: string): void => {
    setShowNav(true)
    setNavItemsCheck(value);
    setTimeout(() => {
      setShowNavSlider(true)
    }, 50);
  };
  const handleMouseLeave = () => {
    setNavItemsCheck(" ")
    setShowNavSlider(false)

  }
  useEffect(() => {
    const handleScroll = () => {
      if(navItemsCheck == ' '){
        if (window.scrollY > 150) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      }
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItemsCheck]);

  return (
    <>
      <div  className={`nav_main ${showNav ? "show" : ""}`}>
        <div className="nav-logo-container">
          <img src={`/assets/img/${showNav ? 'agriculturelogodark' : 'agriculturelogowhite'}.png`} alt="" />
        </div>
        <div className="nav-menu-container">
          {isMobile?(<></>):
          (<>
           <ul>
            <li onMouseEnter={handleMouseLeave} onClick={() => navigate('/')}>Home</li>
            <li onMouseEnter={() => handleMouseIn('about')} >About</li>
            <li onMouseEnter={() => handleMouseIn('academy')} >Academics</li>
            <li onMouseEnter={() => handleMouseIn('campus')} >Campus Life</li>
            <li onMouseEnter={() => handleMouseIn('admission')} >Admissions</li>
          </ul>
          <button className="hero-button" onClick={()=>setFormOpen(true)}>Apply</button>
          </>)}
        </div>
      </div>
      {navItemsCheck == 'about' && (
        <div onMouseLeave={handleMouseLeave} className={`navslider_main ${ShowNavSlider ? "opened" : ""}`}>
          <div onClick={handleMouseLeave} className="close-btn"><IoMdClose /></div>
          <img src="/assets/img/images/mainentrance.jpg" alt="" />
          <div className="navslider_con2">
            <p>Sri Manakula Vinayagar Engineering College (SMVEC) was established in 1999 by the Sri Manakula Vinayagar Educational Trust with a focus on providing quality education. The college is affiliated with Pondicherry University and offers undergraduate, postgraduate, and research programs. In 2019, SMVEC was granted autonomous status, enhancing its academic reputation.</p>
            <div className="viewbtn" onClick={() => navigate('/about-us')}>View About <BsArrowRight /></div>
          </div>
          <div className="navslider_items">
            <ul>
              <li onClick={() => navigate('/about-us')}>About</li>
              <li onClick={() => navigate('/history')}>SMVEC History</li>
              <li  onClick={() => navigate('/gallery')}  >Gallery</li>
              <li onClick={() => navigate('/contact')}>Contact</li>
            </ul>
          </div>
        </div>
      )}
      {navItemsCheck == 'academy' && (
        <div onMouseLeave={handleMouseLeave} className={`navslider_main ${ShowNavSlider ? "opened" : ""}`}>
          <div onClick={handleMouseLeave} className="close-btn"><IoMdClose /></div>
          <img src="/assets/img/images/frontview.jpg" alt="" />
          <div className="navslider_con2">
            <p>The School of Agricultural Sciences (SAGS) at Sri Manakula Vinayagar Engineering College (SMVEC) offers specialized programs in B.Sc. (Hons.) Agriculture and B.Sc. (Hons.) Horticulture. The college provides a modern learning environment with practical training on 40 acres of agricultural land.</p>
            <div className="viewbtn"  onClick={() => navigate('/faculty-list')}>View Faculty <BsArrowRight /></div>
          </div>
          <div className="navslider_items">
            <ul>
              <li onClick={() => navigate('/faculty-list')}>Faculty</li>
              <li onClick={() => navigate('/courses-detail-agriculture')}>B.Sc. (Hons.) Agriculture</li>
              {/* <li onClick={() => navigate('/courses-detail-horticulture')}>B.Sc. (Hons.) Horticulture
              </li> */}
            </ul>

          </div>

        </div>
      )}
      {navItemsCheck == 'campus' && (
        <div onMouseLeave={handleMouseLeave} className={`navslider_main ${ShowNavSlider ? "opened" : ""}`}>
          <div onClick={handleMouseLeave} className="close-btn"><IoMdClose /></div>

          <img src="/assets/img/images/agribuilding.jpg" alt="" />
          <div className="navslider_con2">
            <p>Campus life at Sri Manakula Vinayagar Engineering College (SMVEC) is vibrant and enriching, offering a blend of academic rigor and extracurricular engagement. Students have access to modern infrastructure, including well-equipped classrooms, laboratories, and libraries, fostering an environment conducive to learning and innovation. </p>
            <div className="viewbtn"  onClick={() => navigate('/campus-life')}>View campus life <BsArrowRight /></div>
          </div>
          <div className="navslider_items">
            <ul>
              <li onClick={() => navigate('/campus-life')}>campus Life</li>
              <li onClick={() => navigate('/event')}>News and events</li>
            </ul>

          </div>

        </div>
      )}
      {navItemsCheck == 'admission' && (
        <div onMouseLeave={handleMouseLeave} className={`navslider_main ${ShowNavSlider ? "opened" : ""}`}>
          <div onClick={handleMouseLeave} className="close-btn"><IoMdClose /></div>

          <img src="/assets/img/images/studentsthree.jpg" alt="" />
          <div className="navslider_con2">
            <p>Admission to the B.Sc. (Hons.) Agriculture at SMVEC requires candidates to have completed 10+2 with Physics, Chemistry, and Biology, with a minimum of 50% marks. Admission is based on merit, following the guidelines of the SMVEC Autonomous Regulations.</p>
            <div className="viewbtn"  onClick={() => navigate('/admission')}>Admission {new Date().getFullYear()} <BsArrowRight /></div>
          </div>
          <div className="navslider_items">
            <ul>
              <li onClick={() => navigate('/admission')}>Admission</li>
              <li onClick={() => navigate('/admission-agriculture')}>Apply for B.Sc. (Hons.) Agriculture</li>
              {/* <li onClick={() => navigate('/admission-horticulture')}>Apply for B.Sc. (Hons.) Horticulture
              </li> */}
            </ul>
          </div>

        </div>
      )}

    </>
  )
}

export default Navbar