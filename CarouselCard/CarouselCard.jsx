import React, { Component } from 'react'
import Slider from "react-slick";
import '../CarouselCard/CarouselCard.css'

import book1 from '../../assets/book1.jpg'
import book2 from '../../assets/book2.jpg'
import book3 from '../../assets/book3.jpg'
import book4 from '../../assets/book4.jpg'
import book5 from '../../assets/book5.jpg'


class CarouselCard extends Component {
    render() {
      var settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1,
         initialSlide: 1,
         responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
             }
           },
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1
             }
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
       };
      return (
        <div className="title-listBooks bg-light" style={{marginTop: "5rem"}} >
          <h2 style={{textDecoration: "underline", padding: "2rem"}}>List Books</h2>
        <div className="container-fluid d-flex justify-content-center" id="wrap-cards-listBooks" >
          <Slider {...settings} className="container-fluid  mt-5" style={{width: "90%"}}>
            <div className="d-flex justify-content-center" id="wrap-card">
              <img className="img-responsive" src={book1} alt="" id="listBooks"/>
            </div>
            <div className="d-flex justify-content-center">
              <img className="img-responsive" src={book2} alt="" id="listBooks"/>
            </div>
            <div className="d-flex justify-content-center">
              <img className="img-responsive" src={book3} alt="" id="listBooks"/>
            </div>
            <div className="d-flex justify-content-center">
              <img className="img-responsive" src={book4} alt="" id="listBooks"/>
            </div>
          </Slider>
        </div>
        </div>
      )
   }
}

export default CarouselCard
