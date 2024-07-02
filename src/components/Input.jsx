import React, { forwardRef } from 'react'

const Input = forwardRef(function Input({label, textarea, ...props},ref) {
    const inputStyle= 'bg-stone-200 p-1 text-gray-500 rounded-sm';
  return (
    <p className='flex flex-col my-5'>
      <label className='font-bold text-sm uppercase text-stone-500'>{label}</label>
      {textarea ? <textarea ref={ref} {...props} className={inputStyle} /> : <input ref={ref} {...props} className={inputStyle} />}
    </p>
  )
})

export default Input;