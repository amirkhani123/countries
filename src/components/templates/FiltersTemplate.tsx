"use client"
import { Iquery } from "@/utils/interfaces";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
interface IfilterTemplate{
  query:Iquery;

  setQuery:React.Dispatch<React.SetStateAction<Iquery>>;
}
function FiltersTemplate({query,setQuery}:IfilterTemplate) {
  const changeHandler=(e: React.ChangeEvent<HTMLInputElement> )=>{
    setQuery(query=>({...query,[e.target.name]:e.target.value}))
  }
  const  clickHandler=(name:string)=>{
    setQuery(query=>({...query,region:name}))
  }
  return (
    <div className="w-full flex items-center justify-between mb-6 font-light  dark:text-white ">
     <div className="flex w-[400px] shadow-lg bg-white rounded-lg p-2 h-[50px] dark:bg-gray-800 text-gray-600  dark:text-white">
     <IoSearch size={25}/>
      <input type="text" name="name" onChange={changeHandler} value={query.name} placeholder="Search for a country ..." className="bg-transparent outline-none border-none w-full p-1 text-md  ml-3 "/>
     </div>
     <div>
  <details className="relative shadow-lg bg-white  text-center rounded-lg p-2 w-[230px] h-[50px] dark:bg-gray-800 text-gray-800  dark:text-white " >
    <summary dir="rtl" className="cursor-pointer" >Filter By Region</summary>
    <ul  className=" absolute top-11 left-0 shadow-2xl w-full bg-white rounded-lg  dark:text-white dark:bg-gray-800">
      <li className="classes-li"  onClick={()=>clickHandler("All")} >All</li>
      <li className="classes-li"  onClick={()=>clickHandler("Africa")} >Africa</li>
      <li className="classes-li" onClick={()=>clickHandler("Americas")} >Americas</li>
      <li className="classes-li" onClick={()=>clickHandler("Asia")} >Asia</li>
      <li className="classes-li" onClick={()=>clickHandler("Europe")} >Europe</li>
      <li className="classes-li" onClick={()=>clickHandler("Oceania")} >Oceania</li>
    </ul>
  </details>
     </div>
    </div>
  )
}

export default FiltersTemplate