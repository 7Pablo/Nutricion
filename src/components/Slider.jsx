// Slider.jsx (Client side)
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ServiceCard from './cards/ServiceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slider({ slides }) {
    return (
        <div className='slider'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={10} 
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 8000, 
                    disableOnInteraction: true,
                }}
                navigation={{
                    nextEl: '.slider__button--next',  
                    prevEl: '.slider__button--prev',  
                }}
                pagination={{ clickable: true }}
            >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <ServiceCard
                        img={slide.img}
                        alt={slide.alt}
                        title={slide.title}
                        body={slide.body}
                        time={slide.time}
                        format={slide.format}
                    />
                </SwiperSlide>
            ))}
            </Swiper>
            <div className="slider__button--prev">
                <ChevronLeft size={32} />
            </div>
            <div className="slider__button--next">
                <ChevronRight size={32} /> 
            </div>
        </div>
    );
}