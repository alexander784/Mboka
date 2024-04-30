import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
// import AiOutlineCloseCircle from "react-icons/ai";
import {BsHouseDoor  } from "react-icons/bs"


const Search = () => {
  return (
    <div className='searchDiv grid gp-10 bg-greyish rounded-[18px] p-[3rem]'>
      <form action='firstDiv flex justify-between items-center rounded-[8x] gap-
      [10px] bg-white p-5 shadow-greish-700'>
        <div className='flex gap-2 items-center'>
        <AiOutlineSearch className='text-[25px] icon '/>
        <input type='text' className='bg-transparent text-blue-500
        focus:outline-none w-[100%]' placeholder='Search job here...'/>
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
              hover:text-textColor icon' />
        </div>
        <div className='flex gap-2 items-center'>
        <BsHouseDoor  className='text-[25px] icon '/>
        <input type='text' className='bg-transparent text-blue-500
        focus:outline-none w-[100%]' placeholder='Search by company'/>
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
              hover:text-textColor icon' />
        </div>
        <div className='flex gap-2 items-center'>
        <CiLocationOn  className='text-[25px] icon '/>
        <input type='text' className='bg-transparent text-blue-500
        focus:outline-none w-[100%]' placeholder='Search by location...'/>
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
              hover:text-textColor icon' />
        </div>
        

      </form>
  
    </div>
  )
}

export default Search;