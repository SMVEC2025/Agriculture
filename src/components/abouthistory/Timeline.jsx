import React, { useEffect, useRef, useState } from 'react';


const timelineData= [
  {
    year: '1999',
    description: ' Sri Manakula Vinayagar Engineering College (SMVEC) was founded by the Sri Manakula Vinayaga Educational Trust to provide quality, affordable education, especially for underprivileged communities.',
    image: '/assets/img/about/smvecold.png',
    title:"Establishment",
  },
  {
    year: 'Early 2000s',
    description: `SMVEC expanded its academic offerings in engineering disciplines and gradually built modern infrastructure like libraries, laboratories, and hostels.`,
    image: '/assets/img/about/smveclabel.png',
    title:"Growth",
},  {
    year: '2013',
    description: `SMVEC became the first engineering college in Puducherry to be accredited by NAAC with an 'A' grade.`,
    image: 'https://i0.wp.com/law.smvec.ac.in/images/events/chairman.webp',
    title:"Accreditation",
},  {
    year: '2019',
    description: `SMVEC was granted autonomous status by the University Grants Commission (UGC) while continuing its affiliation with Pondicherry University.

`,
image: 'https://smvec.ac.in/wp-content/uploads/2024/06/Sri_Manakula_Vinayagar_Engineering_College.webp',
title:" Autonomous Status",
},  {
    year: '2020s',
    description: `added new programs in Arts and Science, Allied Health Sciences, Agriculture, Law, Physiotherapy, and Pharmacy.

Campus grew to 125 acres with Wi-Fi enabled, air-conditioned auditoriums, modern labs, and separate boys' and girls' hostels.`,
image: 'https://i1.wp.com/arts.smvec.ac.in/wp-content/uploads/2021/06/1.jpg?fit=1024%2C683&ssl=1',
title:"Expansion",
}, {
    year: '2022–2024',
    description: `Ranked in the 151–300 band in the NIRF Innovation Category.

Rated 'AAA' by Careers 360 as the Best Engineering College in Puducherry.

Strengthened placement records, with students placed in top companies in India and abroad.`,
    image: '/assets/img/breadcrumb/DJI_0981.JPG',
    title:"Recognitions",
}, 
];

export const Timeline = () => {
  const containerRef = useRef(null);
const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [background, setBackground] = useState(timelineData[0].image);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollY + 120 >= top && scrollY + 120 <= bottom) {
          setActiveIndex(index);
          setBackground(timelineData[index].image);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="timeline-container"
      id="timeline-1"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="timeline-header">
        <h2 className="timeline-header__title">History of SMVEC</h2>
        {/* <h3 className="timeline-header__subtitle">FATHER OF THE TURKS</h3> */}
      </div>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`timeline-item ${
              activeIndex === index ? 'timeline-item--active' : ''
            }`}
            data-text={`${item.title}`}
          >
            <div className="timeline__content">
              <img className="timeline__img" src={item.image} alt={item.year} />
              <h2 className="timeline__content-title">{item.year}</h2>
              <p className="timeline__content-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="demo-footer">
        <a href="http://www.turkishnews.com/Ataturk/life.htm" target="_blank" rel="noopener noreferrer">
          Source/Kaynak
        </a>
      </div>
    </div>
  );
};
