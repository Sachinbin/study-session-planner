import React, { useContext } from 'react'
import { Form } from '../context/Form'

const ShowSession = () => {
  let { users,theame,setTheame } = useContext(Form)
  console.log(users)
  return (
    <div className="flex gap-3 flex-wrap items-center justify-center min-h-screen bg-blue-100">
      {
        users.map((elem) => {

          return (<div key={elem.id } className="bg-white p-5 rounded-2xl shadow-lg w-[300px] 
                      transition duration-300 
                      hover:scale-105 hover:shadow-2xl relative">

            <div className="absolute top-3 right-3 flex gap-2 opacity-0 
                        hover:opacity-100 transition duration-300 group">

              <button className="text-blue-500 hover:scale-110 transition">
                ✏️
              </button>

              <button className="text-red-500 hover:scale-110 transition">
                🗑️
              </button>
            </div >

            <h2 className="text-lg font-bold text-gray-800">
              {/* {elem.title} */}
            </h2>

        
            <p className="text-sm text-gray-500 mt-1">
              Subject: {elem.subject}
            </p>

          
            <div className="flex items-center gap-2 mt-3 text-gray-600">
              <span>⏰</span>
              <span>{elem.time}PM</span>
            </div>

            
            <div className="flex justify-between items-center mt-4">

              {theame?<span className="bg-yellow-100 text-green-600 text-xs px-3 py-1 rounded-full">
                Complited
              </span>:<span className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">
                Pending
              </span>}

              
              <button
              onClick={()=>
                setTheame((prevs)=>!prevs)}
              
               className={`text-green-500 text-sm font-semibold cursor-pointer
                             hover:scale-110 transition`}>
                ✔ Done
              </button>

            </div>

          </div>)
        })
      }

    </div>
  );
}

export default ShowSession
