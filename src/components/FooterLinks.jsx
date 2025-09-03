'use client';

import { smoothScroll } from '@/utils/smoothScroll';

export default function FooterLinks({ trans }) {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    smoothScroll(targetId, 1000);
  };

  return (
    <div className="footer__bottom--links-items">
      {['start', 'about', 'services', 'testimonials', 'contact'].map((id) => (
        <div key={id} className="footer__bottom--links-item">
          <div className="footer__bottom--links-line"></div>
          <p onClick={(e) => handleClick(e, id)}>{trans.navbar[id]}</p>
        </div>
      ))}
    </div>
  );
}
