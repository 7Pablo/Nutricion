// Footer.jsx (Server component)

import { getTranslations } from "@/locales/translations";
import Image from "next/image";
import SocialButton from "../buttons/SocialButton";
import { getCurrentYear } from "@/utils/date";

export default async function Footer({lang}) {

    // Translations
    const locale = lang || 'en';
    const trans = await getTranslations(locale);

    // Year
    const currentYear = getCurrentYear();

    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__top">
                    <div className="footer__top--logo">
                        <Image
                            src="/logos/nutricion_logo.webp"
                            alt="Maria Gracia Yturralde - Nutricionista Logo"
                            priority
                            width={200}
                            height={200}
                            style={{ objectFit: "contain" }}
                        />
                        <div className="footer__top--logo-text">
                            <h2>María Gracia Yturralde</h2>
                            <h3>{trans.navbar.button}</h3>
                        </div>
                    </div>
                    <p>{trans.footer.top}</p>
                </div>
                <hr/>
                <div className="footer__bottom">
                    <div className="footer__bottom--contact">
                        <h2>{trans.footer.contact}</h2>
                        <div className="footer__bottom--contact-items">
                            <div className="footer__bottom--contact-item">
                                <Image
                                    src="/icons/address.png"
                                    alt="Icono contacto"
                                    width={25}
                                    height={25}
                                />
                                <p>Av. Juan Tanca Marengo y Calle 3</p>
                            </div>
                            <div className="footer__bottom--contact-item">
                                <Image
                                    src="/icons/phone.png"
                                    alt="Icono contacto"
                                    width={25}
                                    height={25}
                                />
                                <p>02 436 822</p>
                            </div>
                            <div className="footer__bottom--contact-item">
                                <Image
                                    src="/icons/wpp.png"
                                    alt="Icono contacto"
                                    width={25}
                                    height={25}
                                />
                                <p>0994 567 892</p>
                            </div>
                            <div className="footer__bottom--contact-item">
                                <Image
                                    src="/icons/mail.png"
                                    alt="Icono contacto"
                                    width={25}
                                    height={25}
                                />
                                <p>mail@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom--links">
                        <h2>{trans.footer.links}</h2>
                        <div className="footer__bottom--links-items">
                            <div className="footer__bottom--links-item">
                                <div className="footer__bottom--links-line"></div>
                                <p>{trans.navbar.start}</p>
                            </div>
                            <div className="footer__bottom--links-item">
                                <div className="footer__bottom--links-line"></div>
                                <p>{trans.navbar.about}</p>
                            </div>
                            <div className="footer__bottom--links-item">
                                <div className="footer__bottom--links-line"></div>
                                <p>{trans.navbar.services}</p>
                            </div>
                            <div className="footer__bottom--links-item">
                                <div className="footer__bottom--links-line"></div>
                                <p>{trans.navbar.testimonials}</p>
                            </div>
                            <div className="footer__bottom--links-item">
                                <div className="footer__bottom--links-line"></div>
                                <p>{trans.navbar.contact}</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom--social">
                        <h2>{trans.footer.social}</h2>
                        <div className="footer__bottom--social-items">
                            <SocialButton
                                icon="/icons/instagram.png"
                                text="María Gracia Yturralde"
                                link="https://www.google.com/"
                            />
                            <SocialButton
                                icon="/icons/facebook.png"
                                text="María Gracia Yturralde"
                                link="https://www.google.com/"
                            />
                            <SocialButton
                                icon="/icons/tiktok.png"
                                text="María Gracia Yturralde"
                                link="https://www.google.com/"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="footer__copyright">
                    <p>@{currentYear} María Gracia Yturralde - Nutricionista. {trans.footer.copyright}</p>
                </div>
            </div>
        </div>
    );
}
