import Carousel from 'react-bootstrap/Carousel';
import img from "./img/1.jpg"
import img1 from "./img/2.jpg"
import img2 from "./img/3.jpg"
import {Card,Button} from 'react-bootstrap/';

function Aboutus() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
      <img src={img} alt="" style={{height:"800px",width:"3000px",}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img1} alt="" style={{height:"800px",width:"3000px"}}/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" style={{height:"800px",width:"3000px"}}/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Prsent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    </>
    
  );
  
}

export default Aboutus;