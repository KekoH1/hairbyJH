import React from 'react'
import kontakt from '../assets/kontakt.jpg'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl p-5'>
          <p>Kontakta <span className='font-bold'>Oss</span></p>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={kontakt} alt="" />

          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg'>Våran Salong</p>
            <p className='text-gray-500'>Adress: Norra Svedengatan 13 <br /> 582 73 Linköping, Sverige</p>
            <p className='text-gray-500'>Tel: +467 123 456 789 <br /> hairbyjh@gmail.com</p>
          </div>
        </div>
    </div>
  )
}

export default Contact