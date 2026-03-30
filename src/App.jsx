import React, { useContext } from 'react'
import AddSession from './components/AddSession'
import ShowSession from './components/ShowSession'
import Navbar from './components/Navbar'
import { Form } from './context/Form'

const App = () => {
  let {pageRander,setPageRander}=useContext(Form)
  return (
    <div >
      <Navbar/>
      {pageRander==="addTask" && <AddSession/>}
      {pageRander==="task" && <ShowSession/>}
    </div>
  )
}

export default App

