import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {

  return (

    <div className = "navbar">
        <div className = "links">
            <Link to="/WiCSE-Personal-Project">Home</Link>
            <Link to="/WiCSE-Personal-Project/projects">Projects</Link>
            <Link to="/WiCSE-Personal-Project/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar