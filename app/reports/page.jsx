"use client";

import React from "react";

// Dummy Reports Data for the Month
const reportsData = [
  { 
    id: 1, 
    name: 'Meet', 
    role: 'Full Stack Developer', 
    department: 'Engineering',
    presentDays: 22, 
    absentDays: 0,
    leaveDays: 0,
    overtime: '12h 30m',
    performance: 'Excellent',
    color: 'bg-blue-600' 
  },
  { 
    id: 2, 
    name: 'Yuvraj', 
    role: 'Frontend Developer', 
    department: 'Engineering',
    presentDays: 20, 
    absentDays: 1,
    leaveDays: 1,
    overtime: '5h 0m',
    performance: 'Good',
    color: 'bg-green-600' 
  },
  { 
    id: 3, 
    name: 'Anjali Sharma', 
    role: 'HR Manager', 
    department: 'Human Resources',
    presentDays: 20, 
    absentDays: 0,
    leaveDays: 2,
    overtime: '0h 0m',
    performance: 'Excellent',
    color: 'bg-purple-500' 
  },
  { 
    id: 4, 
    name: 'Rahul Verma', 
    role: 'Backend Developer', 
    department: 'Engineering',
    presentDays: 18, 
    absentDays: 2,
    leaveDays: 2,
    overtime: '8h 15m',
    performance: 'Average',
    color: 'bg-orange-500' 
  },
  { 
    id: 5, 
    name: 'Neha Gupta', 
    role: 'Marketing Lead', 
    department: 'Marketing',
    presentDays: 21, 
    absentDays: 0,
    leaveDays: 1,
    overtime: '2h 45m',
    performance: 'Good',
    color: 'bg-pink-500' 
  },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col h-full w-full gap-6">
      
      {/* 1. Header Section - Side by Side with Export Options */}
      <div className="flex justify-between items-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm w-full">
        
        {/* Left Side: Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Reports & Analytics
            <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full ml-2">
              April 2026
            </span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">Comprehensive monthly performance and attendance reports</p>
        </div>
        
        {/* Right Side: Date Filter & Export Buttons */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
            <span className="material-symbols-outlined text-gray-500 text-sm">calendar_month</span>
            <span className="text-sm font-semibold text-gray-700">This Month</span>
            <span className="material-symbols-outlined text-gray-500 text-sm">arrow_drop_down</span>
          </div>
          
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm text-red-500">picture_as_pdf</span>
            PDF
          </button>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">download</span>
            Export CSV
          </button>
        </div>

      </div>

      {/* 2. Analytics Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-50 rounded-full opacity-50"></div>
          <p className="text-sm font-medium text-gray-500 z-10">Avg. Attendance</p>
          <h3 className="text-2xl font-bold text-gray-800 z-10">94.2%</h3>
          <p className="text-xs font-medium text-green-600 flex items-center gap-1 z-10">
            <span className="material-symbols-outlined text-[14px]">trending_up</span> +1.2%
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-50 rounded-full opacity-50"></div>
          <p className="text-sm font-medium text-gray-500 z-10">Total Overtime</p>
          <h3 className="text-2xl font-bold text-gray-800 z-10">142 Hrs</h3>
          <p className="text-xs font-medium text-gray-500 flex items-center gap-1 z-10">
            Across 15 employees
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-red-50 rounded-full opacity-50"></div>
          <p className="text-sm font-medium text-gray-500 z-10">Total Absences</p>
          <h3 className="text-2xl font-bold text-gray-800 z-10">18 Days</h3>
          <p className="text-xs font-medium text-red-600 flex items-center gap-1 z-10">
            <span className="material-symbols-outlined text-[14px]">trending_down</span> Action required
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-green-50 rounded-full opacity-50"></div>
          <p className="text-sm font-medium text-gray-500 z-10">Approved Leaves</p>
          <h3 className="text-2xl font-bold text-gray-800 z-10">34 Days</h3>
          <p className="text-xs font-medium text-green-600 flex items-center gap-1 z-10">
            <span className="material-symbols-outlined text-[14px]">check_circle</span> All processed
          </p>
        </div>

      </div>

      {/* 3. Comprehensive Report Table */}
      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
        
        {/* Table Toolbar / Search */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 w-64 bg-white focus-within:border-blue-400 transition shadow-sm">
            <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Search reports..." 
              className="text-sm text-gray-700 outline-none bg-transparent w-full"
            />
          </div>
          
          <div className="flex gap-2">
            <button className="text-sm font-semibold text-gray-600 border border-gray-200 bg-white px-3 py-1.5 rounded-lg hover:bg-gray-50 transition flex items-center gap-1">
              Department <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-gray-500 font-semibold border-b border-gray-200 uppercase text-[11px] tracking-wider">
              <tr>
                <th className="px-6 py-4">Employee Details</th>
                <th className="px-6 py-4 text-center">Present</th>
                <th className="px-6 py-4 text-center">Absent</th>
                <th className="px-6 py-4 text-center">Leaves</th>
                <th className="px-6 py-4">Overtime</th>
                <th className="px-6 py-4">Performance</th>
                <th className="px-6 py-4 text-center">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {reportsData.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50/80 transition">
                  
                  {/* Employee Info */}
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm ${report.color}`}>
                      {report.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{report.name}</p>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wide">{report.department}</p>
                    </div>
                  </td>
                  
                  {/* Present Days */}
                  <td className="px-6 py-4 text-center">
                    <span className="font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-md border border-gray-200">
                      {report.presentDays}
                    </span>
                  </td>

                  {/* Absent Days */}
                  <td className="px-6 py-4 text-center">
                    <span className={`font-bold px-3 py-1 rounded-md border ${report.absentDays > 0 ? 'bg-red-50 text-red-600 border-red-100' : 'bg-gray-50 text-gray-400 border-gray-100'}`}>
                      {report.absentDays}
                    </span>
                  </td>

                  {/* Leave Days */}
                  <td className="px-6 py-4 text-center">
                    <span className={`font-bold px-3 py-1 rounded-md border ${report.leaveDays > 0 ? 'bg-yellow-50 text-yellow-600 border-yellow-100' : 'bg-gray-50 text-gray-400 border-gray-100'}`}>
                      {report.leaveDays}
                    </span>
                  </td>

                  {/* Overtime */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-indigo-400">more_time</span>
                      <span className="font-semibold text-gray-700">{report.overtime}</span>
                    </div>
                  </td>

                  {/* Performance Badge */}
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border flex items-center w-max gap-1 ${
                      report.performance === 'Excellent' ? 'bg-green-50 text-green-700 border-green-200' : 
                      report.performance === 'Good' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                      'bg-orange-50 text-orange-700 border-orange-200'
                    }`}>
                      <span className="material-symbols-outlined text-[14px]">
                        {report.performance === 'Excellent' ? 'star' : 
                         report.performance === 'Good' ? 'thumb_up' : 'trending_flat'}
                      </span>
                      {report.performance}
                    </span>
                  </td>

                  {/* View Full Report Button */}
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-400 hover:text-blue-600 hover:bg-blue-50 w-8 h-8 rounded-lg flex items-center justify-center transition mx-auto border border-transparent hover:border-blue-200" title="View Full Report">
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </button>
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
