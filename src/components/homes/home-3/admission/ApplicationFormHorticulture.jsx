// import { useState } from "react"
// import Form from "../../../../common/Form"

import { useNavigate } from "react-router-dom"

function ApplicationFormHorticulture() {
    // const [openQualification, setOpenQualification] = useState(false)
    // const [openApplication, setOpenApllication] = useState(false)
    const  navigate = useNavigate()
    return (
        <div className="af_main">
            <div className="closed-info">
                
            <button >Application Closed</button>   
            <p>Currenty Application closed for B.Sc. (Hons.) Horticulture  <br/> Continue apply for <span onClick={()=>{navigate('/admission-agriculture')}}>B.Sc. (Hons.) Agriculture</span></p>
            </div>
            {/* <Form/> */}
            {/* <div className={`applicationdate ${openApplication ? "open" : ""}`}  onClick={() => setOpenApllication(!openApplication)} >
                <button>+</button>
                <div className="header">
                    <h4>Application Dates</h4>
                </div>
                <div className="applicationcontainer">
                    <p>Applications open on March 15th, 2025. </p>

                    <h5>Application Deadline
                    </h5>
                    <p>
                        Deadline: August 31st, 2025</p>
                </div>
            </div> */}


            {/* <div onClick={() => setOpenQualification(!openQualification)} className={`applicationdate ${openQualification ? "open" : ""}`}>
                <div className="header">
                    <button>+</button>

                    <h4>Minimum qualification</h4>
                </div>
                <div className="applicationcontainer">
                    <ul>
                        <li>Candidates must have completed higher secondary education (10+2) with a strong foundation in science subjects, preferably including Biology or Agriculture.</li>
                        <li>A genuine interest in agricultural sciences and sustainable farming practices is essential.</li>
                        <li>Proficiency in English is required, as the medium of instruction is English.</li>
                        <li>Candidates may be evaluated through a personal interview to assess aptitude, communication skills, and subject understanding.</li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}

export default ApplicationFormHorticulture