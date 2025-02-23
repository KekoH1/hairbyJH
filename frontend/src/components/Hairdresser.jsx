import React from 'react'
import { hairdresser } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hairdresser = () => {

  const navigate = useNavigate()

    return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <br />
            <br />
            <br />
            <h1 className='text-3xl font-medium'>Några av våra Fantastiska Friösrer</h1>
            <div className='w-full flex flex-wrap justify-center gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                    {hairdresser.slice(0,3).map((item, index) =>(
                        <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 w-85' key={index}>
                                    <img className='bg-gray-50 w-full h-70 object-cover' src={item.image} alt="" />
                                    <div className='p-2'>
                                            <div className='flex items-center gap-2 text-sm text-center text-gray-600'>
                                                 <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p className='text-green-500'>Tillgänglig</p>
                                            </div>
                                            <p className='text-sm'>{item.name}</p>
                                            <p className='text-sm'>{item.speciality}</p>
                                    </div>
                            </div> 
                    )) }
            </div>
    
            <br />
                    <a href="/hairdresserpage" className='flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out transform hover:scale-105'>
                            Fler Frisörer
                    </a>
    </div>
)
}

export default Hairdresser