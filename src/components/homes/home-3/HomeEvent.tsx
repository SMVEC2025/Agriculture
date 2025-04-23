import { IoTimeOutline,IoLocationOutline } from "react-icons/io5";

function HomeEvent() {
  const events = [
    {
      name: "AI Future Conference",
      time: "09:00 AM",
      date: "2025-05-12",
      location: "Hyderabad Tech Park"
    },
    {
      name: "Startup Pitch Fest",
      time: "01:00 PM",
      date: "2025-05-18",
      location: "Taj Palace, New Delhi"
    },
    {
      name: "Green Energy Workshop",
      time: "11:30 AM",
      date: "2025-05-22",
      location: "EcoHub Auditorium, Pune"
    }
  ];

  return (
    <div className='he_main'>
      <div className="he_header">
        <div className="section-title color-red text-center">
          <h6 className="wow fadeInUp">
            Upcomming Events
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            join our upcomming events
          </h2>
          <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">Join us for a variety of exciting events that cater to your interests and learning needs. Our events are designed to inspire and educate</p>
        </div>
      </div>
      <div className="he_content">

        <div className="he_left">

          {events.map((e, i) => (
            <div key={i} className="content">
              <div className="contentOne">
                <div className="he_date">12</div>
                <div>Mat,2025</div>
              </div>
              <div className="content2">
                <h4 >{e.name}</h4>
                <div className="he_timeloc">
                  <span className="he_time"><span><IoTimeOutline/></span> {e.time}</span> 
                  <span className="he_location"><span><IoLocationOutline/></span>{e.location}</span>
                </div>

              </div>
              <div className="content3">
                <button>View</button>
              </div>
            </div>
          ))}
  
            <button>View More</button>
    
        </div>
        <div className="he_right">
          <div className="iphone-x">
            <i>Speaker</i>
            <b>Camera</b>
             <img src="/assets/img/instaui2.png" alt="" />
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default HomeEvent