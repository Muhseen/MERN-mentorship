import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Todo from '../../../models';
import TodoItem from '../TodoItem/TodoItem';



interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({todos, setTodos}:Props): JSX.Element => {
  const handleTaskCompleted = (id:number):void => {
    console.log(id);
  }
  const handleTaskDeleted = (id:number):void => {
    console.log(id);
    setTodos(todos.map((t) => { t.id !== id }));
  }
     
  return (
    <Row className='  mx-3 pl-5  '>
            {todos.map((todo) => <TodoItem todo={todo} handleTaskDeleted={ handleTaskDeleted} handleTaskCompleted={handleTaskCompleted} key={todo.id}></TodoItem>)}      
  
    </Row>
  );
};

export default TodoList;