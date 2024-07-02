import React from 'react'

export default function Sidebar({ onClickHandle, project, onSelectProject, selectedProjectId }) {
  return (
    <aside className='w-1/3 bg-slate-900 text-stone-50 min-w-52 rounded-tr-xl px-8 py-16 md:w-72'>
      <h2 className='text-stone-200 font-bold uppercase md:text-xl'>Your Project</h2>
      <button onClick={onClickHandle}
        className='text-grey text-stone-400 text-l bg-stone-700 rounded-lg my-5 px-4 py-2 hover:bg-stone-600 hover:text-stone-100'>+ Add Project</button>
      <ul>
        {project.map((project) => {
          let cssClassName = "w-full text-left px-2 py-1 rounded-sm my-1 font-semibold hover:text-stone-200 hover:bg-slate-800";

          if(project.id === selectedProjectId){
            cssClassName += ' text-stone-200 bg-slate-800';
          } else {
            cssClassName += ' text-stone-400';
          }
          return(
            <li key={project.id}>
            <button onClick={()=>onSelectProject(project.id)}
              className={cssClassName}>
              {project.title}
            </button>
          </li>
          );
        })}
      </ul>
    </aside>
  )
}
