import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "Assets/icons/search.svg";

const Nav = () => {
  const navlinks = [
    { name: "Get Started", link: "/#start" },
    { name: "Contact Us", link: "/contact-us" },
    {
      element: (
        <form className="flex items-center gap-3 box-border relative">
          <label htmlFor="search-input">Search</label>
          <input
            id="search-input"
            className="px-2 pr-6 outline-black-secondary outline-offset-1 box-border 
            border-black-secondary border border-1 rounded-xl w-3/4"
          />
          <button
            type="submit"
            className="bg-black-secondary absolute right-0 rounded-r-xl h-8"
          >
            <img src={searchIcon} alt="search" className="scale-[65%]" />
          </button>
        </form>
      ),
    },
  ];
  return (
    <nav
      className="
      flex gap-6 justify-center items-center text-black-secondary text-xl flex-wrap"
    >
      {navlinks.map(
        (navlink, index) =>
          navlink.element || (
            <Link
              to={navlink.link}
              key={index}
              className="md:border-r-2 md:border-black-secondary md:pr-6"
            >
              {navlink.name}
            </Link>
          )
      )}
    </nav>
  );
};

export default Nav;
