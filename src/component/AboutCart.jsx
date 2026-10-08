import React from 'react'

const AboutCart = ({text,para}) => {
  return (
    <div>
        <h4 className='text-[25px] text-secondary font-bold font-dm pb-3'>{text}</h4>
        <p className='text-base text-primary font-normal font-dm w-[506]'>{para}</p>
    </div>
  )
}

export default AboutCart