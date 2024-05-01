import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";

const Search = () => {
  return (
    <div className='searchDiv bg-greyish rounded-[18px] p-4 md:p-8'>
      <form action=''>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='rounded-[8px] bg-white p-4 flex items-center'>
            <AiOutlineSearch className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none flex-grow' placeholder='Search job here...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <div className='rounded-[8px] bg-white p-4 flex items-center'>
            <BsHouseDoor className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none flex-grow' placeholder='Search by company' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <div className='rounded-[8px] bg-white p-4 flex items-center'>
            <CiLocationOn className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none flex-grow' placeholder='Search by location...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>
        </div>

        <button className='bg-blueColor text-white px-6 py-2 rounded-md mt-4 md:mt-0 w-full md:w-auto'>Search</button>
      </form>

      <div className='flex flex-col md:flex-row items-center justify-between mt-4'>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808000] font-semibold'>Sort By:</label>
          <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2 mt-4 md:mt-0'>
          <label htmlFor='type' className='text-[#808000] font-semibold'>Type:</label>
          <select name='' id='type' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Fulltime</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2 mt-4 md:mt-0'>
          <label htmlFor='level' className='text-[#808000] font-semibold'>Level:</label>
          <select name='' id='level' className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>
      </div>

      <span className='text-[#a1a1a1] cursor-pointer block text-center mt-4'>Clear All</span>
    </div>
  );
};

export default Search;
