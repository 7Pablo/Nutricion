"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import AnimatedSection from "@/utils/AnimatedSection";

import TestimonialCard from "./cards/TestimonialCard";

export default function TestimonialCarousel({ testimonials }) {
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Arrays repetidos
  const repeatedTestimonials= [...testimonials, ...testimonials]; 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.slidesPerView = slidesPerView;
      swiperRef.current.update();
    }
  }, [slidesPerView]);

  return (
    <div className="testimonial-carousel">
      <AnimatedSection animation="tickerFadeInUp" delay={0.2}>
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={0}
          centeredSlides={slidesPerView > 1}
          loop={true}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: true,
          }}
          navigation={{
            prevEl: ".testimonial-carousel__buttons--prev",
            nextEl: ".testimonial-carousel__buttons--next",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {repeatedTestimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard
                img={testimonial.img}
                alt={testimonial.alt}
                name={testimonial.name}
                time={testimonial.time}
                body={testimonial.body}
                position={testimonial.position}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatedSection>
      
      <div className="testimonial-carousel__buttons">
        <AnimatedSection animation="bouncingBall" delay={0.2}>
          <div className="testimonial-carousel__buttons--prev">
            <ChevronLeft size={40} />
          </div>
        </AnimatedSection>
        <AnimatedSection animation="bouncingBall" delay={0.4}>
          <div className="testimonial-carousel__buttons--next">
            <ChevronRight size={40} />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
