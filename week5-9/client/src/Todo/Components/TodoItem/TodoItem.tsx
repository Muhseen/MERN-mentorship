import { Row, Col} from "react-bootstrap";
import Todo from "../../../models";
import {AiFillEdit, AiFillDelete, AiFillCarryOut} from 'react-icons/ai'
interface Props {
  todo: Todo;
  handleTaskCompleted: (id:number)=>void;
  handleTaskDeleted: (id:number)=>void;
}
  
  
const TodoItem = ({ todo, handleTaskCompleted, handleTaskDeleted }:Props): JSX.Element => {
  return <Row className="bg-success  my-2 text-center p-3 text-ce">
    <Col>
      {todo.task}
    </Col>
    <Col lg={2}>
      <AiFillEdit></AiFillEdit>
    </Col>
    <Col lg={2}>
      <AiFillDelete onClick={()=>handleTaskDeleted(todo.id)}></AiFillDelete>
    </Col>
    <Col lg={2}>
    <AiFillCarryOut onClick={()=>handleTaskCompleted(todo.id)}></AiFillCarryOut>
    </Col>
  </Row>;
};

export default TodoItem;