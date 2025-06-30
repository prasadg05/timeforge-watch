import React from 'react';
import '../Css/Home.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Components/ExampleCarouselImage';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GiSonicShoes } from "react-icons/gi";

import  'bootstrap/dist/css/bootstrap.min.css'
import { Container,Row,Col } from 'react-bootstrap';
const arr=[
  {
    im:'https://m.media-amazon.com/images/I/717ekHOBJ5L._AC_UY350_.jpg'
  },
  {
    im:'https://m.media-amazon.com/images/I/61NU8Ivh7LL._AC_UF350,350_QL80_.jpg'
  },
  {
    im:'https://www.beatxp.com/blog/wp-content/uploads/2023/04/beatXP-Waterproof-Smartwatches-1200x900.jpg'
  },
  {
    im:'https://www.beatxp.com/blog/wp-content/uploads/2023/06/smartwatch-features-1200x900.jpg'
  }
  ,
  {
    im:'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7276570b/images/Fastrack/Catalog/3286KM01_1.jpg?sw=800&sh=800'
  },
  {
    im:'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe93d9a16/images/Titan/Catalog/90147SL01_1.jpg?sw=800&sh=800'
  },
  {
    im:'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe7160cfd/images/Fastrack/Catalog/38074AP01_2.jpg?sw=800&sh=800'
  },
  {
    im:'https://www.jagranimages.com/images/newimg/13122022/13_12_2022-titan_watches_for_men_and_women_23256345.jpg'
  },

  

]

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <>

      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage im='https://www.casio.com/content/casio/locales/in/en/products/watches/_jcr_content/root/responsivegrid/carousel/image.casiocoreimg.jpeg/1708321621734/ecb-2000dc-1adf-casio-bannerdesktop.jpeg'/>
    
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage im='https://www.swisswatchexpo.com/images/banner-thewatchclub-home.jpg' />
     
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage im='https://thegioidonghodep.com/wp-content/uploads/2023/06/Logo-The-Gioi-Dong-Ho-Dep-Desktop.jpg' />
       
      </Carousel.Item>
    </Carousel>
    
    <center>   <h2 className='mt-5' style={{fontFamily:'lucida-sans',fontSize:'39px'}}><GiSonicShoes  className='me-2'/><span style={{color:'red',fontFamily:'serif',fontSize:'30px'}}>W</span>atches</h2></center>

    <Container className='mt-5 ' style={{marginRight:'170px'}}>
     
        <Row>
          {/* <center>  <img src=''></img> <h3>Footwear</h3><img src=''></img></center> */}
          <Col>
         
            <Row className="">
              {arr.map((a,index) => (
                   <Col key={index} lg={3} md={4} sm={6} xs={12} style={{ marginBottom: '10px' }}>
                   <div className="image-container ">
                     <img 
                       src={a.im} 
                       className="image mx-5"
                     />
                   </div>
                 </Col>
              ))}
            </Row>
          </Col>
        </Row>
        
       
      </Container>
     
      <div class="container">
      <br></br>
  <br></br>
  
  <img src='https://cdn.shopify.com/s/files/1/0337/7102/8616/files/banner_2_1debef0c-b9d3-466d-bd42-552b72dd46c4.jpg?v=1602048395'/>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
</div>

    </>
  );
};

export default Home;


