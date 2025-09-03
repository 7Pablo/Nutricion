// SocialButton.jsx (Client component)
'use client';

import Image from "next/image";

export default function SocialButton({ icon, text, link }) {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button"
        >
            <Image
                src={icon}
                alt="Icono red social"
                width={25}
                height={25}
            /> 
            <p>{text}</p>
        </a>
    );
}
