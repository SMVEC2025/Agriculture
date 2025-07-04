import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";



const EventHomeThree = () => {
    const { events } = useContext(AppContext)
    const navigate = useNavigate()
    const handleNavigate = (event) => {
        navigate(`/event-details/${event?.acf.title}`, { state: { event } });

    }
    return (
        <>
            <section className="event-section pt-0 fix section-padding">
                <div className="container">
                    <div className="section-title color-red text-center">
                        <h6 className="wow fadeInUp">
                            Events
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            our  events

                        </h2>
                    </div>
                    <div style={{border:"none"}} className="event-wrapper mt-3 mt-md-0">
                        <div className="row g-10">

                            {events?.slice(0, 4).map((element, i) => (
                                <div key={i} className="col-xl-4 col-lg-3 col-md-5 wow fadeInUp " data-wow-delay=".2s">
                                            <div className="card" >
                                                <h6 style={{position:"absolute",right:"0",top:"0",padding:"10px",backgroundColor:"#2e4082",color:"white",borderRadius:"5px",margin:"5px"}}>{element.acf.date}</h6>
  <img style={{height:"250px",objectFit:"cover"}} src={element?.acf.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{color:"#2e4082"}}>{element?.acf?.title}</h5>
    <p className="card-text">{element?.acf?.description.split(" ").slice(0, 20).join(" ")}...</p>
    
  <button onClick={()=>handleNavigate(element)} style={{padding:'15px 20px',marginTop:"10px",backgroundColor:"#2e4082"}} className="theme-btn red-btn">View Events</button>
  </div>
</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventHomeThree;