import React, {useState} from "react";

export const EditToDoForm = ({editToDo, task}) => {
    const [vaule, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editToDo(value, task.id);
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder="Update task."></input>
            <button type="submit" className="todo-btn">Add task</button>
        </form>
    )
}