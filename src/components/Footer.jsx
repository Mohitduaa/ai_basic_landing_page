import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='bg-black py-4'>
        <div className=' mx-5 flex justify-between'>
            <div>
                <h1 className='text-white md:text-xl font-medium'>© Framer Inc. 2024</h1>
            </div>
            <div>
                <ul className='flex gap-2 md:gap-5'>
                    <li className='text-white md:text-xl font-medium'>Instagram</li>
                    <li className='text-white md:text-xl font-medium'>Email</li>
                </ul>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer