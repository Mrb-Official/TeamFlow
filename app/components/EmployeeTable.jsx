import React from 'react';
import Image from 'next/image';

const employees = [
  { id: 1, name: 'Anjali Sharma', role: 'Frontend Developer', status: 'Present', checkIn: '09:15 AM', checkOut: '06:30 PM', avatar: 'https://i.pravatar.cc/150?u=anjali' },
  { id: 2, name: 'Rahul Verma', role: 'Backend Developer', status: 'Present', checkIn: '09:30 AM', checkOut: '06:15 PM', avatar: 'https://i.pravatar.cc/150?u=rahul' },
  { id: 3, name: 'Saira Khan', role: 'UI/UX Designer', status: 'Late', checkIn: '10:05 AM', checkOut: '07:00 PM', avatar: 'https://i.pravatar.cc/150?u=saira' },
  { id: 4, name: 'Vikram Singh', role: 'DevOps Engineer', status: 'Absent', checkIn: '-', checkOut: '-', avatar: 'https://i.pravatar.cc/150?u=vikram' },
];

function EmployeeTable() {
  return (
    <div className="flex-1 w-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Today's Attendance</h2>
        <button className="text-sm text-blue-600 font-semibold hover:underline">View All</button>
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-gray-500 uppercase font-semibold border-b border-gray-100">
            <tr>
              <th className="px-4 py-3">Employee</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Check In</th>
              <th className="px-4 py-3">Check Out</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="px-4 py-4 flex items-center gap-3">
            <Image src={ <span className="material-symbols-outlined text-green-500">check_circle</span>} alt={emp.name}width={40} height={40} className="rounded-full" />
                  <div>
                    <div className="font-semibold text-gray-900">{emp.name}</div>
                    <div className="text-gray-500 text-xs">{emp.role}</div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    emp.status === 'Present' ? 'bg-green-100 text-green-700' :
                    emp.status === 'Late' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {emp.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-700 font-medium">{emp.checkIn}</td>
                <td className="px-4 py-4 text-gray-700 font-medium">{emp.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;
