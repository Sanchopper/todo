import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  const addTodo = ()=> {
    if (!text.trim()) return
    setTodos([...todos, {text: text, completed: false, id: Date.now()}])
    setText("")
    console.log(todos)
  }




  return (
    <div
      className='flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-400'
    >
      <div className='bg-white p-10 rounded-lg shadow-lg'>
        <h1>To Do List</h1>
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
        <div className="displayTodo flex flex-col gap-4 mt-4">
          {todos.map((todo)=> (
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