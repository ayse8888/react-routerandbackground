import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'


function Navbar(){
  return(
    <div className="navbar">
      <img src="https://st2.depositphotos.com/5486284/11111/v/950/depositphotos_111115376-stock-illustration-lets-travel-brush-handwriting-lettering.jpg" alt="" width="60" height="60" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar