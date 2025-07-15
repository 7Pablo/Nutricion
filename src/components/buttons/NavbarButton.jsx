// NvbarButton.jsx (Client component)
'use client';

import Image from "next/image";

export default function NavbarButton({trans}) {

    // Refresh the page
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div 
            className="navbar__button"
            onClick={handleRefresh} 
        >
            <div className="navbar__logo">
                <Image
                    src="/logos/nutricion_logo.webp"
                    alt="Maria Gracia Yturralde - Nutricionista Logo"
                    priority
                    width={200}
                    height={200}
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className="navbar__button--text">
                <h2>María Gracia Yturralde</h2>
                <h3>{trans.navbar.button}</h3>
            </div>
        </div>
    );
}