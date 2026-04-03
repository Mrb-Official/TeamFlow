import React from 'react'
import EmployeeTable from './components/EmployeeTable.jsx';
function Boxes () {
  return(
<>
  <div className="flex flex-col">


    {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Daily Attendance</h1>
          <p className="text-sm text-gray-500 mt-1">Track employee check-ins, check-outs, and total hours</p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Date Picker */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
            <span className="material-symbols-outlined text-gray-500 text-sm">calendar_month</span>
            <span className="text-sm font-medium text-gray-700">Today, 03 Apr</span>
            <span className="material-symbols-outlined text-gray-500 text-sm ml-2">expand_more</span>
          </div>
          {/* Export Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">download</span>
            Export CSV
          </button>
        </div>
      </div>

        <div className="flex gap-10 mt-5">

          <div className=" flex flex-col h-25 w-50 bg-blue-100 rounded-xl p-5 shadow-sm ">
            <h3 className="font-bold ">Total Employees</h3>
            <div className="flex justify-between ">
              <h3 className="font-bold">(89)</h3>
              
              <span className="material-symbols-outlined">group</span>
          
              </div>
              </div>
              
              {/*!second box */}
              
          <div className=" flex flex-col h-25 w-50 bg-green-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold ">Present Today</h3>
            <div className="flex justify-between ">
              <h3 className="font-bold">(80)</h3>
              
              <span className="material-symbols-outlined">calendar_check</span>
          
              </div>
          </div>
          
          
                        {/*!third box */}
              
       <div className=" flex flex-col h-25 w-50 bg-yellow-100 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold ">On Leave</h3>
            <div className="flex justify-between ">
              <h3 className="font-bold">(9)</h3>
              
              <span className="material-symbols-outlined">assignment_late</span>
          
              </div>
          </div>
          
          
            {/*!fourth box */}
              
          <div className=" flex flex-col h-25 w-50 bg-red-100 rounded-xl p-5 shadow-sm ">
            <h3 className="font-bold ">Late</h3>
            <div className="flex justify-between ">
              <h3 className="font-bold">(1)</h3>
              
              <span className="material-symbols-outlined">schedule</span>
          
              </div>
          </div>
          </div>
          
        <div className="mt-10">
        <EmployeeTable />
        </div>
 </div>
 
</>
    )
}
  export default Boxes;