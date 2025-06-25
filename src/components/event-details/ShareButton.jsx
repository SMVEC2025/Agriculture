import React from 'react'
import { IoMdShareAlt } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ShareButton({events}) {
    const handleShare = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: events?.acf?.title,
              text: `${events?.acf?.title}\n\n${events?.acf?.description}\n\nMore details: ${`https://agri.smvec.ac.in/event`}`,
              url: `https://agri.smvec.ac.in/event/${events?.acf?.title}`,
            });
          } catch (error) {
          }
        } else {
          alert('Sharing not supported in this browser.');
        }
      };
  return (
     <div className='share_btn' onClick={handleShare}>
        share <IoMdShareAlt/>
    
        
     </div>
  )
}

export default ShareButton