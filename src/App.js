import {useState, useEffect} from 'react';
import {db} from './firebase-config';

import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const traerDesdeFirebase = () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id})
        });
        setTodos(docs)
    });
  }

  useEffect(traerDesdeFirebase, [])

 

  useEffect(() => {
    const filteredHandler = () => {
      switch(status) {
        case 'completed' :
          setFilteredTodos(todos.filter(tarea => tarea.completed === true))
        break;
        case 'uncompleted' :
          setFilteredTodos(todos.filter(tarea => tarea.completed === false))
        break;
        default:
          setFilteredTodos(todos);
      }
    }
    filteredHandler();
  },[todos, status])


  return (
    <div>
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        status={status}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
