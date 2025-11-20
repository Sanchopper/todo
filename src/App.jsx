import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")
  const [filter, setFilter] = useState("all")

  const addTodo = ()=> {
    if (!text.trim()) return
    setTodos([...todos, {text: text, completed: false, id: Date.now()}])
    setText("")
    console.log(todos)
  }


  const filteredTodos = todos.filter((todo)=> {
    if(filter==='active') return !todo.completed
    if(filter==='completed') return todo.completed
    return true
  })

  return (
    <div
      className='flex flex-col justify-center items-center h-screen bg-linear-to-r from-blue-500 to-purple-400'
    >
      <div className='bg-white p-10 rounded-lg shadow-lg text-xl'>
        <h1 className='text-4xl pb-6'>To Do List</h1>
        <div className='border-gray-200 border-2 p-2 rounded-xl'>
          <input
            type='text'
            placeholder="enter ToDo"
            value={text}
            onChange = {(e)=> setText( e.target.value)}
          ></input>
          <button
            className='bg-blue-500 text-white rounded-xl p-1 ml-2'
            onClick={addTodo}
          >add</button>
        </div>
        <div className="filters flex justify-around">
          <button  
            onClick={()=> setFilter("all")}
            className={`mt-4 py-0.5 px-2 rounded-xl border-2 border-purple-600 ${filter==="all" ? "bg-purple-400 text-white" : "bg-white text-black"}`}>All</button>
          <button  
            onClick={()=> setFilter("active")}
            className={`mt-4 py-0.5 px-2 rounded-xl border-2 border-purple-600 ${filter==="active" ? "bg-purple-400 text-white" : "bg-white text-black"}`}>Active</button>
          <button  
            onClick={()=> setFilter("completed")}
            className={`mt-4 py-0.5 px-2 rounded-xl border-2 border-purple-600 ${filter==="completed" ? "bg-purple-400 text-white" : "bg-white text-black"}`}>Completed</button>
        </div>
        <div className="displayTodo flex flex-col gap-4 mt-4">
          {
            filteredTodos.map((todo)=> (
              <div className='flex bg-gray-200 rounded-xl p-2 items-center gap-4' key={todo.id}>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => setTodos(prev => 
                    prev.map((t)=>(
                    t.id === todo.id ? {...t, completed: !t.completed} : t
            )))}
                />
                <div>{todo.text}</div>
                <button className='bg-red-500 text-white rounded-xl p-1 ml-auto'
                  onClick={()=> setTodos(prev => 
                    prev.filter((t)=> t.id !== todo.id)
                  )}
                >Delete</button>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App