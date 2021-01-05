import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand name" to="/">
                Greg Malone
                <small className="header-title"> / Full Stack Web Developer, Continuous Improvement Specialist, and Family Man! </small>
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item"> <Link to="/" className={
                        window.location.pathname === '/' ||
                        window.location.pathname === '/AboutMe'
                        ? 'nav-link active'
                        : 'nav-link'
                    }>About</Link>
                    </li>
                    <li className="nav-item"> <Link to="/MyProjects" className={
                        window.location.pathname === "MyProjects"
                        ? 'nav-link active'
                        : 'nav-link'
                    }>Projects</Link>
                    </li>
                    <li className="nav-item"> <Link to="/Resume" className={
                        window.location.pathname === "Resume"
                        ? 'nav-link active'
                        : 'nav-link'
                    }>Resume</Link>
                    </li>
                    <li className="nav-item"> <Link to="/ContactMe" className={
                        window.location.pathname === "ContactMe"
                        ? 'nav-link active'
                        : 'nav-link'
                    }>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;