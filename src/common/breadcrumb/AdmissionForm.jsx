import React, { useState } from 'react';
import axios from 'axios';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: 'test',
    Fathername: 'test',
    Course: 'test',
    mobile: '6382688488',
    email: 'prem@551969@gmail.com',
    place: 'test',
    qualifications: 'test',
    requirement: 'test',
    OTP: 'test',
    utm_id: 'test',
    utm_source: 'test',
    utm_medium: 'test',
    utm_campaign: 'test',
    utm_gclid: 'test'
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const datapara = {
      enquiry: {
        created_at: date,
        student_name: formData.name,
        father_name: formData.Fathername,
        department: formData.Course,
        mobile: formData.mobile,
        email: formData.email,
        state: formData.place,
        qualification: formData.qualifications,
        requirement: formData.requirement,
        encode_id: "",
        utm_id: formData.utm_id || '',
        utm_source: formData.utm_source || '',
        utm_medium: formData.utm_medium || '',
        utm_campaign: formData.utm_campaign || '',
        utm_gclid: formData.utm_gclid || '',
        is_otp_verified: 1
      },
      user: "Admission_Enquiry",
      key: "WojY3p37$%s852"
    };

    const postData = {
      method: "submit_enquiry",
      input_type: "JSON",
      response_type: "JSON",
      rest_data: JSON.stringify(datapara)
    };

    try {
      const response = await axios.post('http://localhost:3000/api/submit-form', datapara);

      console.log("CRM Response:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="Fathername" placeholder="Father's Name" onChange={handleChange} />
      <input name="Course" placeholder="Course" onChange={handleChange} />
      <input name="mobile" placeholder="Mobile" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="place" placeholder="State" onChange={handleChange} />
      <input name="qualifications" placeholder="Qualifications" onChange={handleChange} />
      <input name="requirement" placeholder="Requirement" onChange={handleChange} />
      <input name="OTP" placeholder="OTP" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdmissionForm;
