import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CtaHomeThree from '../components/homes/home-3/CtaHomeThree';
import FooterOne from '../layouts/footers/FooterOne';
import './SuccessMessage.css';

function EnquiredSucessfully() {
  const location = useLocation();
  const navigate = useNavigate();
  const studentName = location.state;

  const [allowRender, setAllowRender] = useState(false);

  useEffect(() => {
    if (!studentName) {
      navigate('/');
    } else {
      setAllowRender(true);
    }
  }, [studentName, navigate]);

  if (!allowRender) return null; // 

  return (
    <>
      <div className="success-container">
        <div className="success-box">
          <h1>Enquired successfully! {studentName}</h1>
          <p>You have successfully enquired. We will contact you soon.</p>
          <button onClick={() => navigate('/')}>Back To Home</button>
        </div>
      </div>
      <CtaHomeThree />
      <FooterOne />
    </>
  );
}

export default EnquiredSucessfully;
