"use client";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter);
  const changeTheme = () => {
    if (theme == themes.dracula) {
      setTheme(themes.winter);
      console.log(theme);
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      setTheme(themes.dracula);
      console.log(theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  };
  return (
    <>
    <button onClick={changeTheme} className="btn btn-primary btn-outline btn-sm mx-2">
        {theme===themes.winter?<BsSunFill className='h-4 w-4'/>:<BsMoonFill className='h-4 w-4'/>}
    </button>
    </>
  );
};

export default ThemeToggle;
