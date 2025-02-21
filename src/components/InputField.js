import React from "react";

const InputField = ({addTodo, inputText,handleInput}) => {
    return (
        <div className="todo-input">
            <input type="text" placeholder="Add a new task..." value={inputText} onChange={handleInput}/>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default InputField;