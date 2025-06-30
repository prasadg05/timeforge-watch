import React from 'react'
import '../Css/Men.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'
import v1 from '../Components/img/watchvideo2.mp4'
const arr = [
  {
    title: 'Timex',
    description: 'The legends Watches',
    im:'https://www.jiomart.com/images/product/original/rvmraso4uk/iik-collection-watches-for-women-stainless-steel-chain-diamond-studded-blue-dial-ladies-watch-water-resistant-womens-watches-iik-3203w-product-images-rvmraso4uk-5-202305101931.jpg?im=Resize=(500,630)'
  },
  {
    title: 'Fastrack',
    description: 'The legends Watches',
    im:'https://m.media-amazon.com/images/I/51pT6qRUSgL._AC_UY1000_.jpg'
  },
  {
    title: 'TIMEX',
    description: 'The legends Watches',
    im:'https://www.titan.co.in/on/demandware.static/-/Sites-titan-storefront-catalog/default/dw8e0ca34b/Raga-Women.jpg'
  },
  {
    title: 'BOAT',
    description: 'The legends Watches',
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH4UwDcP1Le1Vnr_ZlN90RxlVhmSVpoptyw&usqp=CAU'
  },
  {
    title: 'CASIO',
    description: 'The legends Watches',
    im:'https://m.media-amazon.com/images/I/71i+fVDV0nL._AC_UY1000_.jpg'
  },
  {
    title: 'Gold',
    description: 'The legends Watches',
    im:'https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_roseblack.jpg?v=1696689556&width=2400'
  },
  {
    title: 'FASTRACK',
    description: 'The legends Watches',
    im:'https://5.imimg.com/data5/YJ/QU/KQ/ANDROID-33576657/product-jpeg-500x500.jpg'
  },
  {
    title: 'TIMEWEAR',
    description: 'The legends Watches',
    im:'https://5.imimg.com/data5/SELLER/Default/2022/7/BG/WQ/KK/12752929/img-20220721-wa0003-500x500.jpg'
  },
  {
    title: 'TITAN',
    description: 'The legends Watches',
    im:'https://dev1-cdn.helioswatchstore.com/Stainless.jpg'
  },
  {
    title: 'TIMEX',
    description: 'The legends Watches',
    im:'https://m.media-amazon.com/images/I/41OxmRAhmBL._AC_SY780_.jpg'
  },
  {
    title: 'SONATA',
    description: 'The legends Watches',
    im:'https://i.pinimg.com/736x/9d/74/64/9d746482e3a74e08e25e1e15821584b7.jpg'
  },
  {
    title: 'ARIWATCH',
    description: 'The legends Watches',
    im:'https://5.imimg.com/data5/ANDROID/Default/2023/3/294569848/HV/FA/ZY/182970949/product-jpeg.jpg'
  },
  {
    title: 'SONATA',
    description: 'The legends Watches',
    im:'https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/w/d/1/1-lani-purple-color-queen-studded-magnet-watch-marclex-women-original-imaggjesq2hsbs3n.jpeg?q=90'
  },
  {
    title: 'FASTRACK',
    description: 'The legends Watches',
    im:'https://justintime.in/cdn/shop/products/FTW4069_7.jpg?v=1682022023&width=1946'
  },
  {
    title: 'TIMEX',
    description: 'The legends Watches',
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWAEVzrdwMkzQQpATfhUN403nkd15abhCpA&usqp=CAU'
   
  },
  {
    title: 'ARIWEAR',
    description: 'The legends Watchesr',
    im:'https://5.imimg.com/data5/HL/MZ/GC/ANDROID-108308050/prod-20200710-2004154313701476929063115-jpg-500x500.jpg'
  },
]

export default function Women() {

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
        
        <Button variant="primary">Add to Cart</Button>
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
         
  <br></br>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="card1">
                <div className="image-box">
                  <img 
                    src={
                      "https://5.imimg.com/data5/SELLER/Default/2021/12/UC/PH/CV/35897240/women-watch.jpg"
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
                      "https://cdn.shopclues.com/images1/thumbnails/109089/320/320/150550611-109089554-1651653901.jpg"
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
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-92vaMDrp8EmV5AI-UYU2_nU4oeOCNtdBQ&usqp=CAU"
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
              <div class="card2" style={{height:"500px"}}>
                <img
                  src={
                    "https://m.media-amazon.com/images/I/710WWx-RHlL._AC_UF1000,1000_QL80_.jpg"                  }
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
              <div class="card2" style={{height:"500px"}}>
                <img 
                  src={
                    "https://rukminim2.flixcart.com/image/850/1000/l09w8sw0/watch/z/k/d/-original-imagc3eyf2nhxhp7.jpeg?q=90&crop=false" 
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