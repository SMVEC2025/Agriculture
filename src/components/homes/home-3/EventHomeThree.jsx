import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

 

const EventHomeThree = () => {
    const {events}=useContext(AppContext)
    const navigate = useNavigate()
    const handleNavigate=(event)=>{
        navigate(`/event-details/${event?.acf.title}`, { state: { event } });

    }
  return (
    <>
       <section className="event-section pt-0 fix section-padding">
            <div className="container">
                <div className="section-title color-red text-center">
                    <h6 className="wow fadeInUp">
                        Upcoming Events
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    join our upcomming events

                    </h2>
                </div>
                <div className="event-wrapper mt-3 mt-md-0">
                    <div className="row g-0">
                       
                        {events?.slice(0, 4).map((element,i)=>(
                             <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                             <div className="event-card-items" style={{background: `url(${element?.acf?.image})`}}>
                                <img src={element.acf.image} className='hllo' alt="" />
                                <div className="container"></div>
                                 <div className="post-cat">
                                     {element?.acf?.date}
                                 </div>
                                 <div className="content">
                                     <h4>
                                        {element.acf?.title}
                                     </h4>
                                     <ul className="date-list">
                                         <li>
                                             <i className="far fa-map-marker-alt"></i>
                                             {element?.acf.location}
                                         </li>
                                         <li>
                                             <i className="far fa-clock"></i>
                                             {element?.acf?.time}
                                         </li>
                                     </ul>
                                     <button onClick={()=>handleNavigate(element)} className="theme-btn red-btn">View Events</button>
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