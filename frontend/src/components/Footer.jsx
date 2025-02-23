import React from 'react'
import logo from '../assets/JLogo.png';

const Footer = () => {
  return (
    <div className="md:mx-10">
        <div className='flex flex-cols sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* ------Left Side--- */}
            <div>
                <img className='md-5 w-90' src={logo} alt="logo" />
                
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Välkommen till vår professionella frisörsalong där vi erbjuder förstklassiga hårvårdstjänster i en avslappnad och trivsam miljö.</p>
                
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Vi är ett team av erfarna frisörer som är dedikerade till att ge dig en personlig och professionell service.</p>
            </div>

            {/* ------Center--- */}
            <div>   
                <p className='text-xl font-medium md-5'>Företaget</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Hem</li>
                    <li>Kontakta Oss</li>
                    <li>Om Oss</li>
                    <li>Policy</li>
                </ul>

            </div>


            {/* ------Right Side--- */}
            <div>
                <p className='text-xl font-medium md-5 '>Här Hittar Du Oss</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+46 712-345-678</li>
                    <li>hairbyjh@gmail.com</li>
                </ul>
            </div>

        </div>
        <div>
            <hr />
            
            <p className='py-5 text-sm text-center'>© 2025 Hair By JH. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer