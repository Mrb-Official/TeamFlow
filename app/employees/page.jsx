import React from "react";

// Dummy Employees Data (SaaS ke hisaab se)
const employeesList = [
  { 
    id: 1, 
    name: 'Meet', 
    role: 'Full Stack Developer', 
    email: 'meet@teamflow.com', 
    phone: '+91 98765 43210', 
    salary: '₹85,000/mo', 
    status: 'Active', 
    color: 'bg-blue-600' 
  },
  { 
    id: 2, 
    name: 'Yuvraj', 
    role: 'Frontend Developer', 
    email: 'yuvraj@teamflow.com', 
    phone: '+91 98765 43211', 
    salary: '₹75,000/mo', 
    status: 'Active', 
    color: 'bg-green-600' 
  },
  { 
    id: 3, 
    name: 'Jaydip Sharma', 
    role: 'HR Manager', 
    email: 'anjali@teamflow.com', 
    phone: '+91 98765 43212', 
    salary: '₹60,000/mo', 
    status: 'On Leave', 
    color: 'bg-purple-500' 
  },
  { 
    id: 4, 
    name: 'Rahul Verma', 
    role: 'Backend Developer', 
    email: 'rahul@teamflow.com', 
    phone: '+91 98765 43213', 
    salary: '₹80,000/mo', 
    status: 'Active', 
    color: 'bg-orange-500' 
  },
  { 
    id: 5, 
    name: 'Saira Khan', 
    role: 'UI/UX Designer', 
    email: 'saira@teamflow.com', 
    phone: '+91 98765 43214', 
    salary: '₹65,000/mo', 
    status: 'Terminated', 
    color: 'bg-red-500' 
  },
];

export default function EmployeesPage() {
  return (
    <div className="flex flex-col h-full w-full gap-6">
      
      {/* 1. Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Employee Directory</h1>
          <p className="text-sm text-gray-500 mt-1">Manage team members, roles, and salaries</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 w-full md:w-64 bg-gray-50 focus-within:bg-white focus-within:border-blue-400 transition">
            <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Search employees..." 
              className="text-sm text-gray-700 outline-none bg-transparent w-full"
            />
          </div>
          
          {/* Add Employee Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-sm whitespace-nowrap">
            <span className="material-symbols-outlined text-sm">person_add</span>
            Add New
          </button>
        </div>
      </div>

      {/* 2. Employee Cards Grid (SaaS Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto pb-6">
        
        {employeesList.map((emp) => (
          <div key={emp.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition p-5 flex flex-col relative group">
            
            {/* Context Menu Icon (Three dots) */}
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>

            {/* Avatar & Basic Info */}
            <div className="flex flex-col items-center text-center mt-2">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-sm ${emp.color}`}>
                {emp.name.charAt(0)}
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">{emp.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{emp.role}</p>
              
              {/* Status Badge */}
              <span className={`mt-2 px-3 py-1 rounded-full text-xs font-semibold border ${
                emp.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 
                emp.status === 'On Leave' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 
                'bg-red-50 text-red-700 border-red-200'
              }`}>
                {emp.status}
              </span>
            </div>

            {/* Divider */}
            <hr className="my-4 border-gray-100" />

            {/* Contact Details */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                </div>
                <span className="truncate">{emp.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                  <span className="material-symbols-outlined text-[16px]">call</span>
                </div>
                <span>{emp.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                  <span className="material-symbols-outlined text-[16px] text-green-600">payments</span>
                </div>
                <span className="font-semibold text-gray-800">{emp.salary}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 grid grid-cols-2 gap-3 mt-auto pt-2">
              <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[18px]">edit</span> Edit
              </button>
              <button className="px-3 py-2 border border-red-100 bg-red-50 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-100 transition flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[18px]">delete</span> Delete
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}