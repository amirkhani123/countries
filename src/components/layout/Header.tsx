"use client"
import { useState } from "react";
import {  FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

function Header() {
    const [isDark,setIsDark]=useState(false)
  return (
   <header className=" m-0  border-b-2  dark:border-b-gray-950 dark:bg-gray-800 ">
    <div className="max-w-[1300px] m-auto flex items-center justify-between p-1 h-[65px]">
    <h2 className=" text-xl font-normal dark:text-white">Where in the world ?</h2>
    <button className="flex gap-1 dark:text-white" onClick={()=>{setIsDark(!isDark)
        document.documentElement.classList.toggle("dark")
    }}>
        <span className="mt-1 dark:mt-0">
        {isDark ?<IoSunnyOutline size={25} /> :<FaRegMoon  /> }
        </span>
        {isDark ?"Ligth Mode" :" Dark Mode" }
   
       
    </button>
    </div>
   </header>
  )
}

export default Header