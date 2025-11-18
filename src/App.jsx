import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  const addTodo = ()=> {
    if (!text.trim()) return
    setTodos([...todos, text])
    setText("")
  }

  return (
    <div
      className='flex flex-col justify-center items-center h-screen bg-gray-300'
    >
      <h1>To Do List</h1>
      <input
        type='text'
        placeholder="enter ToDo"
        value={text}
        onChange = {(e)=> setText( e.target.value)}
      ></input>
      <button
      onClick={addTodo}
      >add</button>
      <div className="displayTodo">
        {todos.map((todo, index)=> (
          <div>
            <div key={index}>{todo}</div>
            <input
              type='checkbox'
              
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App