import React from 'react'
import {HiMoon,HiOutlineMoon} from 'react-icons/hi'

const Header = () => {
 
  
    return (
        <>
           <header className="header">
           <div className="logo"><h1>Where in the world?</h1></div>
               <button className="mode" id="moon">
               <HiMoon /><div className="space"></div><p className="toggle">Dark Mode</p>
               </button>
           </header> 
        </>
    )
}

export default Header
