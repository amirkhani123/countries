"use client"
import { useRouter } from 'next/navigation'
import { IoArrowBackOutline } from 'react-icons/io5'

function Button() {
    const router=useRouter()
  return (
    <div className="flex items-center ml-5 gap-1 rounded-md font-extralight w-fit p-1 px-4 shadow-3xl mb-[50px] cursor-pointer my-hover hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black" onClick={():void=>router.back()} >
    <IoArrowBackOutline />
        <span>Back</span>
    </div>
  )
}

export default Button