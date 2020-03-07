import React, { Component } from 'react'
import '../Header/Header.css'

class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <p className="text-light">Find free audio, user guides, resources and much more, for your young learners</p>
                <button className="btn btn-outline-light rounded-pill">Explore Books</button>
            </div>
        )
    }
}

export default Header
