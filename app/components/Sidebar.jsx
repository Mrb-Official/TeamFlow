import React from 'react'
import Image from "next/image";


function Sidebar()  {
  return (
    <div className="flex flex-col h-full items-start   bg-white
    border-gray-100 ">
        <h1 className="font-bold text-2xl border border-gray-100 p-3
        w-full flex  ">
          <Image 
  src="/Team_Logo.png" 
  alt="Employee Profile" 
  width={32} 
  height={32} 
  className="rounded-full object-cover" 
/>Team<span className=" text-blue-500 ">Flow</span></h1>
        
      <div className="p-4  w-full ">
        <a href="#" className="focus:border-none   focus:bg-blue-100
        w-full p-3 rounded-[6px] focus:outline-none "><span className="material-symbols-outlined
        ">dashboard_2</span>Desboard</a>    
        <a href="#" className="focus:border-none   focus:bg-blue-100
        w-full p-3 rounded-[6px] "><span className="material-symbols-outlined">group</span>Employes</a>    
        <a href="#" className="focus:border-none   focus:bg-blue-100
        w-full p-3 rounded-[6px] "><span className="material-symbols-outlined">event_note</span>Attandance</a>    
        <a href="#" className="focus:border-none   focus:bg-blue-100
        w-full p-3 rounded-[6px] "><span className="material-symbols-outlined">location_away</span>Leaves</a>    
        <a href="#" className="focus:border-none   focus:bg-blue-100
        w-full p-3 rounded-[6px] "><span className="material-symbols-outlined">local_atm</span>payroll</a>    
        <a href="#" className="focus:border-none   focus:bg-blue-100
        w-full p-3 rounded-[6px] "><span className="material-symbols-outlined">analytics</span>reports</a>    
        <a href="#" className="focus:border-none   focus:bg-blue-100
        w-full p-3 rounded-[6px] "><span className="material-symbols-outlined">settings</span>setting</a>    
    </div>
    
 </div>    
  )
}
export default Sidebar;
