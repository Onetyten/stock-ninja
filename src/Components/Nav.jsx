import React, { useContext } from 'react'
import Logo from './Logo.png'
import NavIcons from './NavIcons'
import { ApiInfo } from '../APIS/Context'

export default function () {
  const {handleShowSideBar,showSidebar,setShowSidebar} = useContext(ApiInfo)
  return (
    <div className='bg-my-Charcoal w-full h-full rounded-b-xl border-2 border-t-0 border-my-Dark-teal'>
        <div className='flex justify-between px-2 w-full h-full items-center'>
            <div>
                <img src={Logo} alt="" className='w-10 h-10 rounded-full' />
            </div>

            <i class="fa-solid fa-bars text-white text-xl pr-3 " onClick={handleShowSideBar}></i>
            
        </div>

    </div>
  )
}
