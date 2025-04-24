import { useContext, useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [navItemsCheck, setNavItemsCheck] = useState('');
  const [ShowNavSlider,setShowNavSlider] = useState(false)
  const {showNav,setShowNav} = useContext(AppContext);
  const navigate = useNavigate()
  
  const handleMouseIn = (value: string): void => {
    setNavItemsCheck(value);
    setShowNav(true)
    setTimeout(() => {
     setShowNavSlider(true) 
    }, 50);
  };
  const handleMouseLeave =()=>{
    setNavItemsCheck('')
    setShowNavSlider(false) 

  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <div className={`nav_main ${showNav?"show":""}`}>
      <div className="nav-logo-container">
        <img src={`/assets/img/${showNav?'agrilogodark':'agrilogo'}.png`} alt="" />
      </div>
      <div className="nav-menu-container">
        <ul>
        <li  onMouseEnter={handleMouseLeave} onClick={()=>navigate('/')}>Home</li>
          <li  onMouseEnter={() => handleMouseIn('about')} >About</li>
          <li onMouseEnter={() => handleMouseIn('academy')} >Academics</li>
          <li  onMouseEnter={handleMouseLeave} onClick={()=>navigate('/admission')}>Admissions</li>
          <li onMouseEnter={handleMouseLeave} >Campus Life</li>
        </ul>
        <button className="hero-button">Apply</button>
      </div>
    </div>
    {navItemsCheck == 'about' &&(
      <div onMouseLeave={handleMouseLeave} className={`navslider_main ${ShowNavSlider?"opened":""}`}>
      <img src="https://zaytuna.edu/files/_cache/0623e3837ce53efe3be8c481cd561a65.jpg" alt="" />
      <div className="navslider_con2">
        <p>In 2009, Zaytuna College was founded in Berkeley, California, with a mission that called for grounding students in the Islamic scholarly tradition as well as in the cultural currents and critical ideas shaping modern society.</p>
        <div className="viewbtn">View About <BsArrowRight/></div>
      </div>
      <div className="navslider_items">
        <ul>
          <li onClick={()=>navigate('/about')}>About</li>
          <li onClick={()=>navigate('/history')}>SMVEC History</li>
          <li>Careers</li>
          <li onClick={()=>navigate('/contact')}>Contact</li>
        </ul>

      </div>

    </div>
    )}
     {navItemsCheck == 'academy' &&(
      <div onMouseLeave={handleMouseLeave} className={`navslider_main ${ShowNavSlider?"opened":""}`}>
      <img src="https://zaytuna.edu/files/_cache/0623e3837ce53efe3be8c481cd561a65.jpg" alt="" />
      <div className="navslider_con2">
        <p>In 2009, Zaytuna College was founded in Berkeley, California, with a mission that called for grounding students in the Islamic scholarly tradition as well as in the cultural currents and critical ideas shaping modern society.</p>
        <div className="viewbtn">View About <BsArrowRight/></div>
      </div>
      <div className="navslider_items">
        <ul>
          <li onClick={()=>navigate('/faculty')}>Faculty</li>
          <li onCanPlay={()=>navigate('/courses-detail')}>Bsc Agriculture</li>
          <li  onCanPlay={()=>navigate('/courses-detail')}>Bsc Ariclture</li>
        </ul>

      </div>

    </div>
    )}
    </>
  )
}

export default Navbar