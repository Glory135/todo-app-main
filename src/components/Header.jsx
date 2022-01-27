import React, { useContext } from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import { ThemeContext } from "../App";
import "../styles.css";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className='header'>
      <h1 className='header_text'>
        <span>T</span> <span>O</span> <span>D</span> <span>O</span>
      </h1>
      <img
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        src={darkMode ? sun : moon}
        alt=''
      />
    </div>
  );
}

export default Header;
