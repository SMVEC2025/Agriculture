import React from 'react'
import { IoMdShareAlt } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ShareButton() {
    
    const handleShare = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: 'hellotitle',
              text: `${'this is desc'}\n\nMore details: ${'this is url'}`,
              url: 'https://google.com',
            });
            console.log('Shared successfully!');
          } catch (error) {
            console.error('Error sharing:', error);
          }
        } else {
          alert('Sharing not supported in this browser.');
        }
      };
  return (
     <div className='share_btn'>
       <div className='firstshow'>
        share <IoMdShareAlt/>
       </div>
       <div onClick={handleShare} className='secondshow'>
        hey
       </div>
        
     </div>
  )
}

export default ShareButton