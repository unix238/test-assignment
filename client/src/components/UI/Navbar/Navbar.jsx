import React from "react";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={cl["nav"]}>
      <div className='wrapper'>
        <Link to='/'>Home</Link>
      </div>
    </nav>
  );
};
