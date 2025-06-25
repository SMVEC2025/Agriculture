import React from 'react'
import rallis from '/assets/img/placement/rallis.png';
import mcf from '/assets/img/placement/mcf.png';
import parrys from '/assets/img/placement/parrys.png';
import upl from '/assets/img/placement/upl.png';
import bayer from '/assets/img/placement/bayer.png';
import logo from '/assets/img/placement/logo.svg';
import gsp from '/assets/img/placement/gsp.png';
function Placement() {
    const plaementPartners =[
        {
            image: '/assets/img/placement/rallis.png'
        },
         {
            image: '/assets/img/placement/mcf.png'
        },
         {
            image: '/assets/img/placement/parrys.png'
        },
         {
            image: '/assets/img/placement/upl.png'
        },
         {
            image: '/assets/img/placement/bayer.png'
        },
         {
            image: '/assets/img/placement/logo.svg'
        },
         {
            image: '/assets/img/placement/gsp.png'
        },
    ]
  return (
    <div className='home_placement-main'>
         <div className="section-title color-red text-center">
                    <h6 className="wow fadeInUp">
                         Placement
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                     our Placement partners

                    </h2>
                </div>

       <div className='placement-list'>
           {plaementPartners.map((element,index)=>(
            <img src={`${element.image}`} alt="" />
           ))}
       </div>
    </div>
  )
}

export default Placement