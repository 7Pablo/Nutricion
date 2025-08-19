// ServicesSection.jsx (Client component)
'use client';

import { useState } from "react";
import DoubleButton from "@/components/buttons/DoubleButton";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function ServicesSection({ trans, all, business }) {
    const [active, setActive] = useState("all");

    return (
        <section id="services" className="services">
            <div className="services__content">
                <div className="services__text">
                  <h3>{trans.services.top}</h3>
                  <h2>{trans.services.center}</h2>
                  <h4>{trans.services.bottom}</h4>
                </div>
                <DoubleButton trans={trans} active={active} setActive={setActive} />
                {active === "all" ? (
                    <Slider slides={all} />
                ) : (
                    <Slider slides={business} />
                )}
            </div>

            <div className="services__decoration">
                <div className="services__decoration--left">
                    <Image
                    src="/images/fruits-left.png"
                    alt="Fondo de frutas"
                    height={600}
                    width={600}
                    />
                </div>
                <div className="services__decoration--right">
                    <Image
                    src="/images/fruits-right.png"
                    alt="Fondo de frutas"
                    height={600}
                    width={600}
                    />
                </div>
            </div>
        </section>
    );
}
