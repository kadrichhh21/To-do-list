import React, { useState } from "react";
import { ToDo } from "./ToDo";
import { ToDoForm } from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { EditToDoForm } from "./EditToDoForm";

export const ToDoWrapper = () => {
  const [todos, setToDos] = useState("");

  const addToDo = (ToDo) => {
    setToDos([
      ...todos,
      { id: uuidv4(), task: ToDo, completed: false, isEditing: false },
    ]);
  }

  const deleteToDo = (id) => {
    setToDos(
        ToDo.filter((ToDo) => ToDo.id !== id)
    );
  }

  const toggleComplete = (id) => {
    setToDos(
      ToDo.map((ToDo) =>
        ToDo.id === id ? { ...ToDo, completed: !ToDo.completed } : ToDo
      )
    );
  }

  const editToDo = (id) => {
    setToDos(
      ToDo.map((ToDo) =>
        ToDo.id === id ? { ...ToDo, isEditing: !ToDo.isEditing } : ToDo
      )
    );
  }

  const editTask = (task, id) => {
    setToDos(
      ToDo.map((todo) =>
        ToDo.id === id ? { ...ToDo, task, isEditing: !ToDo.isEditing } : ToDo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <ToDoForm addToDo={addToDo} />
      {/* display todos */}
      {ToDo.map((todo) =>
            ToDo.isEditing ? (
          <EditToDoForm editToDo={editTask} task={ToDo} />
        ) : (
          <ToDo
            key={ToDo.id}
            task={ToDo}
            deleteTodo={deleteToDo}
            editTodo={editToDo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};