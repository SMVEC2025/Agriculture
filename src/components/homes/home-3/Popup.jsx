import React, { useEffect, useRef } from "react";

const Popup = ({ onClose }) => {
  const facultyPdfPath = "/file/School%20of%20Agricultural%20Sciences%20Faculty%20LIst.pdf";
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleViewFaculty = () => {
    window.open(facultyPdfPath, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="new-popup-overlay">
      <div className="faculty-popup-box" ref={popupRef}>

        {/* Header band */}
        <div className="faculty-popup-header">
          <div className="faculty-popup-header-icon">
            <img src="/assets/img/logo.png" alt="logo" />
          </div>
          <div className="faculty-popup-header-text">
            <h4>SMVEC</h4>
            <h3 className="faculty-popup-school">School of Agricultural Sciences</h3>
          </div>
          <button className="faculty-popup-close" onClick={onClose}>&#x2715;</button>
        </div>

        {/* Body */}
        <div className="faculty-popup-body">
          <div className="faculty-popup-divider" />
          <h4 className="faculty-popup-title">Faculty Details</h4>
          <p className="faculty-popup-desc">
            Explore the complete list of our distinguished faculty members,
            their qualifications, and areas of specialization.
          </p>

          <div className="faculty-popup-actions">
            <button className="faculty-popup-btn" onClick={handleViewFaculty}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                <path d="M7 9h6M7 12h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              View Faculty List
            </button>
            <button className="faculty-popup-skip" onClick={onClose}>
              Maybe later
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Popup;
