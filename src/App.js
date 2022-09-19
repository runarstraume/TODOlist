//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo,unmarkTodo, removeTodo}) {
  return (
    <div className='todo'>
      <span style={ {textDecoration: todo.isDone ? "line-through" : ""
      }}>{todo.text}</span>
        <div>
        <Button variant = 'outline-success' onClick={ () => markTodo(index)}>✓</Button>
        <Button variant = 'outline-dark' onClick={ () => unmarkTodo(index)}>←</Button>
        <Button variant='outline-danger' onClick={ () => removeTodo(index)}>✕</Button>
        </div>
    </div>
  );
}

function FormTodo ({ addTodo}){
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Legg til nye oppgaver</b></Form.Label>
        <Form.Control type='text' className='input' value={value} onChange={e => setValue(e.target.value)} placeholder='Skriv inn ny oppgave' />
      </Form.Group>
      <Button variant='primary mb-3' type = 'submit'> Legg til</Button>
    </Form>
  );
}

//Simple Todo app CRUD principle (Create, Read, Update, Delete )
function App() {
  const [todos,setTodos] = React.useState([
    {
      text: "Eksempel ",
      isDone: false
    }
  ]);

//function add Todos
const addTodo = text => {
  const newTodos =[...todos, {text}];
  setTodos(newTodos);
};

//function mark Todos 
const markTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isDone = true;
  setTodos (newTodos);
};

//function unmark Todos 
const unmarkTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isDone = false;
  setTodos (newTodos);
};

//function delete Todos
const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
};
//Return JSX rendering to be displayed
return (
  <div className='app'>
    <div className='container'>
      <h1 className='text-center mb-4'>Gjøremål liste</h1>
      <FormTodo addTodo={addTodo} />
      <div>
        {todos.map((todo,index) => (
          <Card key = {index}>
            <Card.Body>
              <Todo 
              key = {index}
              index = {index}
              todo={todo}
              markTodo={markTodo}
              unmarkTodo={unmarkTodo}
              removeTodo={removeTodo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  </div>
);
        

  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
 */ 
}

export default App;
