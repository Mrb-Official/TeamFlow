"use client";

import React from "react";

// Dummy Leaves Data
const leavesData = [
  { 
    id: 1, 
    name: 'Anjali Sharma', 
    role: 'HR Manager', 
    department: 'Human Resources',
    leaveType: 'Sick Leave', 
    duration: '14 Apr - 15 Apr', 
    days: 2, 
    reason: 'Viral fever and weakness',
    status: 'Pending', 
    color: 'bg-purple-500' 
  },
  { 
    id: 2, 
    name: 'Meet', 
    role: 'Full Stack Developer', 
    department: 'Engineering',
    leaveType: 'Paid Leave', 
    duration: '20 Apr - 25 Apr', 
    days: 6, 
    reason: 'Family trip',
    status: 'Approved', 
    color: 'bg-blue-600' 
  },
  { 
    id: 3, 
    name: 'Yuvraj', 
    role: 'Frontend Developer', 
    department: 'Engineering',
    leaveType: 'Casual Leave', 
    duration: '10 Apr', 
    days: 1, 
    reason: 'Bank and personal work',
    status: 'Approved', 
    color: 'bg-green-600' 
  },
  { 
    id: 4, 
    name: 'Rahul Verma', 
    role: 'Backend Developer', 
    department: 'Engineering',
    leaveType: 'Half Day', 
    duration: '05 Apr', 
    days: 0.5, 
    reason: 'Doctor appointment',
    status: 'Rejected', 
    color: 'bg-orange-500' 
  },
  { 
    id: 5, 
    name: 'Neha Gupta', 
    role: 'Marketing Lead', 
    department: 'Marketing',
    leaveType: 'Sick Leave', 
    duration: '08 Apr - 10 Apr', 
    days: 3, 
    reason: 'Food poisoning',
    status: 'Pending', 
    color: 'bg-pink-500' 
  },
];

export default function LeavesMonthPage() {
  return (
    <div className="flex flex-col h-full w-full gap-6">
      
      {/* 1. Header Section - Aamne-Saamne (Side by Side) */}
      <div className="flex justify-between items-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm w-full">
        
        {/* Left Side: Title & Back Button */}
        <div>
          <div className="flex items-center gap-1 text-sm text-blue-600 font-semibold mb-1 cursor-pointer hover:underline">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Dashboard
          </div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Leave Requests
            <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full ml-2">
              2 Pending
            </span>
          </h1>
        </div>
        
        {/* Right Side: Search Bar & Action Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus-within:bg-white focus-within:border-blue-400 transition w-64">
            <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Search employee..." 
              className="text-sm text-gray-700 outline-none bg-transparent w-full"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">add</span>
            Apply Leave
          </button>
        </div>

      </div>

      {/* 2. Leaves Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">2 Requests</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center border border-yellow-100">
            <span className="material-symbols-outlined text-yellow-600 text-2xl">hourglass_empty</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Approved This Month</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">15 Days</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
            <span className="material-symbols-outlined text-green-600 text-2xl">event_available</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Rejected Requests</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">1 Request</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
            <span className="material-symbols-outlined text-red-600 text-2xl">event_busy</span>
          </div>
        </div>
      </div>

      {/* 3. Leave Requests Table */}
      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-100 uppercase text-[11px] tracking-wider">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Leave Type & Reason</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {leavesData.map((leave) => (
                <tr key={leave.id} className="hover:bg-gray-50/50 transition">
                  
                  {/* Employee Info */}
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm ${leave.color}`}>
                      {leave.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{leave.name}</p>
                      <p className="text-xs text-gray-500">{leave.role}</p>
                    </div>
                  </td>
                  
                  {/* Leave Type & Reason */}
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-800">{leave.leaveType}</p>
                    <p className="text-xs text-gray-500 truncate w-48" title={leave.reason}>{leave.reason}</p>
                  </td>

                  {/* Duration & Days */}
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800">{leave.duration}</span>
                      <span className="text-xs text-gray-500 mt-0.5">{leave.days} {leave.days === 1 ? 'Day' : 'Days'}</span>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border flex items-center w-max gap-1 ${
                      leave.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 
                      leave.status === 'Approved' ? 'bg-green-50 text-green-700 border-green-200' : 
                      'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      <span className="material-symbols-outlined text-[14px]">
                        {leave.status === 'Pending' ? 'hourglass_empty' : 
                         leave.status === 'Approved' ? 'check_circle' : 'cancel'}
                      </span>
                      {leave.status}
                    </span>
                  </td>

                  {/* Action Buttons (Only show buttons if Pending) */}
                  <td className="px-6 py-4 text-center">
                    {leave.status === 'Pending' ? (
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-8 h-8 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 transition flex items-center justify-center border border-green-200" title="Approve">
                          <span className="material-symbols-outlined text-[18px]">done</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition flex items-center justify-center border border-red-200" title="Reject">
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-lg">
                        Processed
                      </span>
                    )}
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
