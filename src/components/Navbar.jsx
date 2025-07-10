// Navbar.js (Client component)

import Image from "next/image";
import ToggleButton from "./buttons/ToggleButton";
import { getTranslations } from "@/locales/translations";

export default async function Navbar({lang}) {

    // Translations
    const locale = lang || 'en';
    const trans = await getTranslations(locale);

    return (
        <div className="navbar">
            <div className="navbar__button">
                <Image
                    src="/logos/nutricion_logo.webp"
                    alt="Maria Gracia Yturralde - Nutricionista Logo"
                    priority
                    width={200}
                    height={200}   
                    style={{ objectFit: "contain" }}
                />
                <div className="navbar__button--text">
                    <h1>María Gracia Yturralde</h1>
                    <h2>{trans.navbar.button}</h2>
                </div>
            </div>
            <div className="navbar__items">
                <a href="#start">{trans.navbar.start}</a>
                <a href="#about">{trans.navbar.about}</a>
                <a href="#services">{trans.navbar.services}</a>
                <a href="#contact">{trans.navbar.contact}</a>
            </div>
            <ToggleButton lang={lang}/>
        </div>
    );
}