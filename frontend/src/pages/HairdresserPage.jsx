import React, { useContext } from 'react'
import { hairdresser } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const HairdresserPage = () => {
  
  const navigate = useNavigate()
  
  
  return (
    <div className='pt-20'>
        <p className='flex flex-wrap justify-center gap-4 text-3xl'>Här Hittar Du Rätt Frisör För Dina Behov</p>
        <div>
          <div>
            <div className='w-full flex flex-wrap justify-center gap-4 pt-5 gap-y-6 px-3 sm:px-0 pt-15'>
                        {hairdresser.slice(0,6).map((item, index) =>(
                            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4' key={index}>
                                <img className='bg-gray-50' src={item.image} alt="" />
                                <div className='p-4'>
                                    <div className='flex items-center gap-2 text-sm text-center text-gray-600'>
                                       <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p className='text-green-500'>Tillgänglig</p>
                                    </div>
                                    <p>{item.name}</p>
                                    <p>{item.speciality}</p>
                                </div>
                            </div> 
                        )) }
                    </div>
          </div>
        </div>
    </div>
  )
}

export default HairdresserPage