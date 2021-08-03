import React, {useState} from 'react'
import {HiMoon,HiOutlineMoon} from 'react-icons/hi'

const Header = () => {
 const [button, setButton] = useState(false);

 const updateTheme = ()=>{
     if(button===false){
     document.body.classList.replace("dark","light")
     setButton(true)
     } else if(button===true){
        document.body.classList.replace("light","dark")
        setButton(false)
     }
 }
  
    return (
        <>
           <header className="header">
           <div className="logo"><h1>Where in the world?</h1></div>
               <button className="mode" id="moon" onClick={updateTheme}>
               {button?<HiMoon /> : <HiOutlineMoon />}<div className="space"></div><p className="toggle">Dark Mode</p>
               </button>
           </header> 
        </>
    )
}

export default Header
