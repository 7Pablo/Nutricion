'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Scroller() {
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.25; 

      if (imageRef.current) {
        imageRef.current.style.backgroundPositionY = `${-scrollY * speed}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSummary = () => {
    const target = document.getElementById('summary');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="start__scroller">
      <div className="start__scroller--image" ref={imageRef}></div>
      <div 
        className='start__scroller--mouse'
        onClick={() => scrollToSummary()}
      >
        <Image
          src="/icons/mouse.png"
          alt="Icono de mouse"
          height={40}
          width={40}
        />
      </div>
      <div 
        className='start__scroller--arrow'
        onClick={() => scrollToSummary()}
      >
        <Image
          src="/icons/arrow.png"
          alt="Icono de flecha"
          height={35}
          width={35}
        />
      </div>
    </div>
  );
}
