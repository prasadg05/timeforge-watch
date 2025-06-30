import Carousel from 'react-bootstrap/Carousel';
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"


function Services() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
      <img src={img4} alt="" style={{height:"800px",width:"3000px",}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img5} alt="" style={{height:"800px",width:"3000px"}}/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img6} alt="" style={{height:"800px",width:"3000px"}}/>

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

export default Services;