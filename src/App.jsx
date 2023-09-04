import React from 'react'
import { useState } from 'react'

function App() {
  const[title, setTitle] = useState("")
  const[description, setDescription] = useState("")
  const[task, setTask] = useState([])
  const submitHandel = (e) =>{
   e.preventDefault()
   setTask([...task,{title, description}])
   setTitle("")
   setDescription("")
   
  }

  const deleteHandel = (i) => {
    let copyTask = [...task]
    copyTask.splice(i,1)
    setTask(copyTask)
   
  }

  let textHandel = <h2>No task Available</h2>
   
  if(task.length>0){
    textHandel= task.map((t,i)=>{
      return(
      <li>
       <div key={i} className="flex justify-between font-semibold" >
         <h3 className="mb-5" >{t.title}</h3>
         <h3 className="mb-5" >{t.description}</h3>  
         <button onClick={() => {deleteHandel(i)}} className="mb-5 bg-red-500 hover:bg-red-700 text-slate-100 font-semibold p-1 rounded">Delete</button>
       </div>
      </li>
      )  
   })
  }


  return (
     <>
     <div>
      <h1 className=" text-slate-400 text-center text-4xl font-bold my-5 " >Todo list</h1>
      <form onSubmit={submitHandel} className="text-center" >
        <input onChange={(e)=> {setTitle(e.target.value)}} value={title} type="text" className="my-5 mx-4 rounded p-2 font-semibold outline-none" />
        <input onChange={(e)=> {setDescription(e.target.value)}} value={description} type="text" className="my-5 mx-4 rounded p-2 font-semibold outline-none" />
        <button className="p-2 bg-red-500 hover:bg-red-700 shadow-xl rounded font-semibold " >Submit</button>
      </form>
      <br />
      <div className="p-5 bg-slate-500">
       <ul>
       {textHandel}
       </ul>
      </div>
      </div> 
    </>
  )
}

export default App
