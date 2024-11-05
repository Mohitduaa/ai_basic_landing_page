import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div className='mx-3 flex flex-col justify-center items-center mb-5 '>
        <h2 className='px-4 text-center font-medium border border-black border-dashed mb-5'>Unlock Future of Business with Fyntl AI</h2>
        <h1 className='text-[60px] md:text-[72px] font-bold text-center mb-8 leading-12'>AI powered <br />Business OS for SME's</h1>
        <p className=' md:w-[504px] text-center mb-10'>A cutting-edge Generative AI-powered Operating System for MSMEs,integrating an extensive AI Marketplace with plug-and-playsolutions, automated workflows, predictive analytics, and personalized business insights to propel growth, efficiency, and innovation</p>
        <div className='flex relative mb-10'>
            <input className=' border border-black rounded-xl px-4 py-[6px] w-[280px]' type="email" placeholder='Email' />
            <button className='bg-[#D3EF39] px-2 py-[2px] rounded-md ml-[175px] my-1 absolute'>Join waitlist</button>
        </div>
        <div>
            <img className='md:w-[800px] md:h-[450px] rounded-xl mb-[120px]' src="images/ai.jpg" alt="" />
        </div>
    </div>

    </>
  )
}

export default HeroSection