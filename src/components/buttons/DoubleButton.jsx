// DoubleButton.jsx (Client component)
'use client';

export default function DoubleButton({ trans, active, setActive }) {
    return (
        <div className="double-button">
            <button
                className={`double-button__button ${active === "all" ? "active" : ""}`}
                onClick={() => setActive("all")}
            >
              <p>{trans.buttons.all}</p>
            </button>
            <button
                className={`double-button__button ${active === "business" ? "active" : ""}`}
                onClick={() => setActive("business")}
            >
              <p>{trans.buttons.business}</p>
            </button>
        </div>
    );
}
