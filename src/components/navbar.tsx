import React from 'react'

import { LuMenuSquare } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='container pt-8'>
           <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Ashar Khan</div>
            <ul className='gap-10 lg:gap-16 md:flex'>
                   <li className='menu-link'><a href="#hero">home</a></li>
                   <li className='menu-link'><a href="#about">about</a></li>
                   <li className='menu-link'><a href="#project">project</a></li>
                   <li className='menu-link'><a href="#skills">skills</a></li>
                   <li className='menu-link'><a href="#contact">contact</a></li>
            </ul>
            <LuMenuSquare className='md:hidden' size={30} />
           </div>
    </div>
  )
}

export default Navbar
