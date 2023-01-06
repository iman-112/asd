import React from 'react'

const Input = (props) => {
    const { errorMessage, touched, placeholder, ...inputProps } = props;
  return (
    <div className='w-full ' id='contact'>
        <label className='relative block cursor-text w-full'>
            <input type="text" className={`h-14 w-full  border-2 outline-none rounded-md px-4 peer pt-2 
            ${touched&& errorMessage ? "border-danger" : "border-primary"}
            `}
            
            
            required 
            {...inputProps}
        />
            <span className='absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs transition-all  peer-valid:h-7 peer-valid:text-xs ' >
                {placeholder}
            </span>
            {touched &&  <span className='text-[10px] font-semibold text-start text-danger'>{errorMessage}</span> }
        </label>
    </div>
  )
}

export default Input