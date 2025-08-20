// DoubleButton.jsx (Client component)
'use client';

import AnimatedSection from "@/utils/AnimatedSection";

export default function DoubleButton({ trans, active, setActive }) {
    return (
        <div className="double-button">
            <AnimatedSection animation="slideFromLeft" delay={0.2}>
                <button
                    className={`double-button__button ${active === "all" ? "active" : ""}`}
                    onClick={() => setActive("all")}
                >
                  <p>{trans.buttons.all}</p>
                </button>
            </AnimatedSection>
            <AnimatedSection animation="slideFromRight" delay={0.2}>
                <button
                    className={`double-button__button ${active === "business" ? "active" : ""}`}
                    onClick={() => setActive("business")}
                >
                  <p>{trans.buttons.business}</p>
                </button>
            </AnimatedSection>
        </div>
    );
}
