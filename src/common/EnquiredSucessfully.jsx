import React from 'react'
import CtaHomeThree from '../components/homes/home-3/CtaHomeThree'
import FooterOne from '../layouts/footers/FooterOne'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessMessage.css";

function EnquiredSucessfully() {
     const [countdown, setCountdown] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);
  return (
    <>
   <div className="success-container">
      <div className="success-box">
        <h1>Enquired successfully!</h1>
        <p>You have successfully enquired.We will contact you soon</p>
        <p className="countdown">Redirecting in {countdown} seconds...</p>
      </div>
    </div>
    <CtaHomeThree />
          {/* <MarqueeTwo /> */}
          {/* <FooterThree /> */}
          <FooterOne />
    </>
  )
}

export default EnquiredSucessfully
