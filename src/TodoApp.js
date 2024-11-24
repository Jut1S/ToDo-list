import React, { useState } from 'react';
import './App.css';

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
            <div className="todo-input">
                <input type="text" placeholder="Add a new task..." value={inputText}  onChange={handleInput}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                <ul className="todo-list">
                    {todos.map((todo, index) =>
                        (<li key={index}>
                            <span>{todo}</span>
                            <button className="delete-btn" onClick={() => removeTodo(index)}>Delete</button>
                        </li>)
                    )}
                </ul>
            </ul>
        </div>
    );
};

export default TodoApp;