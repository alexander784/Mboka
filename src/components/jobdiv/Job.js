import React from 'react';
import logo from "../../assets/logo.avif";

const Data = [
  {
    id: 1,
    image: logo,
    title: 'Web developer',
    location: 'Canada',
    desc: 'Lorem ipsum, ',
    company: 'What.CO'
  },
  {
    id: 2,
    image: logo,
    title: 'Lead developer',
    location: 'Australia',
    desc: 'Lorem ipsum, ',
    company: 'Venus.co'
  },
  {
    id: 1,
    image: logo,
    title: 'React developer',
    location:'India',
    desc: 'Lorem ipsum, ',
    company: 'patel.co'
  },
  {
    id: 1,
    image: logo,
    title: 'Python developer',
    location: 'Newyork',
    desc: 'Lorem ipsum, ',
    company: 'Asus.CO'
  },

  {
    id: 1,
    image: logo,
    title: 'Technical lead',
    location: 'Morocco',
    desc: 'Lorem ipsum, ',
    company: 'What.CO'
  },
  {
    id: 1,
    image: logo,
    title: 'UI Degigner',
    location: 'Spain',
    desc: 'Lorem ipsum, ',
    company: 'Liquid.com'
  },

];

const JobDiv = () => {
  return (
    <div>
      <div className='jobcontainer flex gap-10 justify-center flex-wrap items-center py-10'>
        {Data.map((job) => (
          <div key={job.id}
            className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'
          >
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textcolor group-hover:text-white'>{job.title}</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                {/* BiTimeFive */} Now
              </span>
            </span>
            <h6 className='text-[#ccc]'>{job.location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
              {job.desc}
            </p>
            <div className='company flex items-center gap-2'>
              <img src={job.image} alt='Company Logo' className='w-[10%]'/>
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{job.company}</span>
            </div>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textCOlor group-hover:text-white'>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDiv;
