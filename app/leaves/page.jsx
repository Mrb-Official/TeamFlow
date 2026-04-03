import React from "react";

// Dummy Leave Requests Data
const leaveRequests = [
  { 
    id: 1, 
    name: 'Anjali Sharma', 
    role: 'HR Manager', 
    type: 'Sick Leave', 
    duration: '28 Mar - 29 Mar', 
    days: 2, 
    reason: 'Suffering from viral fever',
    status: 'Pending', 
    color: 'bg-purple-500' 
  },
  { 
    id: 2, 
    name: 'Meet', 
    role: 'Full Stack Developer', 
    type: 'Paid Leave', 
    duration: '10 Apr - 15 Apr', 
    days: 6, 
    reason: 'Family trip to Rajasthan',
    status: 'Pending', 
    color: 'bg-blue-600' 
  },
  { 
    id: 3, 
    name: 'Rahul Verma', 
    role: 'Backend Developer', 
    type: 'Casual Leave', 
    duration: '01 Apr - 03 Apr', 
    days: 3, 
    reason: 'Personal work at home',
    status: 'Approved', 
    color: 'bg-orange-500' 
  },
  { 
    id: 4, 
    name: 'Yuvraj', 
    role: 'Frontend Developer', 
    type: 'Half Day', 
    duration: '25 Mar', 
    days: 0.5, 
    reason: 'Bank work in the afternoon',
    status: 'Approved', 
    color: 'bg-green-600' 
  },
  { 
    id: 5, 
    name: 'Saira Khan', 
    role: 'UI/UX Designer', 
    type: 'Casual Leave', 
    duration: '15 Mar', 
    days: 1, 
    reason: 'Attending a wedding',
    status: 'Rejected', 
    color: 'bg-red-500' 
  },
];

export default function LeavesPage() {
  return (
    <div className="flex flex-col h-full w-full gap-6">
      
      {/* 1. Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Leave Management</h1>
          <p className="text-sm text-gray-500 mt-1">Review and manage employee leave requests</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filter
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">add_circle</span>
            Apply Leave
          </button>
        </div>
      </div>

      {/* 2. Quick Stats / Alert Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-l-4 border-l-yellow-400 border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
            <span className="material-symbols-outlined text-yellow-600 text-2xl">pending_actions</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
            <h3 className="text-xl font-bold text-gray-800">2 Requests</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-l-4 border-l-green-400 border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
            <span className="material-symbols-outlined text-green-600 text-2xl">event_available</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Approved This Month</p>
            <h3 className="text-xl font-bold text-gray-800">12 Days</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-l-4 border-l-blue-400 border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
            <span className="material-symbols-outlined text-blue-600 text-2xl">work_history</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Employees on Leave</p>
            <h3 className="text-xl font-bold text-gray-800">0 Today</h3>
          </div>
        </div>
      </div>

      {/* 3. Leave Requests Table */}
      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="p-5 border-b border-gray-100 flex gap-4 bg-gray-50/50">
          <button className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-1">All Requests</button>
          <button className="text-sm font-medium text-gray-500 hover:text-gray-800 pb-1">Pending</button>
          <button className="text-sm font-medium text-gray-500 hover:text-gray-800 pb-1">Approved</button>
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-gray-500 font-semibold border-b border-gray-100 uppercase text-[11px] tracking-wider">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Leave Type & Reason</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {leaveRequests.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50/50 transition">
                  
                  {/* Employee Info */}
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm ${req.color}`}>
                      {req.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{req.name}</p>
                      <p className="text-xs text-gray-500">{req.role}</p>
                    </div>
                  </td>
                  
                  {/* Leave Type & Reason */}
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-800">{req.type}</p>
                    <p className="text-xs text-gray-500 truncate w-48" title={req.reason}>{req.reason}</p>
                  </td>

                  {/* Duration */}
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">{req.duration}</p>
                    <p className="text-xs text-gray-500">{req.days} {req.days === 1 ? 'Day' : 'Days'}</p>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
                      req.status === 'Pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 
                      req.status === 'Approved' ? 'bg-green-50 text-green-700 border-green-200' : 
                      'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      {req.status}
                    </span>
                  </td>

                  {/* Actions (Approve / Reject Buttons) */}
                  <td className="px-6 py-4 text-center">
                    {req.status === 'Pending' ? (
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-8 h-8 rounded-full bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 transition flex items-center justify-center border border-green-200" title="Approve">
                          <span className="material-symbols-outlined text-[18px]">check</span>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition flex items-center justify-center border border-red-200" title="Reject">
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-xs font-medium">Action Taken</span>
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