import React from 'react'
import {HiMoon} from 'react-icons/hi'

const Header = () => {
    return (
        <>
           <header className="header">
           <div className="logo"><h1>Where in the world?</h1></div>
               <div className="mode">
               <HiMoon /><div className="space"></div><p className="toggle">Dark Mode</p>
               </div>
           </header> 
        </>
    )
}

export default Header
