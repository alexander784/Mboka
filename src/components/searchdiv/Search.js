import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
// import AiOutlineCloseCircle from "react-icons/ai";
import {BsHouseDoor  } from "react-icons/bs"


const Search = () => {
  return (
    <div className='searchDiv grid gp-10 bg-greyish rounded-[18px] p-[3rem]'>
      <form action=''>
        <div className='firstDiv flex justify-between items-center rounded-[8x] gap-
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
        <button className='bg-blueColor h-full p-5 px-10 rounded-[10px]
        text-white cursor-pointer hover:bg-blue-300'>Search</button>
    </div>

 
        
      </form>
      <div className='secDiv flex items-center gap-10 justify-center'>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#8080]' font-semibold>Sort By:</label>
          
        </div>
      </div>
      
    </div>

  )
}

export default Search;