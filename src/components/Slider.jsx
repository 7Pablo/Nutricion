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

export default function Slider({ trans, slides }) {
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
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        if (index < slides.length / 2) {
                        return `<span class="${className}"></span>`;
                        }
                        return '';
                    },
                }}
                onSlideChange={(swiper) => {
                    const realCount = slides.length / 2; // Math.floor(slides.length/2)
                    const realIndex = swiper.realIndex % realCount; 
                    const bullets = swiper.pagination.bullets;
                    bullets.forEach((b) => b.classList.remove('swiper-pagination-bullet-active'));

                    if (bullets[realIndex]) {
                        bullets[realIndex].classList.add('swiper-pagination-bullet-active');
                    }
                }}
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
                            bodyLong={slide.bodyLong}
                            time={slide.time}
                            format={slide.format}
                            button={trans.buttons.contact}
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