// components/Popup.js
import React, { useEffect, useRef } from "react";

const Popup = ({ onClose,popImage }) => {
      const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Close if clicked outside the popup box
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  
  return (
    <div className="new-popup-overlay">
      <div className="popup-box"  ref={popupRef}>
         <img  src={popImage} alt="" />
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Popup;
