import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      name:"Javascript",
      review:"I have completed javacourse from sclaer ",
      link:"https://moonshot.scaler.com/s/sl/UyeRHB6yn9?_gl=1*158p6mx*_ga*NzQ1OTM0MDA2LjE3MDMxNjc4MDc.*_ga_53S71ZZG1X*MTcwNTA1NDkzMS4yMi4xLjE3MDUwNTQ5ODIuMC4wLjA."

    },
    {
      name:"Chegg Expert",
      review:"I am an expert of math in Chegg ",
      link:"https://drive.google.com/file/d/1WYBouevZUYFZWM_y2vsZ3NtBC7UXTs7c/view?usp=drive_link"
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Certificates </span>
        <span>And </span>
        <span>Experiences</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
 
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
                <span>{client.name}</span>
                <span>{client.review}</span>
                <button className="button" onClick={()=>{window.open(client.link, '_blank');}}>Check</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
