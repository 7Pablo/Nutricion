'use client';

import { smoothScroll } from '@/utils/smoothScroll';

export default function Button({
  type = "primary",
  children,
  scrollTo,  
  href,      
}) {

  const handleClick = (e) => {
    if (scrollTo) {
      e.preventDefault();
      smoothScroll(scrollTo, 1000); 
    } else if (href) {
      window.open(href, "_blank"); 
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`button--${type}`}
    >
      <span className="button__text">{children}</span>
    </button>
  );
}
