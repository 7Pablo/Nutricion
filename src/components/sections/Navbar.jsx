// Navbar.jsx (Server component)

import ToggleButton from "../buttons/ToggleButton";
import { getTranslations } from "@/locales/translations";
import HamDropdown from "../buttons/HamDropdown";
import NavbarButton from "../buttons/NavbarButton";
import NavbarLinks from "../NavbarLinks";

export default async function Navbar({lang}) {

    // Translations
    const locale = lang || 'en';
    const trans = await getTranslations(locale);

    return (
        <div className="navbar">
            <div className="navbar__content">
                <NavbarButton trans={trans} />
                <NavbarLinks trans={trans} />
                <ToggleButton lang={lang} />
                <HamDropdown 
                    trans={trans}
                    lang={lang}
                />
            </div>
        </div>
    );
}