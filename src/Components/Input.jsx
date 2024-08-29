import React from 'react'

const Input = (props) => {

  const handleChange = (e) => {
    if (props.type === 'file') {
      props.setValue(e.target.files[0]);
    } else {
      props.setValue(e.target.value);
    }
  };

  return (
    <div className='flex flex-col item-end m-2 gap-1 mt-3'>
      <label>{props.info}</label>
      <input type={props.type} value={props.type !== 'file' ? props.value : undefined} onChange={handleChange} placeholder={props.placeholder} accept={props.accept} className='border-2 border-black p-1 pl-2 text-md ' />
    </div>
  )
}

export default Input
