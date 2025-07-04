import React from 'react'
import { useNavigate } from 'react-router-dom'
import CtaHomeThree from '../components/homes/home-3/CtaHomeThree'
import FooterOne from '../layouts/footers/FooterOne'

function AlreadyEnquired() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="success-container">
                <div className="success-box">
                    <h1>You've Already Enquired</h1>
                    <p>Our team has received your enquiry and will get in touch with you shortly.</p>
                    <p>If you have any urgent questions, feel free to contact our admissions office.</p>
                    <button onClick={() => navigate('/')}>Back to Home</button>
                </div>
            </div>
            {/* <CtaHomeThree /> */}
            <FooterOne />
        </div>
    )
}

export default AlreadyEnquired
