// DoubleButton.jsx (Client component)
'use client';

import { useState } from 'react';

export default function DoubleButton({ trans }) {
  const [active, setActive] = useState('all'); 

  return (
    <div className="double-button">
      <button
        className={`double-button__button ${active === 'all' ? 'active' : ''}`}
        onClick={() => setActive('all')}
      >
        <p>{trans.buttons.all}</p>
      </button>
      <button
        className={`double-button__button ${active === 'business' ? 'active' : ''}`}
        onClick={() => setActive('business')}
      >
        <p>{trans.buttons.business}</p>
      </button>
    </div>
  );
}
