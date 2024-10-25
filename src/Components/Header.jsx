import React, { useContext } from 'react'
import Search from './Search'
import { ApiInfo } from '../APIS/Context'

export default function Header() {
  const{value,setValue,mockCompanyDetails} = useContext(ApiInfo)
  
  return (
    <div className='w-full h-24'>
       <h1 className='text-2xl text-my-green-light'>
          {mockCompanyDetails.name}
       </h1>
       <div className='flex justify-around items-center gap-6'>
          <Search/>
       </div>

      
    </div>
  )
}
