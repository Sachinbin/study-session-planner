import { Children, createContext, useState } from "react";

export let Form = createContext();

export let FormPorvider = ({children}) =>{
    let [theame,setTheame]=useState(false)
    let [pageRander,setPageRander]=useState("task")
    let [users,setUsers] =useState( 
        JSON.parse(localStorage.getItem("user")) || []
    )
    console.log("1",theame)
    return (
        <Form.Provider value={{pageRander,setPageRander,users,setUsers ,theame,setTheame}}>{children}</Form.Provider>
    )
}