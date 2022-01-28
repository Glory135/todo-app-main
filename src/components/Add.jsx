import React, { useContext } from "react";
import { ThemeContext } from "../App";
import "../styles.css";

function Add() {
  const { darkMode, todo, setTodo, todos, setTodos } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todos);
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodo({ text: "" });
  };

  return (
    <div
      style={{ backgroundColor: darkMode ? "#25273C" : "white" }}
      className='add'
    >
      <div className='circle'></div>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            backgroundColor: darkMode ? "#25273C" : "white",
            color: darkMode ? "#B9BBD4" : "#4C4B5B",
          }}
          type='text'
          value={todo.text}
          onChange={(e) => {
            setTodo({
              id: todos && todos.length + 1,
              text: e.target.value,
              checked: false,
            });
          }}
          placeholder='Add Todo...'
        />
        <button style={{ display: "none" }} type='submit'>
          submit
        </button>
      </form>
    </div>
  );
}

export default Add;
