'use client';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Input from "./components/Input/Input";
import Footer from "./components/footer/Footer"; 
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState('')
  return (
    <div className="flex flex-col ">
      <Navbar />

      <div className="flex flex-col md:flex-row flex-1  ">
        <Input input={input} setInput={setInput} className="min-h-[70%]"  />
        <Sidebar setInput={setInput} />
      </div>
       <div className="">
      <Footer  />
      </div>
    </div>
  );
}
