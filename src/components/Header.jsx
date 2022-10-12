import React from "react";
import logo from "Assets/icons/logo.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      className={`
      bg-header flex items-center gap-4
      px-6 py-4
    `}
    >
      <img src={logo} alt="logo" className="w-40 h-40 sm:flex hidden" />

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
