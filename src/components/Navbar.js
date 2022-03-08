import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll";


function Navbar() {
    return (
        <div className='container'>
            

            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            .<div className="container">


            <a className="navbar-brand" href="/">Georgia Institute of Technology - SDM Laboratory</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to='/' className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link" >About the Team</Link>
                    </li>
                    <li className="nav-item">
                        <ScrollLink smooth={true} to='contacts' className="nav-link" href="#contacts">Contact Us</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <a href='https://ecdm.gatech.edu/' className="nav-link" >SDM</a>
                    </li>
                    
                </ul>
                
            </div>

            </div>

            </nav>


        </div>
    )
}

export default Navbar
