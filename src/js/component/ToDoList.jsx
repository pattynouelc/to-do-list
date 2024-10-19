import React, { useState } from "react";
import "../../styles/ToDoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Función para agregar una tarea
  const handleAddTask = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((task, index) => index !== indexToDelete));
  };

  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        placeholder="Añadir tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTask}
      />
      <ul className="todo-list">
        {tasks.length === 0 ? (
          <li className="no-tasks">No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((task, index) => (
            <li
              className="todo-item"
              key={index}
              onMouseEnter={() => document.getElementById(`delete-${index}`).style.display = 'inline'}
              onMouseLeave={() => document.getElementById(`delete-${index}`).style.display = 'none'}
            >
              {task}
              <span
                id={`delete-${index}`}
                className="delete-icon"
                onClick={() => handleDeleteTask(index)}
                style={{ display: 'none' }} // Inicialmente oculto
              >
                ❌
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ToDoList;

