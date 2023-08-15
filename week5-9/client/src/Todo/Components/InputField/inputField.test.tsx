import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import InputField from './InputField';


test('renders learn react link', () => {
    const handleAddTodo = (e:React.FormEvent    )=>{ 

    }   
    const [todo, setTodo] = useState<string>("");
    render(<InputField todo={todo} setTodo={setTodo}  handleAddTodo={handleAddTodo}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
