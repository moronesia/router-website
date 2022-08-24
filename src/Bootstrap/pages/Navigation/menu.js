import React from 'react'
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css"

const menu = () => {
  return (
    <React.Fragment>
        <Navbar collapseOnSelect expand="lg fixed-top">
              <div className="container-fluid">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className="nav-link" href="#Skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/others" className="nav-link" href="#Others">Others</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/friends" className="nav-link" href="#Friends">Friends</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" href="#Contact">Contact Me</Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
              </div>
            </Navbar>
    </React.Fragment>
  )
}

export default menu;