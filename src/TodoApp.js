import React, { useState } from 'react';
import './App.css';
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

const TodoApp = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (inputText.trim() !== '') {
            setTodos([...todos, inputText])
            setInputText('');
        }
    }

    const removeTodo = (index) => {
        setTodos(todos.filter((_,i) => i !== index))

    };

    const handleInput = (event) => {
        setInputText(event.target.value)
    }


    return (
        <div className="todo-container">
            <h1>ToDo List</h1>
            <InputField addTodo={addTodo} inputText={inputText} handleInput={handleInput}/>
            <TodoList todos={todos} removeTodo={removeTodo}/>
        </div>
    );
};

export default TodoApp;