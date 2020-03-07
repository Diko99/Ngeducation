import React, { Component } from 'react'
import '../Navbar/Navbar.css'

class Navbar extends Component {
    render() {
        return (
               <nav className="navbar navbar-expand-lg fixed-top">

                  {/* text/logo navbar */}
                  <a className="navbar-brand text-light" >
                     <i className="fa fa-reddit-alien"></i> <span id="text-nav"> Education </span> 
                  </a>

                 {/* button icon navbar */}
                  <button className="navbar-toggler" type="button" style={{color: "white", position: "relative", left: "40px"}} >
                     <i class="fa fa-users"></i>
                  </button>
                  <button className="navbar-toggler" type="button" style={{color: "white", position: "relative", left: "20px"}} >
                     <i class="fa fa-search"></i>
                  </button>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                     <i class="fa fa-align-justify text-light"></i>
                  </button>
                  
                  {/* list navbar */}
                  <div className="collapse navbar-collapse" id="navbarText">
                     <ul className="navbar-nav m-auto">
                     <li className="nav-item text-light">
                        <a className="nav-link" href="#"><i className="fa fa-book"></i> Books and Resources</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-pencil"></i> Tests and Guides</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-heart"></i> My Library</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-comment"></i> Blog</a>
                     </li>
                     </ul>
                     <button className="btn btn-default btn-outline-light rounded-pill" > Unlock Book <i class="fa fa-unlock-alt"></i> </button>
                     <button className="btn btn-default btn-outline-light rounded-pill" >Sign in / Register</button>
                  </div>
               </nav>              
        )
    }
}

export default Navbar
