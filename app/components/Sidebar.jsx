import React from 'react'

function Sidebar()  {
  return (
    <div className="flex flex-col mt-5 ml-5 h-100vh border-none rounded-xl items-start p-10  w-50 bg-white ">
        <h1 className="font-bold text-2xl mb-20">Team<span className=" text-blue-500 ">Flow</span></h1>
        <a href="#"><span className="material-symbols-outlined ">dashboard_2</span>Desboard</a>    
        <a href="#"><span className="material-symbols-outlined">group</span>Employes</a>    
        <a href="#"><span className="material-symbols-outlined">event_note</span>Attandance</a>    
        <a href="#"><span className="material-symbols-outlined">location_away</span>Leaves</a>    
        <a href="#"><span className="material-symbols-outlined">local_atm</span>payroll</a>    
        <a href="#"><span className="material-symbols-outlined">analytics</span>reports</a>    
        <a href="#"><span className="material-symbols-outlined">settings</span>setting</a>    

    </div>    
  )
}
export default Sidebar;
