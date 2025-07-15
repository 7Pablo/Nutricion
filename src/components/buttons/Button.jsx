// Button.jsx (Client component)
'use client';

export default function Button({
    type = "primary",
    children,
}) {
    
    return (
        <button 
            className={`button--${type}`}
        >
            <span className="button__text">{children}</span>
        </button>
    );
}