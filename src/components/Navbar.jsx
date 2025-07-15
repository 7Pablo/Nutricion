// Navbar.js (Server component)

import ToggleButton from "./buttons/ToggleButton";
import { getTranslations } from "@/locales/translations";
import HamDropdown from "./buttons/HamDropdown";
import NavbarButton from "./buttons/NavbarButton";

export default async function Navbar({lang}) {

    // Translations
    const locale = lang || 'en';
    const trans = await getTranslations(locale);

    return (
        <div className="navbar">
            <div className="navbar__content">
                <NavbarButton trans={trans} />
                <div className="navbar__items">
                    <a href="#start"><span className="nav-inner">Start</span></a>
                    <a href="#about"><span className="nav-inner">About</span></a>
                    <a href="#services"><span className="nav-inner">Services</span></a>
                    <a href="#contact"><span className="nav-inner">Contact</span></a>
                </div>
                <ToggleButton lang={lang} />
                <HamDropdown 
                    trans={trans}
                    lang={lang}
                />
            </div>
        </div>
    );
}