import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Navbar />
    </>  
  );
}
