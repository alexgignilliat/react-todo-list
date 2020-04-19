import React, { useState } from 'react';
import "./App.css";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function Header() {
  return (
    <div>
    <div className="header">- React Todo List -</div>
  </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
      addTodo(value);
      setValue('');
    }
  
  return (
    <div className="formDiv">
      
    <form onSubmit={handleSubmit}>

      <input placeholder="Add a todo:" type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
    </form>
    </div>

  )
}


function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
    <div className="todo">
      {todo.text}
      <Button variant="contained" className="btns" id="deleteBtn" onClick={() => { deleteTodo(index) }}>&#10005;</Button>
      <Button variant="contained" className="btns" id="completeBtn" onClick={() => { completeTodo(index) }}>&#10003;</Button>

    </div>
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
      index: Math.floor(Math.random() * 999)
    },
    {
      text: 'Walk dogs',
      isCompleted: false,
    },
    {
      text: 'Build todo app with React',
      isCompleted: false,
    }
  ])

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    if(newTodos[index].isCompleted === false){
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
    } else {
      newTodos[index].isCompleted = false;
      setTodos(newTodos)
    }
  }
  const addTodo = text => {
    const NewTodos = [...todos, { text }]
    setTodos(NewTodos)
  }

  return (
    <div className="app">
      <Header />
      <TodoForm addTodo={addTodo} deleteTodo={deleteTodo}  />
      <div className="todo-List">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />

        ))}

      </div>
      
    </div>
  )
}

export default App;