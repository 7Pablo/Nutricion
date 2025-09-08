'use client';

import { smoothScroll } from '@/utils/smoothScroll';

export default function Button({
  type = "primary",
  children,
  scrollTo,  
  href,      
  onClick
}) {

  const handleClick = (e) => {
    if (scrollTo) {
      e.preventDefault();
      smoothScroll(scrollTo, 1000); 
    } else if (href) {
      e.preventDefault();
      window.open(href, "_blank"); 
    }

    if (onClick) {
      onClick(e);
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
