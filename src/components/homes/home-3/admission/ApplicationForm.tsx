import { useState } from "react"

function ApplicationForm() {
    const [openQualification, setOpenQualification] = useState(false)
    const [openApplication, setOpenApllication] = useState(false)
    return (
        <div className="af_main">
            <button>Application Closed</button>
            <div onClick={() => setOpenApllication(!openApplication)} className={`applicationdate ${openApplication ? "open" : ""}`}>
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
            </div>


            <div onClick={() => setOpenQualification(!openQualification)} className={`applicationdate ${openQualification ? "open" : ""}`}>
                <div className="header">
                    <button>+</button>

                    <h4>Minimum qualification</h4>
                </div>
                <div className="applicationcontainer">
                    <ul>
                        <li>Any candidate who has earned a terminal degree, such as a bachelor’s degree or seminary (madrasa) equivalent, may apply</li>
                        <li>Studied rudimentary classical texts of grammar, fiqh, theology, rhetoric, and the other Islamic sciences with a qualified teacher
                        </li>
                        <li>Proficiency in the English language similar to a native speaker</li>
                        <li>Oral examination administered as part of the admissions interview to assess your Arabic reading/comprehension and area of concentration proficiencies
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm