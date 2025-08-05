'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Scroller() {
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.3; 

      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="start__scroller">
      <div className="start__scroller--image" ref={imageRef}>
        <Image
          src="/images/fruits.png"
          alt="Fondo de frutas"
          height={600}
          width={600}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
