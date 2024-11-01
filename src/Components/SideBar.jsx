// SideBar.js
import React, { useState } from 'react';
import NavIcons from './NavIcons';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [activeNav, setActiveNav] = useState("Home"); // Track active item

  const handleNavClick = (name) => {
    setActiveNav(name); // Update active state
  };

  return (
    <div className='flex w-full justify-between bg-gray-800 p-9 bg-opacity-45 rounded-3xl'>
      <Link to="/" onClick={() => handleNavClick("Home")}>
        <NavIcons Name="Home" faIcons="fa-solid fa-house" isActive={activeNav === "Home"} />
      </Link>

      <Link to="/Analytics" onClick={() => handleNavClick("Analytics")}>
        <NavIcons Name="Analytics" faIcons="fa-solid fa-chart-line" isActive={activeNav === "Analytics"} />
      </Link>

      <Link to="/News" onClick={() => handleNavClick("News")}>
        <NavIcons Name="News" faIcons="fa-regular fa-newspaper" isActive={activeNav === "News"} />
      </Link>
    </div>
  );
}
