
function Facilities() {
    const facility = [
        { name: 'auditorium', subheading: null, para: null, img: 'https://smvec.ac.in/wp-content/uploads/2024/06/DSC061361.webp' },
        { name: '24/7 ATM', subheading: null, para: null, img: 'https://smvec.ac.in/wp-content/uploads/2024/06/DSC05735.webp' },
        { name: 'IT', subheading: null, para: null, img: 'https://smvec.ac.in/wp-content/uploads/2024/06/IMG_9970.webp' },
        { name: 'GYM Facilities', subheading: null, para: null, img: 'https://smvec.ac.in/wp-content/uploads/2024/06/DSC05779.webp' },
        { name: 'sports', subheading: null, para: null, img: 'https://smvec.ac.in/wp-content/uploads/2024/06/sports-2.webp' },
        { name: 'canteen', subheading: null, para: null, img: 'https://smvec.ac.in/wp-content/uploads/2024/06/canteen.webp' }
      ];
  return (
    <div className="cl_main">
          <div className="header">
            <h4>Life at SMVEC</h4>
            <p>Follow your passions, explore leadership opportunities and challenge yourself. At Muhlenberg, learning and growth exist in every facet of student life.</p>
          </div>
          <div className="grid-container">
           {facility.map((e,i)=>(
            <div key={i} className="grid-div">
            <img src={e.img} alt="" />
            <div className="content">
               <h3>{e.name}</h3>
               <p>Welcome to the Office of Multicultural Life (OML). OML is committed to advancing Muhlenberg College’s mission to create a welcoming and inclusive campus.</p>
            </div>
          </div>
           ))}
          </div>
    </div>
  )
}

export default Facilities