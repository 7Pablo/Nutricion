import Image from "next/image";

export default function BenefitCard( {img, alt, title, body} ) {
    return (
        <div className="benefit-card">
            <Image 
                src={img}
                alt={alt}
                height={60}
                width={60}
            />
            <div className="benefit-card__text">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
}
