import React, { useState, useEffect } from 'react';

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

const courses = [
  'BSc Agriculture',
  'BSc Horticulture'
];

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: '',
    city: '',
    course: '',
    captcha: '',
    captchaInput: ''
  });

  const [cities, setCities] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.course) newErrors.course = 'Course is required';
    if (formData.captchaInput !== formData.captcha) {
        newErrors.captchaInput = 'Captcha does not match'
        formData.captchaInput=""
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Here you would typically send the data to a server
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-container">
        <div className="success-message">
          <h2>Application Submitted Successfully!</h2>
          <p>Thank you for your application. We will contact you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1>Admission enquiry</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
            maxLength={10}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={errors.state ? 'error' : ''}
          >
            <option value="">Select State</option>
            {/* Pondicherry first */}
            {/* Other states */}
            {indianStates
              .filter(state => state.name !== 'Pondicherry')
              .map(state => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
          </select>
          {errors.state && <span className="error-message">{errors.state}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={errors.city ? 'error' : ''}
            disabled={!formData.state}
          >
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label>Course Applying For:</label>
          <div className="radio-group">
            {courses.map(course => (
              <div key={course} className="radio-option">
                <input
                  type="radio"
                  id={course.replace(/\s+/g, '-')}
                  name="course"
                  value={course}
                  checked={formData.course === course}
                  onChange={handleChange}
                />
                <label htmlFor={course.replace(/\s+/g, '-')}>{course}</label>
              </div>
            ))}
          </div>
          {errors.course && <span className="error-message">{errors.course}</span>}
        </div>

        <div className="form-group captcha-group">
          <label>Captcha:</label>
          <div className="captcha-container">
            <div className="captcha-display">{formData.captcha}</div>
            <button type="button" onClick={generateCaptcha} className="refresh-btn">
              ↻
            </button>
          </div>
          <input
            type="text"
            name="captchaInput"
            value={formData.captchaInput}
            onChange={handleChange}
            placeholder="Enter the captcha"
            className={`captchainput${errors.captchaInput ? 'error' : ''}`}
          />
          {errors.captchaInput && <span className="error-message">{errors.captchaInput}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Form;