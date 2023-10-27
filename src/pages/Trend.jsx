import React from "react";
import "./trend.css";
import TrendCard from "../components/TrendCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { useState } from "react";
import { useEffect } from "react";

function Trend() {
  const [slides, setSlides] = useState([]);
  const fetchData = async () => {
    await fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((eror) => console.log(eror.message));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="trend" id="trend">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Coming Soon</h4>
        </div>
        <div className="row">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="trendSwiper"
          >
            {slides &&
              slides.length > 0 &&
              slides.map((slide) => (
                <SwiperSlide key={slide._id}>
                  <TrendCard slide={slide} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Trend;
