import { useRef, useState } from 'react';
import {Row,Col, Form, Button } from 'react-bootstrap';
import React from 'react';
// const textRef = useRef(null);
interface Todo{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e:React.FormEvent) => void;
} 
const InputField = ({todo,setTodo, handleAddTodo}:Todo): JSX.Element => {
  

  const InputRef = useRef(null);
  
  
  return (
    <Row className=' my-3'>
      <Col lg={{ span: 4, offset: 4 }} sm={12} >
          <Form.Group>
          <Form.Control type="text" ref={ InputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Type task here ...." />
          </Form.Group>
      </Col>
          <Col lg={4} sm={12}>
            <Button onClick={handleAddTodo}>Add Todo</Button>
          </Col>
    </Row>
  );
};

export default InputField;