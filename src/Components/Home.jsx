import React, { useState } from 'react';
import '../Css/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { GiSonicShoes } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const arr = [
  { im: 'https://m.media-amazon.com/images/I/717ekHOBJ5L._AC_UY350_.jpg' },
  { im: 'https://m.media-amazon.com/images/I/61NU8Ivh7LL._AC_UF350,350_QL80_.jpg' },
  { im: 'https://www.beatxp.com/blog/wp-content/uploads/2023/04/beatXP-Waterproof-Smartwatches-1200x900.jpg' },
  { im: 'https://www.beatxp.com/blog/wp-content/uploads/2023/06/smartwatch-features-1200x900.jpg' },
  { im: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7276570b/images/Fastrack/Catalog/3286KM01_1.jpg?sw=800&sh=800' },
  { im: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe93d9a16/images/Titan/Catalog/90147SL01_1.jpg?sw=800&sh=800' },
  { im: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe7160cfd/images/Fastrack/Catalog/38074AP01_2.jpg?sw=800&sh=800' },
  { im: 'https://www.jagranimages.com/images/newimg/13122022/13_12_2022-titan_watches_for_men_and_women_23256345.jpg' }
];

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* Carousel Section */}
      <div className="carousel-wrapper">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ailabomay.baamboostudio.com/member.baamboostudio.com/X-slider/uploads/f23a3fx15-a66xcd5f6-ci2134jsxms/WATCHBANNER-Heinrich3-652a72efbddf7.jpg"
              alt="Banner 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.swisswatchexpo.com/images/banner-thewatchclub-home.jpg"
              alt="Banner 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://gshock.casio.com/content/casio/locales/intl/en/brands/gshock/_jcr_content/root/responsivegrid/container/carousel/image_copy_1105417866.casiocoreimg.jpeg/1750642778597/mrg-b2100r-kv-pc.jpeg"
              alt="Banner 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Title */}
      <center>
        <h2 className='mt-5' style={{ fontFamily: 'lucida-sans', fontSize: '39px' }}>
          <GiSonicShoes className='me-2' />
          <span style={{ color: 'red', fontFamily: 'serif', fontSize: '30px' }}>W</span>atches
        </h2>
      </center>

      {/* Watch Image Grid */}
      <Container className='mt-5'>
        <Row className="justify-content-center">
          {arr.map((a, index) => (
            <Col
              key={index}
              lg={3}
              md={4}
              sm={6}
              xs={12}
              className='mb-4 d-flex justify-content-center'
            >
              <div className="image-container">
                <img
                  src={a.im}
                  alt={`watch-${index}`}
                  className="image img-fluid rounded shadow-sm"
                  style={{
                    height: '320px',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Bottom Banner Image */}
      <div className="container my-5">
        <img
          src='https://cdn.shopify.com/s/files/1/0337/7102/8616/files/banner_2_1debef0c-b9d3-466d-bd42-552b72dd46c4.jpg?v=1602048395'
          alt="Bottom Banner"
          className="img-fluid w-100 rounded"
        />
      </div>
    </>
  );
};

export default Home;
