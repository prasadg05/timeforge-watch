import React from "react";
// import '../Css/Stores.css'
import "swiper/css";
import "../Css/Stores.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../Components/img/11.jpg";
import profilePic2 from "../Components/img/13.jpg";
import profilePic3 from "../Components/img/17.jpg";
import profilePic4 from "../Components/img/19.jpg";

const Stores = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Titan Company Limited is an Indian company that mainly manufactures luxury fashion accessories such as jewellery, watches and eyewear. Part of the Tata Group and started as a joint venture with the TIDCO, the company has its corporate headquarters in Electronic City, Bangalore,[7] and registered office in Hosur, Tamil Nadu.In 2001, Titan launched the kids’ watch brand, Dash. The brand saw poor performance and was discontinued in 2003.[19] In 2004, the company agreed with Moet Hennessy Louis Vuitton Group, to service the latter's range of watches in India through its customer care centres.[20] In 2005, Fastrack was positioned as an independent accessory brand targeting the urban youth. To become a fashion brand, Fastrack launched sunglasses in the same year and launched bags, belts and wallets in 2009  ",
    },
    {
      img: profilePic2,
      review:
        "Imagine Marketing (boAt) is a digital-first consumer products company and one of the largest Indian digital-first brands in terms of revenue from operations for the financial year 2021. It was founded in 2013 and is led by its flagship brand “boAt” which was launched in 2014. It has products in various segments.In 2001, Titan launched the kids’ watch brand, Dash. The brand saw poor performance and was discontinued in 2003.[19] In 2004, the company agreed with Moet Hennessy Louis Vuitton Group, to service the latter's range of watches in India through its customer care centres.[20] In 2005, Fastrack was positioned as an independent accessory brand targeting the urban youth. To become a fashion brand, Fastrack launched sunglasses in the same year and launched bags, belts and wallets in 2009",
    },
    {
      img: profilePic3,
      review:
        "Fastrack is an Indian fashion accessory retail brand, launched in 1998 as a sub-brand of Titan Watches. In 2005, Fastrack was spun off as an independent brand targeting the urban youth and growing fashion industry in India.[1] Fastrack began opening retail stores throughout the country. The first store was opened in early 2009.In 2001, Titan launched the kids’ watch brand, Dash. The brand saw poor performance and was discontinued in 2003.[19] In 2004, the company agreed with Moet Hennessy Louis Vuitton Group, to service the latter's range of watches in India through its customer care centres.[20] In 2005, Fastrack was positioned as an independent accessory brand targeting the urban youth. To become a fashion brand, Fastrack launched sunglasses in the same year and launched bags, belts and wallets in 2009",
    },
    {
      img: profilePic4,
      review:
        "Timewear strives to provide accuracy and quality everytime through timepiecesthat have an everlasting style such as the ones in this collection.These watches reflect the whole Indian watch industry,also known for its precision and timing.In 2001, Titan launched the kids’ watch brand, Dash. The brand saw poor performance and was discontinued in 2003.[19] In 2004, the company agreed with Moet Hennessy Louis Vuitton Group, to service the latter's range of watches in India through its customer care centres.[20] In 2005, Fastrack was positioned as an independent accessory brand targeting the urban youth. To become a fashion brand, Fastrack launched sunglasses in the same year and launched bags, belts and wallets in 2009",
    },
  ];

  return (
    <>
    


    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>TIMEFORGE GIVES THE </span>
        <span> BEST WATCHES </span>
        <span>FOR CLIENT.</span>
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
                <span style={{ color: "white" }}>
                  {" "}
                  <br></br> <br></br> <br></br> {client.review}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </>
  );
};

export default Stores;
