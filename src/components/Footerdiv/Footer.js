import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer p-10 md:p-20 mb-4 bg-slate-900 rounded-lg grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 items-center justify-center'>
      <div className='col-span-1 md:col-span-2'>
        <div className='logoDiv'>
          <h1 className='logo text-2xl text-white pb-6 md:pb-12'>
            <strong>Crab</strong>Jobs
          </h1>
        </div>
        <p className='text-white opacity-70 leading-7'>
          We always make our seekers and companies find the best jobs and employers find the best candidates.
        </p>
      </div>

      <div className='col-span-1'>
        <span className='divTitle text-lg font-semibold pb-6 text-white'>
          Company
        </span> 
        <div className='grid gap-3'>
          <li className='text-white opacity-70 hover:opacity-100'>About Us</li>
          <li className='text-white opacity-70 hover:opacity-100'>Features</li>
          <li className='text-white opacity-70 hover:opacity-100'>News</li>
          <li className='text-white opacity-70 hover:opacity-100'>FAQ</li>
        </div>
      </div>

      <div className='col-span-1'>
        <span className='divTitle text-lg font-semibold pb-6 text-white'>
          Resources
        </span> 
        <div className='grid gap-3'>
          <li className='text-white opacity-70 hover:opacity-100'>Account</li>
          <li className='text-white opacity-70 hover:opacity-100'>Support Center</li>
          <li className='text-white opacity-70 hover:opacity-100'>Feedback</li>
          <li className='text-white opacity-70 hover:opacity-100'>Contact Us</li>
        </div>
      </div>

      <div className='col-span-1'>
        <span className='divTitle text-lg font-semibold pb-6 text-white'>
          Support
        </span> 
        <div className='grid gap-3'>
          <li className='text-white opacity-70 hover:opacity-100'>Events</li>
          <li className='text-white opacity-70 hover:opacity-100'>Promo</li>
          <li className='text-white opacity-70 hover:opacity-100'>Req Demo</li>
          <li className='text-white opacity-70 hover:opacity-100'>Careers</li>
        </div>
      </div>

      <div className='col-span-1'>
        <span className='divTitle text-lg font-semibold pb-6 text-white'>
          Contact Info
        </span> 
        <div>
          <small className='text-white text-sm'>
            ga.nyaga7@gmail.com
          </small>
          <div className='icons flex gap-4 pt-4'>
            <AiFillInstagram className='text-blueColor bg-white p-2 h-10 w-10 rounded-full icon' />
            <AiOutlineTwitter className='text-blueColor bg-white p-2 h-10 w-10 rounded-full icon' />
            <BsFacebook className='text-blueColor bg-white p-2 h-10 w-10 rounded-full icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
