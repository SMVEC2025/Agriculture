import { useNavigate } from "react-router-dom"

function AboutEnd() {
  const navigate = useNavigate()
  return (
    <div className="ae_main" style={{backgroundImage:`url('/assets/img/breadcrumb/DJI_0981.jpg')`}}>
        <div className="content">
        <p>The gift of education is a legacy that never fades</p>
        <h6>At Sri Manakula Vinayagar College of Agriculture and Horticulture, we believe quality education transforms lives. Your support helps us nurture future leaders in agriculture, innovation, and sustainability. Every contribution—big or small—strengthens our mission to make education accessible, impactful, and enduring.</h6>
        <button onClick={()=>(navigate('/contact'))}>Contact us</button>
        </div>
    </div>
  )
}

export default AboutEnd