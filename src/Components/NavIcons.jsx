// NavIcons.js
import React from 'react';

export default function NavIcons(props) {
  const { Name, faIcons, isActive } = props;

  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <div>
        <i
          className={`${faIcons} text-white hover:bg-lime-400 active:bg-lime-400 text-lg p-3 px-4 rounded-full ${
            isActive ? "bg-lime-400" : "bg-gray-600"
          }`}
        ></i>
      </div>
      <p className='text-sm md:text-lg text-white'>{Name}</p>
    </div>
  );
}
