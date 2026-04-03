"use client";

import React from "react";

export default function SettingsPage() {
  return (
    <div className="flex flex-col h-full w-full gap-6 pb-10">
      
      {/* 1. Header Section - Side by Side with Save Button */}
      <div className="flex justify-between items-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm w-full">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your account and company preferences</p>
        </div>
        
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition flex items-center gap-2 shadow-md">
          <span className="material-symbols-outlined text-sm">save</span>
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Sidebar Navigation inside Settings */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-semibold text-sm transition">
              <span className="material-symbols-outlined">person</span>
              Profile Details
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
              <span className="material-symbols-outlined">business_center</span>
              Company Info
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
              <span className="material-symbols-outlined">notifications</span>
              Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
              <span className="material-symbols-outlined">security</span>
              Security & Privacy
            </button>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 rounded-xl border border-red-100 p-4">
            <h4 className="text-red-800 font-bold text-sm">Danger Zone</h4>
            <p className="text-red-600 text-[12px] mt-1">Delete your account and all company data.</p>
            <button className="mt-3 text-red-700 font-bold text-xs uppercase tracking-wider hover:underline">
              Delete Account
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Actual Settings Form */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Section 1: Profile */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Profile Settings</h3>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  M
                </div>
                <button className="absolute bottom-0 right-0 bg-white border border-gray-200 p-1.5 rounded-full shadow-md hover:bg-gray-50 transition">
                  <span className="material-symbols-outlined text-[18px] text-gray-600">photo_camera</span>
                </button>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Profile Photo</h4>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                <div className="flex gap-2 mt-2">
                  <button className="text-xs font-bold text-blue-600 hover:underline">Change</button>
                  <button className="text-xs font-bold text-red-500 hover:underline">Remove</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                <input type="text" defaultValue="Meet" className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 outline-none transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                <input type="email" defaultValue="meet@teamflow.com" className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 outline-none transition" />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Job Title</label>
                <input type="text" defaultValue="Full Stack Developer" className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 outline-none transition" />
              </div>
            </div>
          </div>

          {/* Section 2: Notifications (Toggles) */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Notification Preferences</h3>
            
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">Email Notifications</p>
                  <p className="text-xs text-gray-500">Receive daily attendance reports via email</p>
                </div>
                <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">Desktop Alerts</p>
                  <p className="text-xs text-gray-500">Show pop-up for new leave requests</p>
                </div>
                <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">Employee Check-in</p>
                  <p className="text-xs text-gray-500">Notify me when someone arrives late</p>
                </div>
                <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}
