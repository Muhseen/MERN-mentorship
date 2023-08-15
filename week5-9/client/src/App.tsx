import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import InputField from './Todo/Components/InputField/InputField';
import { Row, Col } from 'react-bootstrap';
import Todo from './models'; 
import TodoItem from './Todo/Components/TodoItem/TodoItem';
import TodoList from './Todo/Components/TodoList/TodoList';
function App() {
 const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);
  

const handleAddTodo = (e: React.FormEvent)=>{
  e.preventDefault();
  console.log("here");
  console.log({todos})
  setTodos([...todos, { id: Math.random(), task: todo, isCompleted: false }]); 
  console.log({ todos });
  setTodo("");
}
  
  return (
    <div className="App container bg-warning">
      
      <Header></Header>
     
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} ></InputField>
      <Row>
        <Col lg={6}>
      <TodoList todos={todos}></TodoList>
        </Col>
        <Col lg={6}>
        </Col>
      </Row>
      {/* <header className="App-header">

        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
