import React, { Fragment } from 'react'

const Input = ({ name, placeholder, errMessage }) => {
  return (
    <Fragment>
        <input 
        type="text" 
        name={name} 
        placeholder={placeholder} 
        className={'py-6 w-full px-[30px] bg-gray-100 text-[#0B3C49]rounded-[4px] rign-offset-1 focus:ring-4 ring-[#0B3C49]'}
        
        />
        <span className='text-red-400 block mt-[3px] text-[10px] font-regular'>{errMessage}</span>
    </Fragment>
  )
}

export default Input