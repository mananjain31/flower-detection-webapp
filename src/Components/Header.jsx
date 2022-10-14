import React from "react";
import logo from "Assets/icons/logo.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className={`
      bg-header flex items-center gap-4
      px-6 py-4
    `}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-20 h-20 md:w-40 md:h-40 flex" />
      </Link>

      <div className="flex-1 flex sm:block">
        <div className="text-green-primary text-center flex flex-col gap-1 sm:gap-4">
          <h1 className="text-4xl sm:text-6xl font-light">Flower Detection</h1>
          <h2 className="text-3xl sm:text-2xl font-extralight">
            -Plantation Guide
          </h2>
          {/* under development */}
          {/* <Nav /> */}
        </div>
      </div>
      <div className="w-40 hidden sm:block"></div>
    </header>
  );
};

export default Header;
