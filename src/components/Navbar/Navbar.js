import React from "react";
import "./Navbar.css";
import {BsFillKanbanFill} from 'react-icons/bs';

export default function Navbar(){
  return(
    <nav className="navbar">
      <BsFillKanbanFill className="navbar_icon"/>
      <span> Kanban Board </span>
    </nav>
  )
};