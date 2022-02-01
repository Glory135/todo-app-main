import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import check from "../images/icon-check.svg";
import cross from "../images/icon-cross.svg";
import "../styles.css";

function List() {
  const { darkMode, todos, setTodos } = useContext(ThemeContext);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("todos"));
    setTodos(all);
  }, [setTodos]);

  const handleCheck = (todo) => {
    const newArr = todos.map((item) => {
      if (item.id === todo.id) {
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        };
      }
      return item;
    });
    setTodos(newArr);
    localStorage.setItem("todos", JSON.stringify(newArr));
  };

  const cancel = (todo) => {
    const newArr = todos.filter((item) => {
      return item.id !== todo.id;
    });
    setTodos(newArr);
    localStorage.setItem("todos", JSON.stringify(newArr));
  };

  return (
    <div className='list_container'>
      {todos !== null ? (
        todos.length >= 1 ? (
          todos.map((eachTodo) => {
            return (
              <div
                style={{
                  backgroundColor: darkMode ? "#25273C" : "white",
                  color: darkMode ? "#B9BBD4" : "#4C4B5B",
                  transition: "1s",
                }}
                className='list'
                key={eachTodo.id}
              >
                <div className='list_icon_container'>
                  <div
                    style={{ backgroundColor: eachTodo.checked && "#77B3F9" }}
                    onClick={() => handleCheck(eachTodo)}
                    className='circle list_circle'
                  >
                    <img
                      style={{
                        display: eachTodo.checked ? "inline" : "none",
                      }}
                      className='check_img'
                      src={check}
                      alt=''
                    />
                  </div>
                </div>
                <div
                  style={{
                    color: eachTodo.checked && "#DBDBDD",
                    textDecoration: eachTodo.checked && "line-through",
                  }}
                  className='list_text'
                >
                  {eachTodo.text}
                </div>
                <div className='list_icon_container'>
                  <img
                    className='cross_img'
                    onClick={() => cancel(eachTodo)}
                    src={cross}
                    alt=''
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div
            style={{
              backgroundColor: darkMode ? "#25273C" : "white",
              color: darkMode ? "#B9BBD4" : "#4C4B5B",
              transition: "1s",
            }}
            className='list'
          >
            <div className='list_icon_container'></div>
            <h3 className='list_text'>No Todo</h3>
            <div className='list_icon_container'></div>
          </div>
        )
      ) : (
        <div
          style={{
            backgroundColor: darkMode ? "#25273C" : "white",
            color: darkMode ? "#B9BBD4" : "#4C4B5B",
            transition: "1s",
          }}
          className='list'
        >
          <div className='list_icon_container'></div>
          <h3 className='list_text'>No Todo</h3>
          <div className='list_icon_container'></div>
        </div>
      )}
    </div>
  );
}

export default List;
