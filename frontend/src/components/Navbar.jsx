import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/JLogo.png';
import MyProfile from '../assets/MyProfile.png';





const Navbar = () => {

    
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = React.useState(false);
    const[token, setToken] = React.useState(true);
     
    return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400 px-6'>
    <NavLink to="/">
        <img className='w-55 cursor-pointer rounded-md' src={logo} alt="Logo"  />
    </NavLink>
        <ul className="flex gap-6">
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-400 font-bold underline" : ""}>
                    Hem
                </NavLink>
            </li>
            <li>
                <NavLink to="/hairdresserpage" className={({ isActive }) => isActive ? "text-gray-400 font-bold underline" : ""}>
                    Alla Frisörer
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-gray-400 font-bold underline" : ""}>
                    Om Oss
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-gray-400 font-bold underline" : ""}>
                    Kontakt
                </NavLink>
            </li>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token
                ? <div className='relative group'>
                    <img src={MyProfile} alt="Profile" className='w-18 h-18 rounded-full cursor-pointer' onClick={()=>navigate('/my-profile')} />
                    <div className='absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('myprofile')}className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('../pages/Appointments.jsx')}className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div> 
                </div>
                :<button onClick={()=>navigate('/login')} className='border border-gray-200 rounded-md px-4 py-2 bg-[#c3a48d] text-white hover:bg transition duration-300 ease-in-out transform hover:scale-105'>
                Login
            </button>
            }
            
        </div>
    </div>
  );
};

export default Navbar;
