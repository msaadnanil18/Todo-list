// import { useState } from 'react'
// import './App.css'

// function App() {
// const [tittle, setTittle] = useState("");
// const[description, setDescription] = useState("");
// const[mainTask, setMainTask] = useState([]);
//    const submitHandel = (e) =>{
//     e.preventDefault();
//     setMainTask([...mainTask,{ tittle,description}])
//     setTittle("");
//     setDescription("");
//     console.log(mainTask)
//     }

//     const deletehandel = (i) => {
//       let copyTask = [...mainTask]
//       copyTask.splice(i,1)
//       setMainTask(copyTask)
//     }

// let renderTask = <h2>not task Available</h2>;
 
// if(mainTask.length>0){
//   renderTask = mainTask.map((t,i)=>{
//     return(
//       <li>
//         <div key={i} className="flex justify-between" >
//         <h3 className="mx-5 text-xl font-semibold" >{t.description}</h3>
//         <h3 className="mx-5 text-xl font-semibold" >{t.tittle}</h3>
//         <button onClick={() => {deletehandel(i)}} className="p-1 bg-red-400 rounded-md mb-3" >Delete</button>  
//         </div> 
      
//          </li>
//     )
//   })
// }
 
//   return (
//     <>
//     <h1 className="text-4xl font-bold text-center text-slate-300 my-5"> Todo list</h1>
//      <div>
//       <form onSubmit={submitHandel} className=" text-center" >
//         <input onChange={(e)=> {setTittle(e.target.value)}} type="text" value={tittle}  className=" my-10 mx-5 p-3 rounded-lg  outline-none" placeholder="Enter List" />
//         <input onChange={(e)=> {setDescription(e.target.value)} }  type="text" value={description}  className=" my-10 mx-5 p-3 rounded-lg  outline-none" placeholder="Description"/>
//         <button className="bg-slate-500 p-2 rounded-lg hover:bg-slate-600 text-slate-200 font-bold cursor-pointer " >submit</button>
//       </form>
//       <hr />
//       <div className="p-6 bg-slate-500" >
//         <ul>
//           {renderTask}
//         </ul>
//       </div>
      
//      </div>
//     </>
//   )
// }

// export default App
