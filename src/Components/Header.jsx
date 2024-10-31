import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import { ApiInfo } from '../APIS/Context'
import MyStocks from './MyStocks'
import SideBar from './SideBar'

export default function Header() {
  const{value,setValue,mockCompanyDetails,showSidebar,companyProfile,setCompanyProfile,watchList,setWatchList} = useContext(ApiInfo)

  
  return (
    <div>
      <div className=' p-3 bg-my-Charcoal flex flex-col m-3 relative bg-opacity-35 rounded-xl backdrop-blur-3xl '>
          <div className='flex items-center w-full justify-between'>
            <h1 className='text-lg text-my-green-light'>
                {companyProfile.name || "Unavailable"} 
            </h1>
            <i class="fa-regular fa-eye text-slate-400" onClick={()=>{
              if (!watchList.includes(companyProfile.ticker)){
                setWatchList(prevData=>[...prevData,companyProfile.ticker])
                console.log(watchList)
              }
              
            }}></i>

          </div>

         <div className='flex justify-around items-center gap-6'>
            <Search/>
         </div>
         {showSidebar && <SideBar/>}

         <MyStocks/>


         
      </div>
    </div>

  )
}
