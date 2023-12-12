import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const ToDo = ({task, deleteToDo, editToDo, toggleComplete}) => {
    return (
        <div className="ToDo">
            <p className={'${task.completed ? "completed" : "incompleted"}'} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
            </div>
        </div>
    )
}