import React, { Component } from 'react'

class Header extends Component {
   render() {
      return (
         <div>
            <div className="jumbotron bg-danger text-center" style={{marginTop: "3.5rem"}}>
                <h1 className="text-light">Explore Books</h1>
                <p>Our Ladybird reading schemes come with lots of extra resources.Choose a series to find out more.</p>
            </div>
         </div>
      )
   }
}

export default Header
