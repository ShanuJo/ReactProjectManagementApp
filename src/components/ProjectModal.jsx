import React, { useRef } from 'react'
import Input from './Input'

export default function ProjectModal({onAdd, handleCancel}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleClick(){
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dateRef.current.value;

    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '' ){
      alert('Enter valid data in each field!');

    } else {

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }
}

  return (
    <div className='w-[35rem] m-16'>
      <section className='flex justify-end'>
        <button className='text-stone-800 mx-3' onClick={handleCancel}>Cancel</button>
        <button onClick={handleClick}
        className='text-white text-l bg-stone-800 rounded-lg my-5 px-4 py-2'>Save</button>
      </section>
      <section >
        <Input type="text" ref={titleRef} label="Title" placeholder="Project-Title"/>
        <Input ref={descriptionRef} label="Description" textarea placeholder="description" />
        <Input type="date" ref={dateRef} label="Due-date" placeholder="dd.mm.yyyy"/>
      </section>
    </div>
  )
}
