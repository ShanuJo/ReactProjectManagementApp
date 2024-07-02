import { data } from 'autoprefixer'
import React from 'react'
import Task from './Task';

export default function ProjectDetails({ project, onClearHandle, onAddTask, onDeleteTask, tasks }) {
  const formattedDate = new Date(project.deuDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });



  return (
    <div className='p-8 w-3/4'>
      <section className='flex flex-row justify-between '>
        <h1 className='my-2 text-3xl font-bold'>{project.title}</h1>
        <button onClick={onClearHandle} className='text-stone-800 mx-3'>Clear</button>
      </section>
      <section className='mb-3 pb-3 border-b-2'>
        <p className='text-md text-gray-400'>{formattedDate}</p>
        <p className='text-md text-gray-700 whitespace-pre-wrap'>{project.description}</p>
      </section>
      <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  )
}
