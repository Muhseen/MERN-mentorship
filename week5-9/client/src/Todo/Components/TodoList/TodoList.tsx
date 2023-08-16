import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Todo from '../../../models';
import TodoItem from '../TodoItem/TodoItem';



interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleTaskDeleted: (id:number) => void;
  handleTaskCompleted: (id:number) => void;
}
const TodoList = ({todos, setTodos, handleTaskDeleted, handleTaskCompleted }:Props): JSX.Element => {
  
     
  return (
    <Row className='  mx-3 pl-5  '>
            {todos.map((todo) => <TodoItem todo={todo} handleTaskDeleted={ handleTaskDeleted} handleTaskCompleted={handleTaskCompleted} key={todo.id}></TodoItem>)}      
      </Row>
  );
};

export default TodoList;