import React, { useEffect, useRef } from "react";

const Popup = ({ onClose }) => {
  const popupRef = useRef();
  const bannerImage = "https://res.cloudinary.com/dahwq2a3k/image/upload/v1754376200/WhatsApp_Image_2025-07-04_at_10.44.52_f7610a79_oetatb.jpg";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="new-popup-overlay">
      <div className="banner-popup-box" ref={popupRef}>
        <button className="banner-popup-close" onClick={onClose}>&#x2715;</button>
        <img src={bannerImage} alt="banner" className="banner-popup-image" />
      </div>
    </div>
  );
};

export default Popup;
