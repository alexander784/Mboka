import React from 'react';
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg blueColor rounded-[10px] gap-[8] grid
    grid-cols-5 m-auto items-center justify-center'>

      <div>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-blueColor'>
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className='text-black pb-[13px] opacity-70 leading-7'>
          We always make our seekers and companies find the best jobs and employers find best candidates.

        </p>
      </div>

      <div className='grid'>
        <span className='divTitle Text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span> 
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle Text-[18px] font-semibold pb-[1.5rem] text-white'>
          Resources
        </span> 
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle Text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span> 
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo </li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle Text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact Info
        </span> 
        <div>
          <small className='text-[14px]' text-white>
            ga.nyaga7@gmail.com
          </small>
          
        </div>
        </div>
      </div>
  )
}

export default Footer;