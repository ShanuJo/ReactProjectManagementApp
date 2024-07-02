import React, { useState } from 'react'

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleTaskChange(event){
        setEnteredTask(event.target.value);
    }
    function handleAddTask(){
        if(enteredTask.trim()=== ''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }
  return (
    <div className='flex items-center gap-4'>
       
       <input placeholder='add new task here' 
       type='text' 
       onChange={handleTaskChange}
       value={enteredTask}
       className='text-md bg-gray-300 p-1 rounded-sm border-indigo-600' />
       <button onClick={handleAddTask} className='text-stone-800 mx-3'>Add Task</button>
    </div>
  )
}
