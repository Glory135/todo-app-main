import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";

function Filter() {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { darkMode, todos, setTodos } = useContext(ThemeContext);
  let numLeft = todos.filter((item) => item.checked === false).length;
  let item = numLeft === 1 ? "item" : "items";

  const All = JSON.parse(localStorage.getItem("todos"));

  const handleFilterAll = () => {
    setTodos(All);
    setAll(true);
    setActive(false);
    setCompleted(false);
  };
  const handleFilterActive = () => {
    const newArr = All.filter((item) => item.checked === false);
    setTodos(newArr);
    setAll(false);
    setActive(true);
    setCompleted(false);
  };
  const handleFilterConpleted = () => {
    const newArr = All.filter((item) => item.checked === true);
    setTodos(newArr);
    setAll(false);
    setActive(false);
    setCompleted(true);
  };

  const clearComplated = () => {
    const newArr = todos.filter((item) => item.checked === false);
    setTodos(newArr);
    localStorage.setItem("todos", JSON.stringify(newArr));
  };
  return (
    <div
      style={{ backgroundColor: darkMode ? "#25273C" : "white" }}
      className='filter'
    >
      <div className='num_left'>
        {numLeft < 1 ? "No items" : `${numLeft} ${item} left`}
      </div>
      <div className='filter_text'>
        <div
          style={{ color: all && "#507ED0" }}
          className={
            darkMode
              ? "filter_text_item filter_text_item_dark"
              : "filter_text_item filter_text_item_light"
          }
          onClick={() => handleFilterAll()}
        >
          All
        </div>
        <div
          style={{ color: active && "#507ED0" }}
          className={
            darkMode
              ? "filter_text_item filter_text_item_dark"
              : "filter_text_item filter_text_item_light"
          }
          onClick={() => handleFilterActive()}
        >
          Active
        </div>
        <div
          style={{ color: completed && "#507ED0" }}
          className={
            darkMode
              ? "filter_text_item filter_text_item_dark"
              : "filter_text_item filter_text_item_light"
          }
          onClick={() => handleFilterConpleted()}
        >
          Completed
        </div>
      </div>
      <div
        onClick={() => clearComplated()}
        className={darkMode ? "clear clear_dark" : "clear clear_light"}
      >
        Clear Completed
      </div>
    </div>
  );
}

export default Filter;
