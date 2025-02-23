import React from 'react'
import frisörteam from '../assets/frisörteam.png';


const Header = () => {
return (
    <div className='flex flex-col md:flex-row flex-wrap bg-[#c3a48d] rounded-lg px-6 md:px-10 lg:px-20'>
        {/* ----Left side---- */}

        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Boka Tid<br /> Med Våra Specialist Frisörer
            </p>
            <div className='flex flex-col gap-4 text-white text-sm font-light'>
                <p>Kolla enkelt igenom våra fantastiska Frisörer för att hitta rätt för dig </p>
            </div>
            <a href="/hairdresserpage" className='flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out transform hover:scale-105'>
                Boka Tid
            </a>

        </div>

        {/* ----right side---- */} 

        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-10 h-auto rounded-lg' src={frisörteam} alt="" />
        </div>


    </div>
  )
}

export default Header