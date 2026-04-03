import React from "react";

// Naya Monthly Data
const monthlyPresentData = [
  { 
    id: 1, 
    name: 'Meet', 
    role: 'Full Stack Developer', 
    department: 'Engineering',
    daysPresent: 22, 
    daysLate: 1,
    avgCheckIn: '08:55 AM',
    color: 'bg-blue-600' 
  },
  { 
    id: 2, 
    name: 'Yuvraj', 
    role: 'Frontend Developer', 
    department: 'Engineering',
    daysPresent: 20, 
    daysLate: 4,
    avgCheckIn: '09:45 AM',
    color: 'bg-green-600' 
  },
  { 
    id: 3, 
    name: 'Anjali Sharma', 
    role: 'HR Manager', 
    department: 'Human Resources',
    daysPresent: 22, 
    daysLate: 0,
    avgCheckIn: '08:50 AM',
    color: 'bg-purple-500' 
  },
  { 
    id: 4, 
    name: 'Rahul Verma', 
    role: 'Backend Developer', 
    department: 'Engineering',
    daysPresent: 18, 
    daysLate: 2,
    avgCheckIn: '09:15 AM',
    color: 'bg-orange-500' 
  },
  { 
    id: 5, 
    name: 'Neha Gupta', 
    role: 'Marketing Lead', 
    department: 'Marketing',
    daysPresent: 21, 
    daysLate: 1,
    avgCheckIn: '09:05 AM',
    color: 'bg-pink-500' 
  },
];

export default function PresentThisMonthPage() {
  return (
    <div className="flex flex-col h-full w-full gap-6">
      
      {/* 1. Header Section - Ab hamesha side-by-side rahega */}
      <div className="flex justify-between items-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm w-full">
        
        {/* Left Side: Title */}
        <div>
          <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-1 cursor-pointer hover:underline">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Dashboard
          </div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Present This Month
            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full ml-2">
              April 2026
            </span>
          </h1>
        </div>
        
        {/* Right Side: Tera Custom Search Bar & Date Picker */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus-within:bg-white focus-within:border-blue-400 transition w-64">
            <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="text-sm text-gray-700 outline-none bg-transparent w-full"
            />
          </div>
          <button className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filter
          </button>
        </div>

      </div>

      {/* 2. Monthly Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Avg. Company Attendance</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">92%</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
            <span className="material-symbols-outlined text-blue-600 text-2xl">insert_chart</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Perfect Attendance</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">45 Emp</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
            <span className="material-symbols-outlined text-green-600 text-2xl">workspace_premium</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">High Late Count</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">8 Emp</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center border border-yellow-100">
            <span className="material-symbols-outlined text-yellow-600 text-2xl">warning</span>
          </div>
        </div>
      </div>

      {/* 3. Monthly Present Table */}
      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
        
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-100 uppercase text-[11px] tracking-wider">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4 text-center">Days Present</th>
                <th className="px-6 py-4 text-center">Days Late</th>
                <th className="px-6 py-4">Avg. Check-In</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {monthlyPresentData.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50/50 transition">
                  
                  {/* Employee Info */}
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm ${emp.color}`}>
                      {emp.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{emp.name}</p>
                      <p className="text-xs text-gray-500">{emp.role}</p>
                    </div>
                  </td>
                  
                  {/* Department */}
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    {emp.department}
                  </td>

                  {/* Days Present (Out of max working days, e.g., 22) */}
                  <td className="px-6 py-4 text-center">
                    <span className="font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-lg">
                      {emp.daysPresent} <span className="text-gray-400 font-normal text-xs">/ 22</span>
                    </span>
                  </td>

                  {/* Days Late */}
                  <td className="px-6 py-4 text-center">
                    <span className={`font-bold px-3 py-1 rounded-lg ${emp.daysLate > 2 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                      {emp.daysLate}
                    </span>
                  </td>

                  {/* Avg Check In Time */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-gray-400">schedule</span>
                      <span className="font-medium text-gray-700">{emp.avgCheckIn}</span>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      
    </div>
  );
}