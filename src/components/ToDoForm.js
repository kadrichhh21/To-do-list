import React, {useState} from "react";

export const ToDoForm = ({addToDo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.prevent.default();
        if(value) {
            addToDo(value);
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="ToDoForm">
            <input type="text" name="To-Do-List" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder="What is the task today?"></input>
            <button type="submit" className="todo-btn">Add task</button>
        </form>
    )
}