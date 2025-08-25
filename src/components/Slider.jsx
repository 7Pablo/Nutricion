// Slider.jsx (Client side)
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ServiceCard from './cards/ServiceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Slider({ slides }) {
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(3);
            }
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.params.slidesPerView = slidesPerView;
            swiperRef.current.update();
        }
    }, [slidesPerView]);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(0, 0); 
        }
    }, [slides]);

    return (
        <div className='slider'>
            <div className="slider__button--prev">
                <ChevronLeft size={50} />
            </div>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={slidesPerView}
                spaceBetween={10}
                centeredSlides={slidesPerView > 1}
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
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="slider__slide-inner">
                        <ServiceCard
                        img={slide.img}
                        alt={slide.alt}
                        title={slide.title}
                        body={slide.body}
                        time={slide.time}
                        format={slide.format}
                        />
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
            <div className="slider__button--next">
                <ChevronRight size={50} /> 
            </div>
        </div>
    );
}