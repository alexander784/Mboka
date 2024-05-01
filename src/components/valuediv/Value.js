import React from 'react';
import simple from "../../assets/Simple.avif";

const Value = () => {
  return (
    <div className='mb-16 mt-24'>
      <h1 className='text-textColor text-3xl py-8 pb-12 font-bold md:w-3/4 mx-auto'>
        The value that holds true and to account
      </h1>

      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 items-center mx-auto'>
        <div className='singleGrid rounded-10 hover:bg-gray-100 p-6'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-2 rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center'>
              <img src={simple} alt='' className='w-7/10' />
            </div>
            <span className='font-semibold text-textColor text-base'>
              Simplicity
            </span>
          </div>
          <p className='text-base text-textColor opacity-70 py-4 font-semibold'>
            Things being made beautifully simple are at the heart of everything we do.
          </p>
        </div>

        <div className='singleGrid rounded-10 hover:bg-gray-100 p-6'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-2 rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center'>
              <img src={simple} alt='' className='w-7/10' />
            </div>
            <span className='font-semibold text-textColor text-base'>
              Simplicity
            </span>
          </div>
          <p className='text-base text-textColor opacity-70 py-4 font-semibold'>
            Easier and collaborative
          </p>
        </div>

        <div className='singleGrid rounded-10 hover:bg-gray-100 p-6'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-2 rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center'>
              <img src={simple} alt='' className='w-7/10' />
            </div>
            <span className='font-semibold text-textColor text-base'>
              Simplicity
            </span>
          </div>
          <p className='text-base text-textColor opacity-70 py-4 font-semibold'>
            Work from anywhere across the World.
          </p>
        </div>
      </div>

      <div className='card mt-8 flex flex-col md:flex-row items-center justify-between  bg-cyan-500 p-20 rounded-10'>
        <div>
          <h1 className='text-white text-2xl font-bold'>
            Ready to switch a career
          </h1>
          <h2 className='text-textColor text-xl font-bold'>
            Let's get started
          </h2>
        </div>
        <button className='border-2 rounded-10 py-2 px-10 text-sm font-semibold bg-white text-blue-500 hover:bg-blue-600 hover:text-white mt-8 md:mt-0'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Value;
