import React from 'react'
import style from './LandingAbout.module.css'
import StyledText from '../text/StyledText'
const LandingAbout = () => {
  return (
    <div>
        <section className={`p-4 py-28 md:pt-16 sm:pt-12 w-full bg-[#0D1116] text-white flex flex-col justify-start `}>
      <div className={`${style.about} ml-12 mt-20  sm:mt-8 sm:mb-4 w-2/3`}>
        {/* <h1 className={`text-5xl mt-20 font-semibold text-left`}>About ECE Society</h1> */}
        <StyledText
          primary="#FF4D4D"
          secondary="#F9CB28"
          className="text-[36px] font-bold flex  mb-4"
         >
        <h1 className={`text-5xl mt-20 font-semibold text-left`}>About ECE Society</h1>
        </StyledText>

        <p className='text-lg mt-5 font-normal pt-2 '>
        The ECE Society is the official society of the Department of Electronics and Communication Engineering, BIT Sindri. This society aims to promote Scientific thinking among the students and provide a holistic environment for students where they can freely explore the latest cutting-edge technologies in the field of electronics and Software solutions to real-life problems
          </p>
      </div>
      </section>
    </div>
  )
}

export default LandingAbout