import React, { useState } from "react";
import Add from "./components/Add";
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import darkImg from "./images/bg-desktop-dark.jpg";
import lightImg from "./images/bg-desktop-light.jpg";
import "./styles.css";

export const ThemeContext = React.createContext();

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: 0, text: "", checked: false });
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        todos,
        setTodos,
        todo,
        setTodo,
      }}
    >
      <main className='body'>
        <header
          style={{
            backgroundImage: darkMode ? `url(${darkImg})` : `url(${lightImg})`,
            transition: "1s",
          }}
          className='top'
        ></header>
        <div
          style={{
            backgroundColor: darkMode
              ? "hsl(235, 21%, 11%)"
              : "hsl(0, 0%, 98%)",
            transition: "1s",
          }}
          className='down'
        ></div>
        <div className='content'>
          <Header />
          <Add />
          <List />
          <Filter />
        </div>

        <div className='attribution'>
          Challenge by{" "}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            rel='noreferrer'
            target='_blank'
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href='https://www.frontendmentor.io/profile/Glory135'>Glory</a>.
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
