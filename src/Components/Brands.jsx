import React from "react";
// import '../Css/Stores.css'
import "swiper/css";
import "../Css/Stores.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../Components/img/100.jpg";
import profilePic2 from "../Components/img/101.jpg";
import profilePic3 from "../Components/img/102.jpg";
import profilePic4 from "../Components/img/104.jpg";

const Brands = () => {
  const clients = [
    {
      img: profilePic1
      
    },
    {
      img: profilePic2
      
    },
    {
      img: profilePic3
      
        
    },
    {
      img: profilePic4
      
        
    },
  ];

  return (
    <>
    


    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>TIMEFORGE </span>
        <span> BRANDS </span>
        <span>FOR CUSTOMERS.</span>
        <br>

       
            
        </br>
        
        <div className="prasad"></div>
        <div className="gahiwal"></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img
                  style={{ height: "300px", width: "500px" }}
                  src={client.img}
                  alt=""
                />
              
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </>
  );
};

export default Brands;
