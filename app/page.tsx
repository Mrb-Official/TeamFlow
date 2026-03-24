import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Desboard from "./components/Deshboard.jsx";
import Attendence from "./components/Attendence.jsx";


export default function Home() {
  return (
    <>
    <div className="grid grid-cols-[250px_1fr] h-screen w-full ">
      <Sidebar />
  
      <div className=" flex flex-col h-screen w-full">
      <Navbar />
      <div className="flex-1 w-full bg-gray-100  p-5" >
        <Attendence />

      </div>
  
      </div>
      </div>
      
      </>
  );
}
