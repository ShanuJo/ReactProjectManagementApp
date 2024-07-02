import React from 'react';
import noProject from '../assets/no-projects.png';


export default function Dashboard({onClickHandle}) {
  return (
    <div className='flex flex-col py-12 w-2/3 justify-items-center items-center'>
      <img src={noProject} alt="No Project logo" className='w-28 h-32 object-contain ' />
      <h4 className='font-bold text-2xl text-gray-600 my-3'>No Project selected</h4>
      <p className='text-md text-gray-400'>Select a project or get started with a new one</p>
      <button onClick={onClickHandle}
      className='text-grey text-stone-400 text-l bg-stone-800 rounded-lg my-5 px-4 py-2'
      >
        Create new project</button>
    </div>
  )
}
