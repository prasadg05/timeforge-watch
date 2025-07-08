import Carousel from 'react-bootstrap/Carousel';

function Services() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="First slide"
            style={{ height: "800px", width: "100%", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1612831455546-bb55b8c1ebc6"
            alt="Second slide"
            style={{ height: "800px", width: "100%", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Third slide"
            style={{ height: "800px", width: "100%", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Prsent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Services;
