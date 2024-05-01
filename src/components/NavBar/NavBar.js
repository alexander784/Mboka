import React from 'react';

const NavBar = () => {
  return (
    <div className='navbar fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center p-[0.5rem]'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-blueColor'>
          <strong>Crab</strong>Jobs
        </h1>
      </div>
      <div className='menu flex gap-8'>
        {/* <li className='menuList text-[#6f6ff6] hover:text-blueColor'>Jobs</li> */}
        {/* <li className='menuList text-[#6f6ff6] hover:text-blueColor'>Companies</li> */}
        {/* <li className='menuList text-[#6f6ff6] hover:text-blueColor'>About</li> */}
        {/* <li className='menuList text-[#6f6ff6] hover:text-blueColor'>Contact</li> */}
        {/* <li className='menuList text-[#6f6ff6] hover:text-blueColor'>Blog</li> */}
        <li className='menuList text-[#6f6ff6] hover:text-blueColor'>Login</li>
        <li className='menuList text-[#6f6ff6] hover:text-blueColor'>Register</li>
      </div>
    </div>
  );
};

export default NavBar;
