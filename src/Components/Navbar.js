import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <body>
      <div className='links'>
        <div className="name">
          <Link to="/"className='nav-links'>
          Home
          </Link>
          <Link to="/About"className='nav-links'>
          About
          </Link>
          <Link to="/Contact"className='nav-links'>
          Contact
          </Link>
      </div>
      </div>
      </body></>
  )
}

export default Navbar