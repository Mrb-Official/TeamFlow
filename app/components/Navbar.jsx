
import { FiMenu, FiBell, FiUser } from "react-icons/fi"; 

export default function Navbar() {
  
    const todayDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });


  return (
    <nav className="bg-white h-16 px-4 sm:px-6 flex items-center justify-between
    border-b border-gray-100 sticky top-0 z-50 w-full ">
      
      {/* Left Side: Logo & Brand Name */}
      <div className="flex items-center gap-3">
        {/* Ek chhota sa round logo icon */}
        <div className="w-8 h-8 bg-[#531D24] rounded-full flex items-center justify-center text-white font-bold text-lg">
          A
        </div>
        {/* Brand Name */}
        <span className="text-[#531D24] text-xl font-bold tracking-wide">
          Admin user
        </span>
      </div>

      {/* Right Side: Notifications, Profile, and Mobile Menu */}
      <div className="flex items-center gap-2 sm:gap-4 text-gray-600">
        
        {/* Notification Icon (Sabhi screens par dikhega) */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors
        duration-200 flex flex-col">
          <h3>Todays Date</h3>
          <h3>{todayDate}</h3>
        </button>

        {/* User Profile Icon (Sirf badi screen yani laptop/tablet par dikhega) */}
        <button className="p-2 h-10 bg-red-300 rounded-[15px] items-center">
          <span className="material-symbols-outlined">logout</span>
        </button>

        {/* Hamburger Menu (Sirf mobile screen par dikhega, jaisa image mein tha) */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 sm:hidden">
          <FiMenu size={24} />
        </button>
        
      </div>

    </nav>
  );
}
