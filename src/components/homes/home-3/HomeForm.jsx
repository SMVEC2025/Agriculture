import React from 'react'
import Form from '../../../common/Form'
import Lottie from 'lottie-react';
import bookanimation from '../../../common/bookanimation.json'
function HomeForm() {
    return (
        <div className='homeform_main' >
            <div className='blur'>
            
            
            <div className='homeform-left'>
<div style={{ width: 300, height: 300 }}>
            
      <Lottie animationData={bookanimation} loop={true} />
    </div>
        </div>
            <div className='homeform-right'>
            <div className='af_main'>
            <Form/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default HomeForm


  {/* <div style={{ width: 300, height: 300 }}>
            
      <Lottie animationData={bookanimation} loop={true} />
    </div> */}