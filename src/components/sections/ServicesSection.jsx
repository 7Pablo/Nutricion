// ServicesSection.jsx (Client component)
'use client';

import { useState, useEffect, useRef } from "react";
import DoubleButton from "@/components/buttons/DoubleButton";
import Slider from "@/components/Slider";
import Image from "next/image";
import AnimatedSection from "@/utils/AnimatedSection";

export default function ServicesSection({ trans, all, business }) {
    // Estado del boton
    const [active, setActive] = useState("all");

    // Refs para el paralax
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        let leftStart = 0;
        let rightStart = 0;

        if (leftRef.current) {
            leftStart = leftRef.current.getBoundingClientRect().top + window.scrollY;
        }
        if (rightRef.current) {
            rightStart = rightRef.current.getBoundingClientRect().top + window.scrollY;
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (leftRef.current) {
            leftRef.current.style.transform = `translateY(${(scrollY - leftStart) * 0.2}px)`;
            }

            if (rightRef.current) {
            rightRef.current.style.transform = `translateY(${(scrollY - rightStart) * -0.2}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="services" className="services">
            <div className="services__wrapper"> 
                <div className="services__content">
                    <AnimatedSection animation="fadeInUp" delay={0.2}>
                        <div className="services__text">
                          <h3>{trans.services.top}</h3>
                          <h2>{trans.services.center}</h2>
                          <h4>{trans.services.bottom}</h4>
                        </div>
                    </AnimatedSection>
                    <DoubleButton trans={trans} active={active} setActive={setActive} />
                    {active === "all" ? (
                        <AnimatedSection animation="bouncyRise" delay={0.2}>
                            <Slider slides={all} />
                        </AnimatedSection>
                    ) : (
                        <AnimatedSection animation="bouncyRise" delay={0.2}>
                            <Slider slides={business} />
                        </AnimatedSection>
                    )}
                </div>
                <div className="services__decoration">
                    <div ref={leftRef} className="services__decoration--left">
                        <Image
                            src="/images/fruits-left.png"
                            alt="Fondo de frutas"
                            height={600}
                            width={600}
                        />
                    </div>
                    <div ref={rightRef} className="services__decoration--right">
                        <Image
                            src="/images/fruits-right.png"
                            alt="Fondo de frutas"
                            height={600}
                            width={600}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
