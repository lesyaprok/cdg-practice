import React from "react";
import ThemeSwitcher from "../../molecules/ThemeSwitcher/ThemeSwitcher";

const Header = ({ onClick }) => {
  return (
    <header className="py-2 px-6 flex justify-between items-center">
      <a href="./#" className="dark:text-white text-dark-green text-xl">Logo</a>
      <ThemeSwitcher onClick={() => onClick()} />
    </header>
  );
};

export default Header;
