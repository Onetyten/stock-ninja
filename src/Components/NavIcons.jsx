import React from 'react'

export default function NavIcons(props) {
    const{Name,faIcons} = props
  return (
    
    <div className='flex flex-col justify-center items-center'>
        <i className={`${faIcons} text-white text-lg`}></i>
        <p className='text-sm text-white'>{Name}</p>
    </div>
  )
}
