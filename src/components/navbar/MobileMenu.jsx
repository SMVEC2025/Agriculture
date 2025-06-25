import { GoHome } from "react-icons/go";
import { LuUniversity } from "react-icons/lu";
import { RiBookShelfLine } from "react-icons/ri";
import { RxBookmark } from "react-icons/rx";
import { CiSquareInfo } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { AppContext } from "../../context/AppContext";
import { BsTwitterX } from "react-icons/bs";

function MobileMenu() {
  const { showMobileSlider, showItem, setShowItem, setShowMobileSlider } = useContext(AppContext)
  const navigate = useNavigate()
  const handlesubitems = (val) => {
    setShowItem(val)
  }
  const handleNavigate = (val) => {
    navigate(val)
    setShowItem('')
    setShowMobileSlider('')
  }
  useEffect(() => {
    setShowItem('')
  }, [])
  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`mm_main ${showMobileSlider ? "opened" : "closed"}`}>
      <div className="mm_con1">
        <h2>Menu</h2>
        <div onClick={() => handleNavigate('/')} className={`mm_menuitems ${showItem == 'home' ? "show" : ""}`}>
          <h3><GoHome /></h3>
          <h3>Home</h3>
        </div>
        <div onClick={() => { handlesubitems('about') }} className={`mm_menuitems ${showItem == 'about' ? "show" : ""}`}>
          <h3>{showItem == 'about' ? (<FiMinus />) : (<CiSquareInfo />)}</h3>
          <h3>about</h3>
        </div>
        <div className={`sub ${showItem == 'about' ? "show" : ""}`}>
          <ul>
            <li onClick={() => handleNavigate('/about-us')}>About</li>
            <li onClick={() => handleNavigate('/history')}>SMVEC History</li>
            <li onClick={() => handleNavigate('/gallery')}  >Gallery</li>
            <li onClick={() => handleNavigate('/contact')}>Contact</li>
          </ul>
        </div>
        <div onClick={() => { handlesubitems('academics') }} className={`mm_menuitems ${showItem == 'academics' ? "show" : ""}`}>
          <h3>{showItem == 'academics' ? (<FiMinus />) : (<RiBookShelfLine />)}</h3>
          <h3>Academics</h3>
        </div>
        <div className={`sub ${showItem == 'academics' ? "show" : ""}`}>
          <ul>
            <li onClick={() => handleNavigate('/faculty-list')}>Faculty</li>
            <li onClick={() => handleNavigate('/courses-detail-agriculture')}>B.Sc. (Hons.) Agriculture</li>
            {/* <li onClick={() => handleNavigate('/courses-detail-horticulture')}>B.Sc. (Hons.) Horticulture
            </li> */}
          </ul>
        </div>
        <div onClick={() => { handlesubitems('campuslife') }} className={`mm_menuitems ${showItem == 'campuslife' ? "show" : ""}`}>
          <h3>{showItem == 'campuslife' ? (<FiMinus />) : (<LuUniversity />)}</h3>
          <h3>campus life</h3>
        </div>
        <div className={`sub ${showItem == 'campuslife' ? "show" : ""}`}>
          <ul>
            <li onClick={() => handleNavigate('/campus-life')}>campus Life</li>
            <li onClick={() => handleNavigate('/event')}>News and events</li>
            <li onClick={() => handleNavigate('/all-india-tour')}>All India Tour</li>
          </ul>
        </div>
        <div onClick={() => { handlesubitems('admission') }} className={`mm_menuitems ${showItem == 'admission' ? "show" : ""}`}>
          <h3>{showItem == 'admission' ? (<FiMinus />) : (<RxBookmark />)}</h3>
          <h3>admissions</h3>
        </div>
        <div className={`sub ${showItem == 'admission' ? "show" : ""}`}>
          <ul>
            <li onClick={() => handleNavigate('/admission')}>Admission</li>
            <li onClick={() => handleNavigate('/admission-agriculture')}>Apply for B.Sc. (Hons.) Agriculture</li>
            {/* <li onClick={() => handleNavigate('/admission-horticulture')}>Apply for B.Sc. (Hons.) Horticulture
            </li> */}
          </ul>
        </div>
        <div className="social-icon">
          <a onClick={() => handleRedirect('https://www.facebook.com/SMVECOfficial')}><i className="fab fa-facebook-f"></i></a>
          <a onClick={() => handleRedirect('https://x.com/SMVEC2')}><i className="fab fa-x-twitter"><BsTwitterX /></i></a>
          <a onClick={() => handleRedirect('https://api.whatsapp.com/send/?phone=919344916320&text&app_absent=0')}><i className="fab fa-whatsapp"></i></a>
          <a onClick={() => handleRedirect('https://www.instagram.com/smvec_official')}><i className="fab fa-instagram"></i></a>
          <a onClick={() => handleRedirect('https://www.youtube.com/@official_smvec')}><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu