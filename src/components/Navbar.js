import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='container'>
            

            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            .<div className="container">


            <a className="navbar-brand" href="https://ecdm.gatech.edu/">Georgia Institute of Technology - SDM Laboratory</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to='/' className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/aboutus' className="nav-link" >About the Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/background' className="nav-link" >Background</Link>
                    </li>
                    
                </ul>
                
            </div>

            </div>

            </nav>


        </div>
    )
}

export default Navbar
