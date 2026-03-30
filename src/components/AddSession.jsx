import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { Form } from "../context/Form";
import { nanoid } from 'nanoid'

const AddSession = () => {
  let { users, setUsers } = useContext(Form)

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange"
  })

  let handleSub = (data) => {
    let arr = [...users, { ...data, id: nanoid() }]
    setUsers(arr)
    localStorage.setItem("user", JSON.stringify(arr))
    // console.log(data)
    reset()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">

      {/* Card */}
      <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl w-[320px] animate-fadeInUp hover:shadow-2xl transition duration-500">

        <h2 className="text-2xl font-bold text-center mb-5">
          Add Study Task
        </h2>

        <form
          onSubmit={handleSubmit(handleSub)}
          className="flex flex-col gap-5">

          {/* Floating Input */}
          <div className="relative group">
            <input
              {...register("title",{required:"Title is required"})}
              type="text"
              
              className="w-full p-2 border-b-2 border-gray-300 outline-none bg-transparent 
                         focus:border-blue-500 transition duration-300 peer"
            />
            <label className="absolute left-2 top-2 text-gray-500 text-sm 
                              peer-focus:-top-3 peer-focus:text-blue-500 
                              peer-valid:-top-3 transition-all duration-300">
              Task Title
            </label>
            {errors.title && <p>{errors.title.message}</p>}
          </div>

          {/* Subject */}
          <div className="relative group">
            <input
              {...register("subject",{required:"Subject is Required"})}
              type="text"
              
              className="w-full p-2 border-b-2 border-gray-300 outline-none bg-transparent 
                         focus:border-blue-500 transition duration-300 peer"
            />
            <label className="absolute left-2 top-2 text-gray-500 text-sm 
                              peer-focus:-top-3 peer-focus:text-blue-500 
                              peer-valid:-top-3 transition-all duration-300">
              Subject
            </label>
            {errors.subject && <p>{errors.subject.message}</p>}
          </div>

          {/* Modern Time Input */}

          <div className="relative group">
            <span className="absolute left-2 top-2 text-gray-400">⏰</span>
            <input
              {...register("time")}
              type="time"
              
              className="w-full pl-8 p-2 border-b-2 border-gray-300 outline-none bg-transparent 
                         focus:border-blue-500 transition duration-300 peer"
            />
            <label className="absolute left-8 top-2 text-gray-500 text-sm 
                              peer-focus:-top-3 peer-focus:text-blue-500 
                              peer-valid:-top-3 transition-all duration-300">
              Time
            </label>
            {errors.time && <p>{errors.time.message}</p>}
          </div>

          {/* Button */}
          <button
            className="mt-3 py-2 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-blue-500 to-indigo-500 
                       transition duration-300 
                       hover:scale-105 hover:shadow-lg 
                       active:scale-95 
                       relative overflow-hidden"
          >
            <span className="relative z-10">Add Task</span>

            {/* Shine Effect */}
            <span className="absolute inset-0 bg-white opacity-10 blur-lg translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
          </button>

        </form>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.7s ease-out;
          }
        `}
      </style>

    </div>
  );
}

export default AddSession
