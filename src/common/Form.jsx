import axios from 'axios';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { FormControl, InputLabel, Select, FormHelperText, Box, TextField, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

// Indian states and cities data
const indianStates = [
  { name: 'Puducherry', cities: ['Pondicherry', 'Karaikal', 'Mahe', 'Yanam'] },
  { name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Vellore', 'Erode', 'Tiruppur', 'Thoothukudi'] },

  { name: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Kadapa', 'Rajahmundry', 'Tirupati', 'Anantapur', 'Kakinada', 'Eluru', 'Ongole', 'Srikakulam', 'Chittoor'] },
  { name: 'Arunachal Pradesh', cities: ['Itanagar', 'Naharlagun', 'Tawang', 'Bomdila', 'Ziro', 'Pasighat', 'Roing', 'Tezu'] },
  { name: 'Assam', cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon', 'Karimganj'] },
  { name: 'Bihar', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Ara', 'Begusarai', 'Katihar'] },
  { name: 'Chhattisgarh', cities: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Ambikapur'] },
  { name: 'Goa', cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda'] },
  { name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh', 'Anand', 'Nadiad', 'Bharuch'] },
  { name: 'Haryana', cities: ['Gurgaon', 'Faridabad', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Karnal', 'Hisar', 'Sonipat'] },
  { name: 'Himachal Pradesh', cities: ['Shimla', 'Manali', 'Dharamshala', 'Mandi', 'Solan', 'Una', 'Chamba', 'Hamirpur'] },
  { name: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro Steel City', 'Deoghar', 'Hazaribagh'] },
  { name: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Mangalore', 'Hubballi', 'Belagavi', 'Kalaburagi', 'Davanagere', 'Ballari', 'Udupi', 'Tumakuru'] },
  { name: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Alappuzha', 'Palakkad', 'Kannur', 'Kottayam'] },
  { name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Ratlam', 'Satna', 'Rewa'] },
  { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur', 'Nanded', 'Sangli'] },
  { name: 'Manipur', cities: ['Imphal', 'Thoubal', 'Churachandpur', 'Bishnupur', 'Kakching'] },
  { name: 'Meghalaya', cities: ['Shillong', 'Tura', 'Jowai', 'Nongpoh'] },
  { name: 'Mizoram', cities: ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip'] },
  { name: 'Nagaland', cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha'] },
  { name: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore'] },
  { name: 'Punjab', cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Mohali'] },
  { name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner', 'Ajmer', 'Alwar', 'Bharatpur'] },
  { name: 'Sikkim', cities: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan'] },
  { name: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Mahbubnagar'] },
  { name: 'Tripura', cities: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailasahar'] },
  { name: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi', 'Prayagraj', 'Meerut', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur', 'Gorakhpur', 'Noida'] },
  { name: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Nainital'] },
  { name: 'West Bengal', cities: ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur', 'Howrah', 'Bardhaman', 'Malda', 'Kharagpur'] },

  { name: 'Andaman and Nicobar Islands', cities: ['Port Blair', 'Havelock Island'] },
  { name: 'Chandigarh', cities: ['Chandigarh'] },
  { name: 'Dadra and Nagar Haveli and Daman and Diu', cities: ['Daman', 'Diu', 'Silvassa'] },
  { name: 'Delhi', cities: ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi', 'Dwarka', 'Rohini'] },
  { name: 'Jammu and Kashmir', cities: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur'] },
  { name: 'Ladakh', cities: ['Leh', 'Kargil'] },
  { name: 'Lakshadweep', cities: ['Kavaratti'] },
];

// Add more states as needed

const Form = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    fathername: '',
    phone: '',
    state: '',
    email: '',
    otp: '',
    city: '',
    course: '',
    message: '',
    captcha: '',
    captchaInput: '',
    is_otp_verified: 0
  });

  const [cities, setCities] = useState([]);
  const [errors, setErrors] = useState({});
  const [userOtp, setUserOtp] = useState(' ')
  const [otpVerified, setOtpVerified] = useState(false)
  const [buttonLoading, setButtonLoading] = useState('')
  const [timeLeft, setTimeLeft] = useState(59);
  const [loading, setLoading] = useState(false)
  const timerRef = useRef(null);
  const { isSubmitted, setIsSubmitted, setFormOpen } = useContext(AppContext)
  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Update cities when state changes
  useEffect(() => {
    if (formData.state) {
      const selectedState = indianStates.find(s => s.name === formData.state);
      if (selectedState) {
        setCities(selectedState.cities);
        setFormData(prev => ({ ...prev, city: '' })); // Reset city when state changes
      }
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setFormData(prev => ({ ...prev, captcha }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == 'phone' && otpVerified) {
      return
    }
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  ///getting meta / ad data 
  function getUTMParams() {
    const params = new URLSearchParams(window.location.search);

    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      utm_id: params.get('utm_id') || '',
      fbclid: params.get('fbclid') || params.get('gclid') || '',
    };
  }



  const validate = () => {
    const newErrors = {};


    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'email is required';
    if (!formData.fathername.trim()) newErrors.fathername = 'fatername is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (formData.is_otp_verified == 0) newErrors.otp = 'Verify otp';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const utmData = getUTMParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (validate()) {

      const enquiryData = {

        student_name: formData.name,
        father_name: formData.fathername,
        department: 'B.Sc-Agri',
        mobile: formData.phone,
        email: formData.email,
        state: `${formData.city},${formData.state}`,
        qualification: '',
        requirement: formData.message,
        degreeID: "75",
        course_code_ID: "Agri",
        is_otp_verified: formData.is_otp_verified,
        utm_id: utmData?.utm_id || '',
        utm_source: utmData?.utm_source || 'website',
        utm_medium: utmData?.utm_medium || '',
        utm_campaign: utmData?.utm_campaign || '',
        utm_content: utmData?.utm_content || '',
        utm_term: utmData?.utm_term || '',
        utm_gclid: utmData?.fbclid || '',
      };
      try {
        let response = await axios.post('https://agribackend.vercel.app/api/submit-form', enquiryData);

        setTimeout(() => {
          setIsSubmitted(true)
          setFormOpen(false)
          setLoading(false)
          if (response.data != 1) {
            navigate(`/success/?id=${response.data}`, { state: enquiryData?.student_name })
          } else {
            navigate('/already-enquired')
          }

        }, 100);
      } catch (error) {
        alert("Something went wrong! try after sometimes");
        setLoading(false)

      }
    } else {
      setLoading(false)

    }

  };
  const startCountdown = () => {
    if (timerRef.current) return; // Prevent multiple intervals

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          setButtonLoading('')
          setTimeLeft(true)
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  const sendOtp = async (e) => {
    e.preventDefault();
    setButtonLoading('otp')
    const newErrors = {};


    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      setButtonLoading('')

    }
    else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
      setButtonLoading('')
    }
    else {
      try {
        const response = await axios.post('https://agribackend.vercel.app/api/send-otp', {
          "mobile_number": formData.phone
        });

        const jsonString = JSON.stringify(response.data)
        setUserOtp(jsonString)
        setButtonLoading('otpcount')
        startCountdown()
      } catch (error) {
        console.error("Error submitting form:", error);
        setButtonLoading('')
      }
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  }
  const verifyOtp = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.otp) newErrors.otp = 'Enter a valid otp';
    if (userOtp == " ") newErrors.otp = 'generate a OTP ';

    if (userOtp !== formData.otp) {
      newErrors.otp = 'Enter a valid otp';
    } else {
      setFormData(prev => ({ ...prev, is_otp_verified: 1 }));
      setOtpVerified(true)
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }


  function handleKeyDown(e, triggerButton = false) {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }
  return (
    <div className="form-container">
      <div className='header'>
        <h2>Admission enquiry</h2>
      </div>
      <form >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>

          <div className='names_field'>
            <TextField
              id="name"
              label="Name"
              name="name"
              variant="outlined"
              className="custom-input"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              onKeyDown={(e) => handleKeyDown(e)}

              sx={{
                input: {
                  color: 'black',
                },
                '& .MuiInputBase-input:focus': {
                  color: 'black',
                },
              }}
            />

            <TextField
              id="fathername"
              label="Father Name"
              className="custom-input"
              name="fathername"
              variant="outlined"
              fullWidth
              value={formData.fathername}
              onChange={handleChange}
              error={!!errors.fathername}
              helperText={errors.fathername}
              onKeyDown={(e) => handleKeyDown(e)}

              sx={{
                input: {
                  color: 'black',
                },
                '& .MuiInputBase-input:focus': {
                  color: 'black',
                },
              }}
            />
          </div>
          <div className='input-with-btn'>

            <TextField
              id="phone"
              label="Phone"

              name="phone"
              variant="outlined"
              className="custom-input"
              style={{ width: `${otpVerified ? '100%' : 'calc(100% - 120px)'}` }}
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}

              sx={{
                input: {
                  color: 'black',
                },
                '& .MuiInputBase-input:focus': {
                  color: 'black',
                },
              }}
            />
            {buttonLoading == '' && !otpVerified && (
              <button onClick={sendOtp}>Get-Otp</button>
            )}
            {buttonLoading == 'otp' && (
              <button><span className='loading-btn'><AiOutlineLoading3Quarters /></span></button>
            )}
            {buttonLoading == 'otpcount' && !otpVerified && (
              <button>{timeLeft} sec</button>
            )}
          </div>

          {userOtp !== ' ' && (
            <>
              {!otpVerified ? (
                <div className='input-with-btn'>

                  <TextField
                    id="otp"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    label="OTP"
                    variant="outlined"
                    className="custom-input"
                    style={{ width: `calc(100% - 120px)` }}
                    error={!!errors.otp}
                    helperText={errors.otp}
                    onKeyDown={(e) => handleKeyDown(e)}

                    sx={{
                      input: {
                        color: 'black',
                      },
                      '& .MuiInputBase-input:focus': {
                        color: 'black',
                      },
                    }}
                  />

                  <button onClick={verifyOtp}>Verify</button>

                </div>
              ) : <div className='success-msg'>OTP Verified Sucessfully</div>}


            </>
          )}
          <TextField
            id="email"
            label="Email"
            name="email"
            type="email"
            className="custom-input"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            onKeyDown={(e) => handleKeyDown(e)}

            sx={{
              input: {
                color: 'black',
              },
              '& .MuiInputBase-input:focus': {
                color: 'black',
              },
            }}
          />

          <TextField
            label="Program"
            type="test"
            className="custom-input"
            variant="outlined"
            fullWidth
            value={"B.Sc Agriculture"}
            helperText={errors.email}
            onKeyDown={(e) => handleKeyDown(e)}

            sx={{
              input: {
                color: 'black',
              },
              '& .MuiInputBase-input:focus': {
                color: 'black',
              },
            }}
          />
          <TextField
            select
            id="state"
            label="State"
            name="state"
            fullWidth
            className="custom-input"
            variant="outlined"
            value={formData.state}
            onChange={handleChange}
            error={!!errors.state}
            helperText={errors.state}
            sx={{
              input: {
                color: 'black',
              },
              '& .MuiInputBase-input:focus': {
                color: 'black',
              },
            }}
          >
            {indianStates.map((state) => (
              <MenuItem key={state.name} value={state.name}>
                {state.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            id="city"
            label="City"
            name="city"
            fullWidth
            variant="outlined"
            className="custom-input"
            value={formData.city}
            onChange={handleChange}
            error={!!errors.city}
            helperText={errors.city}
            sx={{
              input: {
                color: 'black',
              },
              '& .MuiInputBase-input:focus': {
                color: 'black',
              },
            }}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="message"
            label="Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
            sx={{
              input: {
                color: 'black',
              },
              '& .MuiInputBase-input:focus': {
                color: 'black',
              },
            }}
          />


          {!loading ? (
            <button onClick={handleSubmit} className="submit-btn">
              Submit Application
            </button>
          ) : (
            <button className="submit-btn">
              <div><span className='loading-btn'><AiOutlineLoading3Quarters /></span></div>

            </button>
          )}
        </Box>

      </form>
    </div>
  );
};

export default Form;