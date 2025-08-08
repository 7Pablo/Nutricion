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
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; 
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
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
