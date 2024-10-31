import React from 'react'
import NavIcons from './NavIcons'
import { ApiInfo } from '../APIS/Context'
import {Link} from 'react-router-dom'

export default function SideBar() {

  return (
    <div className='w-3/4 absolute -top-5 bg-my-Charcoal bg-opacity-70 backdrop-blur-3xl h-screen -right-3 flex flex-col gap-5 pt-5 z-30'>
      <Link to="/">
        <NavIcons Name="Home" faIcons = "fa-solid fa-house"/>
      </Link>

      <Link to= "/Analytics">
        <NavIcons Name="Analytics" faIcons = "fa-solid fa-chart-line"/>
      </Link>

      <Link to="/News">
        <NavIcons Name="News" faIcons = "fa-regular fa-newspaper"/>
      </Link>
    </div>
  )
}
