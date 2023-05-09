import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Testimonials() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              src="./mypicture6.jpg"
              style={{ objectFit: "cover", height: "16rem" }}
            />
            <Card.Body>
              <Card.Title>Reekado</Card.Title>
              <Card.Text>Enjoy my life using the mobile application</Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              src="./myPicture2.jpg"
              style={{ objectFit: "cover", height: "16rem" }}
            />
            <Card.Body>
              <Card.Title>Jack Edward</Card.Title>
              <Card.Text>It a perfect application</Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              src="./mypicture3.jpg"
              style={{ objectFit: "cover", height: "16rem" }}
            />
            <Card.Body>
              <Card.Title>George</Card.Title>
              <Card.Text>We are going for the best</Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              src="./mypicture5.jpg"
              style={{ objectFit: "cover", height: "16rem" }}
            />
            <Card.Body>
              <Card.Title>Osihmen</Card.Title>
              <Card.Text>The best application I have even used</Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              src="./myPicture4.jpg"
              style={{ objectFit: "cover", height: "16rem" }}
            />
            <Card.Body>
              <Card.Title>Micheals</Card.Title>
              <Card.Text>Life is sweeter when you have an ally</Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
