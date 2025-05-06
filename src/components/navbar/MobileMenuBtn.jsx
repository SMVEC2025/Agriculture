import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { IoIosMenu, IoIosClose } from "react-icons/io";

function MobileMenuBtn() {
    const { showMobileSlider, setShowMobileSlider, showNav, showItem, setShowItem } = useContext(AppContext);

    function handleClick() {
        setShowMobileSlider(true);
    }

    function handleClose() {
        setShowMobileSlider(false);
        setShowItem('');
    }
    return (
        <div className={`mmbtn ${showNav ? "color" : ""} ${showMobileSlider ? "true" : ""}`}>
            {showMobileSlider ? (
                <div onClick={handleClose}><IoIosClose /></div> // Close button triggers handleClose
            ) : (
                <div onClick={handleClick}><IoIosMenu /></div>  // Menu button triggers handleClick
            )}
        </div>
    );
}

export default MobileMenuBtn;
