import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import InputField from './Todo/Components/InputField/InputField';
import { Row, Col } from 'react-bootstrap';
import Todo from './models'; 
import TodoItem from './Todo/Components/TodoItem/TodoItem';
import TodoList from './Todo/Components/TodoList/TodoList';
import axios from 'axios';
import { base_url } from './config';
import Login from './components/Login/Login';
import { createBrowserRouter, createRoutesFromElements, Route , Link} from 'react-router-dom';
function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<App/>}>
  //       <Route element={<Login/>} path="/signin"></Route>
  //       <Route element={<Login/>} path="/signin"></Route>
  //     </Route>
  //   )
  // );
  interface Product {
    id: number;
    name: string;
    cost_price: number;
    selling_price: number;
    quantity: number;
    created_at: Date;
    ratings: number;
  }
  

const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);
  
const handleAddTodo = (e: React.FormEvent)=>{
  e.preventDefault();
  console.log("here");
  console.log({todos})
  if (todo.trim() === "")
    return;
  setTodos([...todos, { id: Math.random(), task: todo, isCompleted: false }]); 
  console.log({ todos });
  setTodo("");
}
  axios
  // .get( "https://api.publicapis.org/entries")
  .get( "http://172.19.48.1:4000/api/product")
  .then((res) => {
    console.log(JSON.stringify(res.data))
  })
  .catch(
    (err) => {
      console.log({err})
  })

  const handleTaskCompleted = (id: number): void => {
  console.log(id);
  
      
  
}
const handleTaskDeleted = (id:number):void => {
  //console.log(id);
  console.log(todos);
  const rem = todos.map((tod) => {
    if (tod.id !== id) {
      return tod;
    }
   
  })
  console.log({ rem });
  // setTodos(todos.map(todo =>  todo.id != id  ))    
}
  
  return (
    <div className="App container mt-5 bg-secondary p-4">
      
      <Login></Login>
      <Header></Header>
     
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} ></InputField>
      <Row>
        <Col lg={6}>
          <TodoList todos={todos}
            setTodos={setTodos}
            handleTaskCompleted={handleTaskCompleted}
            handleTaskDeleted={handleTaskDeleted}></TodoList>
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
