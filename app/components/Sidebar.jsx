"use client";

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";


function Sidebar()  {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-screen relative items-start   bg-white
    border-gray-100 ">
        <h1 className="font-bold text-2xl border border-gray-100 p-[15px]
        w-full flex  ">
          <Image 
  src="/Team_Logo.png" 
  alt="Employee Profile" 
  width={32} 
  height={32} 
  className="rounded-full object-cover" 
/>Team<span className=" text-blue-500 ">Flow</span></h1>
        
      <div className="p-4  w-full ">
        
        <Link href="/" className={`flex items-center gap-3 w-full p-3 rounded-[6px] transition-colors outline-none ${pathname === '/' ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`} ><span className="material-symbols-outlined">dashboard_2</span>Desboard</Link>  

        <Link href="/employees" className={`flex items-center gap-3 w-full p-3 rounded-[6px] transition-colors outline-none ${pathname === '/employees' ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`} ><span className="material-symbols-outlined">group</span>Employes</Link>    

        <Link href="/attendance" className={`flex items-center gap-3 w-full p-3
        rounded-[6px] transition-colors outline-none ${pathname ===
        '/attendance' ? 'bg-blue-100 text-blue-600 font-semibold' :
        'text-gray-600 hover:bg-gray-50'}`} ><span
        className="material-symbols-outlined">event_note</span>Attandance</Link>
        

        <Link href="/leaves" className={`flex items-center gap-3 w-full p-3 rounded-[6px] transition-colors outline-none ${pathname === '/leaves' ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`} ><span className="material-symbols-outlined">location_away</span>Leaves</Link>    

        <Link href="/payroll" className={`flex items-center gap-3 w-full p-3 rounded-[6px] transition-colors outline-none ${pathname === '/payroll' ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`} ><span className="material-symbols-outlined">local_atm</span>payroll</Link>    

        <Link href="/reports" className={`flex items-center gap-3 w-full p-3 rounded-[6px] transition-colors outline-none ${pathname === '/reports' ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`} ><span className="material-symbols-outlined">analytics</span>reports</Link>    

        <Link href="/settings" className={`flex items-center gap-3 w-full p-3 rounded-[6px] transition-colors outline-none ${pathname === '/settings' ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`} ><span className="material-symbols-outlined">settings</span>setting</Link>    

    </div>
    
 </div>    
  )
}
export default Sidebar;
