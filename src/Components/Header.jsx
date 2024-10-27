import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import { ApiInfo } from '../APIS/Context'
import MyStocks from './MyStocks'
import SideBar from './SideBar'

export default function Header() {
  const{value,setValue,mockCompanyDetails,showSidebar,companyProfile,setCompanyProfile} = useContext(ApiInfo)

  
  return (
    <div>
      <div className=' p-3 bg-my-Charcoal m-3 relative bg-opacity-35 rounded-xl backdrop-blur-3xl '>
         <h1 className='text-lg text-my-green-light'>
            {companyProfile.name || "Unavailable"}
         </h1>
         <div className='flex justify-around items-center gap-6'>
            <Search/>
         </div>
         {showSidebar && <SideBar/>}

         <MyStocks/>


         
      </div>
    </div>

  )
}
