import React from 'react'
import logo from './../assets/Images/logo.jpg'
import { BsSearch } from "react-icons/bs";
import Categories from './Categories';
import DarkModeToggle from './DarkModeToggle';
function Header() 
{
  return (
    <div className='flex justify-between items-center '>
     <Categories />
      <img src={logo} className='w-[108px]'/>
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer' >World</li>
        <li className='hover:font-bold cursor-pointer'>Politics</li>
        <li className='hover:font-bold cursor-pointer '>Sports</li>
        <li className='hover:font-bold cursor-pointer'>Technology</li>
      </ul>
      <div className="relative flex items-center w-full max-w-xs">
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none ml-2 focus:ring-2 focus:ring-blue-400"
      />
      <BsSearch className="absolute left-3 text-gray-500" />
    <DarkModeToggle />
</div>
    </div>
   
  )
}

export default Header
