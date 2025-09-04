// Footer.jsx (Server component)

import { getTranslations } from "@/locales/translations";
import Image from "next/image";
import SocialButton from "../buttons/SocialButton";
import { getCurrentYear } from "@/utils/date";
import AnimatedSection from "@/utils/AnimatedSection";
import FooterLinks from "../FooterLinks";
import { getAssetPath } from "@/utils/getAssetPath";

export default async function Footer({lang}) {

    // Translations
    const locale = lang || 'en';
    const trans = await getTranslations(locale);

    // Year
    const currentYear = getCurrentYear();

    return (
        <div className="footer">
            <div className="footer__content">
                <AnimatedSection animation="riseFromBottom" delay={0.2}>
                    <div className="footer__top">
                        <div className="footer__top--logo">
                            <Image
                                src={getAssetPath("/logos/nutricion_logo.webp")}
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
                </AnimatedSection>
                <AnimatedSection animation="riseFromBottom" delay={0.4}>
                    <hr/>
                </AnimatedSection>
                <AnimatedSection animation="riseFromBottom" delay={0.6}>
                    <div className="footer__bottom">
                        <div className="footer__bottom--contact">
                            <h2>{trans.footer.contact}</h2>
                            <div className="footer__bottom--contact-items">
                                <div className="footer__bottom--contact-item">
                                    <Image
                                        src={getAssetPath("/icons/address.png")}
                                        alt="Icono contacto"
                                        width={25}
                                        height={25}
                                    />
                                    <p>Av. Juan Tanca Marengo y Calle 3</p>
                                </div>
                                <div className="footer__bottom--contact-item">
                                    <Image
                                        src={getAssetPath("/icons/phone.png")}
                                        alt="Icono contacto"
                                        width={25}
                                        height={25}
                                    />
                                    <p>02 436 822</p>
                                </div>
                                <div className="footer__bottom--contact-item">
                                    <Image
                                        src={getAssetPath("/icons/wpp.png")}
                                        alt="Icono contacto"
                                        width={25}
                                        height={25}
                                    />
                                    <p>0994 567 892</p>
                                </div>
                                <div className="footer__bottom--contact-item">
                                    <Image
                                        src={getAssetPath("/icons/mail.png")}
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
                            <FooterLinks trans={trans} />
                        </div>
                        <div className="footer__bottom--social">
                            <h2>{trans.footer.social}</h2>
                            <div className="footer__bottom--social-items">
                                <SocialButton
                                    icon={getAssetPath("/icons/instagram.png")}
                                    text="María Gracia Yturralde"
                                    link="https://www.google.com/"
                                />
                                <SocialButton
                                    icon={getAssetPath("/icons/facebook.png")}
                                    text="María Gracia Yturralde"
                                    link="https://www.google.com/"
                                />
                                <SocialButton
                                    icon={getAssetPath("/icons/tiktok.png")}
                                    text="María Gracia Yturralde"
                                    link="https://www.google.com/"
                                />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fadeInScale" delay={0.6}>
                    <div className="footer__copyright">
                        <p>@{currentYear} María Gracia Yturralde - Nutricionista. {trans.footer.copyright}</p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
