import React from "react";

const TodoItem = ({todo, removeTodo, index}) => {
    return (
        <li>
            <span>{todo}</span>
            <button className="delete-btn" onClick={() => removeTodo(index)}>Delete</button>
        </li>
    )
}

export default TodoItem;