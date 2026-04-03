import React from "react";

// Dummy Payroll Data
const payrollRecords = [
  { 
    id: 1, 
    name: 'Meet', 
    role: 'Full Stack Developer', 
    basic: '₹60,000', 
    allowance: '₹15,000', 
    deduction: '₹2,500', 
    netPay: '₹72,500', 
    status: 'Paid', 
    color: 'bg-blue-600' 
  },
  { 
    id: 2, 
    name: 'Yuvraj', 
    role: 'Frontend Developer', 
    basic: '₹55,000', 
    allowance: '₹12,000', 
    deduction: '₹2,000', 
    netPay: '₹65,000', 
    status: 'Pending', 
    color: 'bg-green-600' 
  },
  { 
    id: 3, 
    name: 'Anjali Sharma', 
    role: 'HR Manager', 
    basic: '₹45,000', 
    allowance: '₹10,000', 
    deduction: '₹1,500', 
    netPay: '₹53,500', 
    status: 'Paid', 
    color: 'bg-purple-500' 
  },
  { 
    id: 4, 
    name: 'Rahul Verma', 
    role: 'Backend Developer', 
    basic: '₹50,000', 
    allowance: '₹10,000', 
    deduction: '₹2,000', 
    netPay: '₹58,000', 
    status: 'Processing', 
    color: 'bg-orange-500' 
  },
  { 
    id: 5, 
    name: 'Saira Khan', 
    role: 'UI/UX Designer', 
    basic: '₹48,000', 
    allowance: '₹8,000', 
    deduction: '₹1,800', 
    netPay: '₹54,200', 
    status: 'Pending', 
    color: 'bg-red-500' 
  },
];

export default function PayrollPage() {
  return (
    <div className="flex flex-col h-full w-full gap-6">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Payroll Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage salaries, taxes, and generate payslips</p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Month Selector */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
            <span className="material-symbols-outlined text-gray-500 text-sm">calendar_today</span>
            <span className="text-sm font-semibold text-gray-700">March 2026</span>
            <span className="material-symbols-outlined text-gray-500 text-sm">arrow_drop_down</span>
          </div>
          
          {/* Run Payroll Button */}
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">payments</span>
            Run Payroll
          </button>
        </div>
      </div>

      {/* 2. Payroll Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full opacity-50"></div>
          <p className="text-sm font-semibold text-gray-500 z-10">Total Estimated Payroll</p>
          <h3 className="text-3xl font-bold text-gray-800 z-10">₹ 4,25,500</h3>
          <p className="text-xs font-medium text-green-600 flex items-center gap-1 z-10">
            <span className="material-symbols-outlined text-[14px]">trending_up</span> +2.4% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-50 rounded-full opacity-50"></div>
          <p className="text-sm font-semibold text-gray-500 z-10">Employees Paid</p>
          <div className="flex items-end gap-2 z-10">
            <h3 className="text-3xl font-bold text-gray-800">42</h3>
            <span className="text-gray-500 font-medium pb-1">/ 89</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1 z-10">
            <div className="bg-green-500 h-1.5 rounded-full w-[47%]"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-50 rounded-full opacity-50"></div>
          <p className="text-sm font-semibold text-gray-500 z-10">Pending Clearance</p>
          <h3 className="text-3xl font-bold text-gray-800 z-10">₹ 1,85,000</h3>
          <p className="text-xs font-medium text-yellow-600 flex items-center gap-1 z-10">
            <span className="material-symbols-outlined text-[14px]">info</span> Awaiting admin approval
          </p>
        </div>

      </div>

      {/* 3. Salary Table Section */}
      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
        
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-lg font-bold text-gray-800">Employee Salary Details</h2>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 bg-white">
            <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Search employee..." 
              className="text-sm text-gray-700 outline-none w-48"
            />
          </div>
        </div>

        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-gray-500 font-semibold border-b border-gray-100 uppercase text-[11px] tracking-wider">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Basic Pay</th>
                <th className="px-6 py-4">Allowances</th>
                <th className="px-6 py-4">Deductions</th>
                <th className="px-6 py-4 font-bold text-gray-700">Net Salary</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Payslip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {payrollRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50/50 transition">
                  
                  {/* Employee Info */}
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm ${record.color}`}>
                      {record.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{record.name}</p>
                      <p className="text-xs text-gray-500">{record.role}</p>
                    </div>
                  </td>
                  
                  {/* Salary Breakups */}
                  <td className="px-6 py-4 font-medium text-gray-600">{record.basic}</td>
                  <td className="px-6 py-4 font-medium text-green-600">+{record.allowance}</td>
                  <td className="px-6 py-4 font-medium text-red-500">-{record.deduction}</td>
                  
                  {/* Net Pay (Highlighted) */}
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-800 text-[15px]">{record.netPay}</span>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border flex items-center w-max gap-1 ${
                      record.status === 'Paid' ? 'bg-green-50 text-green-700 border-green-200' : 
                      record.status === 'Processing' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                      'bg-yellow-50 text-yellow-700 border-yellow-200'
                    }`}>
                      <span className="material-symbols-outlined text-[14px]">
                        {record.status === 'Paid' ? 'check_circle' : 
                         record.status === 'Processing' ? 'sync' : 'schedule'}
                      </span>
                      {record.status}
                    </span>
                  </td>

                  {/* Action (Download Slip) */}
                  <td className="px-6 py-4 text-center">
                    <button className="w-8 h-8 rounded-lg bg-gray-50 text-gray-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition flex items-center justify-center border border-gray-200 mx-auto" title="Download Payslip">
                      <span className="material-symbols-outlined text-[18px]">receipt_long</span>
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
