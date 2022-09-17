import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [humberger, setHumberger] = useState(false);

  const Menu = (e) => {
    setHumberger(!humberger);
  };

  return (
    <header>
      <nav className="p-5 menu shadow-xl md:flex md:items-center md:justify-around text-dark-purple ">
        <div>
          <span className="mx-4 text-2xl font-[Poppins] font-extrabold cursor-pointer uppercase">
            Landing
          
 
          
          </span>

          <span className="text-3xl cursor-pointer ml-36 md:hidden " name="menu" onClick={Menu}>
        
          <svg className="inline"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 26 26">
                <path d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"></path>
              </svg>


           
          </span>
        </div>

        <ul
          className={
            humberger
              ? "text-dark-purple md:flex md:items-center"
              : "text-dark-purple md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
          }>
          <li className="mx-4 my-4 md:my-0">
            <NavLink
              className="text-xl hover:text-blue-800 duration-500"
              to="/">
              Home
            </NavLink>
          </li>
          <li className="mx-4 my-4 md:my-0">
            <NavLink
              className="text-xl hover:text-blue-800 duration-500"
              to="/form">
              Form
            </NavLink>
          </li>
          <li className="mx-4 my-4 md:my-0">
            <NavLink
              className="text-xl hover:text-cyan-800 duration-500"
              to="/list">
              List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
