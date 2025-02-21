import React from "react";
import TodoItem from "./ToItem";

const TodoList = ({todos, removeTodo}) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) =>
                (<TodoItem todo={todo} index={index} removeTodo={removeTodo}/>)
            )}
        </ul>
    )
}

export default TodoList;