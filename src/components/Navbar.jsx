import React, { useContext } from "react";
import { Form } from "../context/Form";

const Navbar = () => {
    let {setPageRander,theame, setTheame} =useContext(Form)
  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">
        Study Planner
      </h1>

      {/* Menu */}
      <div className="flex gap-6 relative">

        {/* Add Task - ACTIVE */}
        <button
        
        onClick={()=>{
            setPageRander("addTask")
            // setTheame(true)
        }}
          className="relative px-3 py-2 font-medium text-blue-600"
         
          
        >
          Add Task
        </button>

        {/* Tasks */}
        <button
        
        onClick={()=>{setPageRander("task")}}
          className="relative px-3 py-2 font-medium text-gray-500 hover:text-blue-500 transition"
        >
          Tasks
        </button>

      </div>
    </div>
  );
};

export default Navbar;