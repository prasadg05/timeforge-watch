import React from 'react'
import '../Css/Men.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'
import v1 from '../Components/img/watchvideo.mp4'
const arr = [
  {
    title: 'Timex',
    description: 'The legends Watches',
    im:'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwaf1f2581/images/Titan/Catalog/90130NL01_1.jpg?sw=800&sh=800'
  },
  {
    title: 'Fastrack',
    description: 'The legends Watches',
    im:'https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/1129858/2022/4/20/6e6baa2b-bbc7-484e-b862-bd84cee7b9091650455712717-Titan-Men-Brown-Dial-Watch-1584SL04-7601650455712430-1.jpg'
  },
  {
    title: 'TIMEX',
    description: 'The legends Watches',
    im:'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    title: 'BOAT',
    description: 'The legends Watches',
    im:'https://images.unsplash.com/photo-1612771409641-b0478cab8b69?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'CASIO',
    description: 'The legends Watches',
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzB98dKUqsyiS7KXAAOGJxZq9w2uVbG_kvNQ&usqp=CAU'
  },
  {
    title: 'Gold',
    description: 'The legends Watches',
    im:'https://wallpapercave.com/wp/wp3710506.jpg'
  },
  {
    title: 'FASTRACK',
    description: 'The legends Watches',
    im:'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dwcc20dc38/images/homepage/mobile/smart_m.jpg'
  },
  {
    title: 'TIMEWEAR',
    description: 'The legends Watches',
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq__O-Cvs2PgvPDwgWYSQtfv8v3qKpgYsjHg&usqp=CAU'
  },
  {
    title: 'TITAN',
    description: 'The legends Watches',
    im:'https://img.beatxp.com/prod/product/382/Artboard%202.webp'
  },
  {
    title: 'TIMEX',
    description: 'The legends Watches',
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQgop0hGTdSKZ9goj3CYLfeqvAdFwMeb3JJA&usqp=CAU'
  },
  {
    title: 'SONATA',
    description: 'The legends Watches',
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDtJ_E95Pncs7dkQXLy7UHMpJXN1qb6XekjFG2O8zUjvAvGISBYnIZ2CGyxgVr2qoTPE&usqp=CAU'
  },
  {
    title: 'ARIWATCH',
    description: 'The legends Watches',
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq__O-Cvs2PgvPDwgWYSQtfv8v3qKpgYsjHg&usqp=CAU'
  },
  {
    title: 'SONATA',
    description: 'The legends Watches',
    im:'https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/2/d/a/50-android-ios-watch-8-plextone-yes-original-imagpyf2hufr3xfu.jpeg?q=20&crop=false'
  },
  {
    title: 'FASTRACK',
    description: 'The legends Watches',
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq__O-Cvs2PgvPDwgWYSQtfv8v3qKpgYsjHg&usqp=CAU'
  },
  {
    title: 'TIMEX',
    description: 'The legends Watches',
    im:'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwaf1f2581/images/Titan/Catalog/90130NL01_1.jpg?sw=800&sh=800'
   
  },
  {
    title: 'ARIWEAR',
    description: 'The legends Watchesr',
    im:'https://wallpapercave.com/wp/wp3710506.jpg'
  },
]

export default function Men() {

  return (
    <>
       <Container className='mt-5'>
        <Row>

          {
            arr.map((a) => {
              return (
                <>
                 <Col>
                 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={a.im}  style={{ height:'250px'}}/>
      <Card.Body>
        <Card.Title>{a.title}</Card.Title>
        <Card.Text>
       
        <h3>$566</h3>
        </Card.Text>
        
        {/* <Button variant="primary">Add to Cart</Button> */}

        <div data-tooltip="Price:-$20" class="button">
<div class="button-wrapper">
  <div class="text">Buy Now</div>
    <span class="icon">
      <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
</svg>
    </span>
  </div>
</div>


      </Card.Body>
    </Card>

                 </Col>
                
                </>
              )
            })
          }

        </Row>

      </Container>
      <section>
        <Container fluid className="my-3">
          <Row>
            <div>
              <h2 className="gallery-heading">TIMESFORGE SHOWROOM</h2>
            </div>
            <Col lg={6} style={{ paddingRight: 0 }}>
              <div className="card1">
                <div className="image-box">
                  <img
                    src={
                      "https://wallpapercave.com/wp/wp3710506.jpg"
                    }
                    alt="Image 1"
                  />
                </div>
                <div className="content">
                  <h2 style={{ color: "white" }}>
                    DODGE Challenger 2014 - 2023
                  </h2>
                  <p style={{ color: "white" }}>
                    After introducing the third generation of the Challenger in
                    2008, Dodge constantly updated it for the next model years,
                    but the first real facelift was for the 2015 model year..
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} style={{ paddingLeft: 0 }}>
              <div className="card1">
                <div className="image-box">
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq__O-Cvs2PgvPDwgWYSQtfv8v3qKpgYsjHg&usqp=CAU"
                    }
                    alt="Image 2"
                  />
                </div>
                <div className="content">
                  <h2 style={{ color: "white" }}>
                    DODGE Durango 2020 - Present
                  </h2>
                  <p>
                    Dodge unveiled the first generation of the Durango at the
                    1997 North American International Motor Show. The car-maker
                    unveiled the third generation in 2011 and updated it later
                    on almost every year.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg={6} style={{ paddingRight: 0 }}>
              <div className="card1">
                <div className="image-box">
                  <img
                    src={
                      "https://img.beatxp.com/prod/product/382/Artboard%202.webp"
                    }
                    alt="Image 1"
                  />
                </div>
                <div className="content">
                  <h2 style={{ color: "white" }}>
                    DODGE Charger SRT Hellcat Widebody 2019-Present
                  </h2>
                  <p style={{ color: "white" }}>
                    The fastest sedan in the world doesn't have a three or
                    four-letter acronym, nor does it have a two-word name, and
                    is a Dodge. The Charger Hellcat is, with its 707hp and 196
                    mph (300 kph) top speed, the fastest three-box sedan in the
                    world,.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} style={{ paddingLeft: 0 }}>
              <div className="card1">
                <div className="image-box">
                  <img
                    src={
                      "https://wallpapercave.com/wp/wp3710506.jpg"
                    }
                    alt="Image 2"
                  />
                </div>
                <div className="content">
                  <h2 style={{ color: "white" }}>
                    DODGE Challenger SRT Demon 170 2023 - Present
                  </h2>
                  <p>
                    When launched, the Challenger SRT Demon 170 was the quickest
                    production car on the quarter-mile, and Dodge even offered a
                    parachute as an option for it.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <br></br>
  <br></br>  <br></br>
  <br></br>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="card1">
                <div className="image-box">
                  <img
                    src={
                      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    }
                    alt="Image 1"
                  />
                </div>
                <div className="content">
                  <h2 style={{ color: "white" }}>
                    DODGE Charger Daytona 2024 - Present
                  </h2>
                  <p style={{ color: "white" }}>
                    Dodge released the eighth generation of the Charger in March
                    2024, and besides the four-door version, like on the sixth
                    or the seventh generation, it also came as a coupe.-Dodge.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="card1">
                <div className="image-box">
                  <img
                    src={
                      "https://wallpapercave.com/wp/wp3710506.jpg"
                    }
                    alt="Image 1"
                  />
                </div>
                <div className="content">
                  <h2 style={{ color: "white" }}>
                    DODGE Charger Daytona 2024 - Present
                  </h2>
                  <p style={{ color: "white" }}>
                    Dodge released the eighth generation of the Charger in March
                    2024, and besides the four-door version, like on the sixth
                    or the seventh generation, it also came as a coupe.-Dodge.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="card1">
                <div className="image-box">
                  <img
                    src={
                      "https://wallpapercave.com/wp/wp3710506.jpg"
                    }
                    alt="Image 1"
                  />
                </div>
                <div className="content">
                  <h2 style={{ color: "white" }}>
                    DODGE Charger Daytona 2024 - Present
                  </h2>
                  <p style={{ color: "white" }}>
                    Dodge released the eighth generation of the Charger in March
                    2024, and besides the four-door version, like on the sixth
                    or the seventh generation, it also came as a coupe.-Dodge.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className="my-5">



          <div className="heading-container">
            <h2>Some New Launches</h2>
            <h2>HURRY UP ADD TO CART</h2>
          </div>
          <Row className="gx-0">
          <Col lg={6} className="pr-lg-0">
              {/* Big image on the left */}
              <div class="card2">
                <img
                  src={
                    "https://i.pinimg.com/originals/17/da/1c/17da1c5c2e793059947298db0973d674.jpg"                  }
                  alt="Left Big Image"
                  className="img-fluid imgs1"
                />

                <div class="card__content">
                  <p class="card__title">TITAN</p>
                  <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
              </div>
            </Col>



            <Col lg={6} className="pr-lg-0">
              {/* Big image on the right */}
              <div class="card2">
                <img 
                  src={
                    "https://i.pinimg.com/originals/17/da/1c/17da1c5c2e793059947298db0973d674.jpg" 
                  }
                  alt="Left Big Image"
                  className="img-fluid imgs1"
                />

                <div class="card__content">
                  <p class="card__title">SONATA</p>
                  <p class="card__description">Titan Company Limited is an Indian company that mainly manufactures luxury fashion accessories such as jewellery, watches and eyewear. Part of the Tata Group and started as a joint venture with the TIDCO, the company has its corporate headquarters in Electronic City, Bangalore,[7] and registered office in Hosur, Tamil Nadu.</p>
                </div>
              </div>
            </Col>
           
           
          
          </Row>
        </Container>
        <Container>
        <Row>
          <Col className='mt-5'>
            <div className="card1" style={{height:"800px"}}>
              <div className="image-box">
                
                <video src={v1} autoPlay="autoPlay" loop="loop" controls="controls" muted="muted">
                
                 </video>

              </div>
              <div className="content">
                <h2 style={{ color: "white" }}>EXPLORE THE WORLD WITH TIMEFORGE..
                </h2>
             
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
     

      </section>
    </>



  )
}