import Carousel from 'react-bootstrap/Carousel';
function Aboutus() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="Slide 1"
            style={{ height: "800px", width: "100%", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Discover elegant timepieces that define your style.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1519741491044-402f6d8d3a8e"
            alt="Slide 2"
            style={{ height: "800px", width: "100%", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Precision and luxury combined in one perfect watch.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1588776814546-1f69397ebfdc"
            alt="Slide 3"
            style={{ height: "800px", width: "100%", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Redefining timeless beauty and craftsmanship.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Aboutus;
