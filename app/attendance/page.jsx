import React from "react";

// Dummy Attendance Data (Aaj ki date ke hisaab se)
const attendanceLogs = [
  { 
    id: 1, 
    name: 'Meet', 
    role: 'Full Stack Developer', 
    date: '03 Apr 2026', 
    checkIn: '08:50 AM', 
    checkOut: '06:30 PM', 
    hours: '9h 40m', 
    status: 'Present', 
    color: 'bg-blue-600' 
  },
  { 
    id: 2, 
    name: 'Yuvraj', 
    role: 'Frontend Developer', 
    date: '03 Apr 2026', 
    checkIn: '10:15 AM', 
    checkOut: '07:00 PM', 
    hours: '8h 45m', 
    status: 'Late', 
    color: 'bg-green-600' 
  },
  { 
    id: 3, 
    name: 'Anjali Sharma', 
    role: 'HR Manager', 
    date: '03 Apr 2026', 
    checkIn: '-', 
    checkOut: '-', 
    hours: '0h 0m', 
    status: 'Absent', 
    color: 'bg-purple-500' 
  },
  { 
    id: 4, 
    name: 'Rahul Verma', 
    role: 'Backend Developer', 
    date: '03 Apr 2026', 
    checkIn: '09:00 AM', 
    checkOut: '02:00 PM', 
    hours: '5h 0m', 
    status: 'Half Day', 
    color: 'bg-orange-500' 
  },
  { 
    id: 5, 
    name: 'Saira Khan', 
    role: 'UI/UX Designer', 
    date: '03 Apr 2026', 
    checkIn: '09:15 AM', 
    checkOut: '06:15 PM', 
    hours: '9h 0m', 
    status: 'Present', 
    color: 'bg-red-500' 
  },
];

export default function AttendancePage() {
  return (
    <div className="flex flex-col h-full w-full gap-6">
      
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

      {/* 2. Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-500">Total Employees</p>
            <span className="material-symbols-outlined text-blue-500 bg-blue-50 p-1 rounded-md text-sm">group</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">89</h3>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-500">Present Today</p>
            <span className="material-symbols-outlined text-green-500 bg-green-50 p-1 rounded-md text-sm">how_to_reg</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">75</h3>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-500">Late Arrivals</p>
            <span className="material-symbols-outlined text-yellow-500 bg-yellow-50 p-1 rounded-md text-sm">schedule</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">5</h3>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-500">Absent</p>
            <span className="material-symbols-outlined text-red-500 bg-red-50 p-1 rounded-md text-sm">person_off</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">9</h3>
        </div>
      </div>

      {/* 3. Attendance Logs Table */}
      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
        
        {/* Table Search & Filter */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 w-64 bg-gray-50 focus-within:bg-white focus-within:border-blue-400 transition">
            <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="text-sm text-gray-700 outline-none bg-transparent w-full"
            />
          </div>
          <button className="text-sm font-semibold text-gray-600 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">filter_alt</span>
            Filters
          </button>
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 font-semibold border-b border-gray-100 uppercase text-[11px] tracking-wider">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Check In</th>
                <th className="px-6 py-4">Check Out</th>
                <th className="px-6 py-4">Work Hours</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {attendanceLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50/50 transition">
                  
                  {/* Employee Info */}
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm ${log.color}`}>
                      {log.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{log.name}</p>
                      <p className="text-xs text-gray-500">{log.role}</p>
                    </div>
                  </td>
                  
                  {/* Date */}
                  <td className="px-6 py-4 text-gray-600 font-medium">
                    {log.date}
                  </td>

                  {/* Check In */}
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-800">{log.checkIn}</span>
                  </td>

                  {/* Check Out */}
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-800">{log.checkOut}</span>
                  </td>

                  {/* Work Hours */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-gray-400">schedule</span>
                      <span className="font-semibold text-gray-700">{log.hours}</span>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border flex items-center w-max gap-1 ${
                      log.status === 'Present' ? 'bg-green-50 text-green-700 border-green-200' : 
                      log.status === 'Late' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 
                      log.status === 'Half Day' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                      'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      {/* Dynamic Icon inside Badge */}
                      <span className="material-symbols-outlined text-[14px]">
                        {log.status === 'Present' ? 'check_circle' : 
                         log.status === 'Late' ? 'warning' : 
                         log.status === 'Half Day' ? 'timelapse' : 'cancel'}
                      </span>
                      {log.status}
                    </span>
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