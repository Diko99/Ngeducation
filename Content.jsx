import React, { Component } from 'react'
import '../Content/Content.css'

import Animals1 from '../../assets/animals1.jpg'
import Animals2 from '../../assets/animals2.jpg'
import Animals3 from '../../assets/animals3.jpg'

class Content extends Component {
    render() {
        return (
        <div className="container-fluid text-center  bg-light">
            <div className="row ">
                <div className="col-md-4 col-xs-12 ">
                    <div class="card m-auto bg-info" style={{width: "100%"}}>
                        <div class="card-body">
                            <h5 class="card-title">Key Words</h5>
                            <p class="card-text">This iconic series helps children learn to read using the most common words in the English language first</p>
                        </div>
                        <section className="wrapper">
                            <img src={Animals2} alt="" id="gambar2"  />
                        </section>
                    </div>
                </div>

                <div className="col-md-4 col-xs-12  ">
                    <div class="card m-auto " style={{width: "100%"}}>
                        <adiv class="card-body">    
                            <h5 class="card-title">Ladybird Readers</h5>
                            <p class="card-text">Graded ELT Readers to help inspire a life-long love of reading in young English language learners</p>
                        </adiv>
                        <section className="wrapper">
                            <img src={Animals3} alt="" id="gambar2"/>
                        </section>
                    </div>
                </div>

                <div className="col-md-4 col-xs-12   ">
                <div class="card m-auto bg-warning" style={{width: "100%"}}>
                        <div class="card-body">
                            <h5 class="card-title">Read it yourself</h5>
                            <p class="card-text">A levelled reading series designed for children whose first language is English</p>
                        </div>
                        <section className="wrapper">
                        <img src={Animals1} alt="" id="gambar2" />
                        </section>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Content
