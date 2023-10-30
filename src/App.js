import React, { useState } from 'react';
import Header from './Component/Header';
import Form from './Component/Form';
import TodoList from './Component/TodoList';
import './App.css';

const App = ()=> {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className='container'>
      <div className='app-wraooer'>
        <div>
        <Header />
        </div>
        <div>
          <Form
          input = {input}
          setInput = {setInput}
          todos = {todos}
          setTodos = {setTodos} 
          editTodo={editTodo}
          setEditTodo = {setEditTodo}
          />
        </div>
        <div>
          <TodoList 
          todos={todos} 
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
