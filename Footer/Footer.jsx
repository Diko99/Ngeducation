import React, { Component, Fragment } from 'react'
import '../Footer/Footer.css'

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid bg-light mt-5 rounded" id="Footer-content">
                        <h2 className="text-title">Do you have a book you’d like to verify ?</h2>
                        <h2 className="text-title">Register or sign in to unlock your book.</h2> 
                        <div className="col-md-12 text-center">
                        <p className="text-desc" >This will give you access to a digital version of your book and lots of <br/> free resources.</p>   
                        <button className="btn btn-default rounded-pill">Sign up to Unlock</button>
                    </div>
                </div>
                <div className="d-flex justify-content-start bg-dark text-light" id="footerList" >
                    <ul class="nav container" style={{height: "10%"}}>
                        <li class="nav-item ">
                            <a class="nav-link text-light" href="#" >FAQ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#" >Privacy Policy </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#" >Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Footer
