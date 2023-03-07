import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';

  
export default function Carrossel() {
  return (
    <div style={
        { 
        display: 'block', 
        width: '1200px', 
        padding: 30, 
        // color: '#015a80',   
        fontFamily: 'Open Sans', 
        margin: '10px 0 0 0',
        }

        }>
      <Carousel fade>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="./img/castelo.png" alt=""/>
          <Carousel.Caption>
            {/* <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="./img/mulheres.png" alt=""/>
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="./img/mais-vendida.png" alt=""/>
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="./img/lancamentos.png" alt=""/>
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


            

    </div>
  );
}