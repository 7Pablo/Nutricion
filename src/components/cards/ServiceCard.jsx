import Image from "next/image";

export default function ServiceCard( {img, alt, title, body} ) {
    return (
        <div className="service-card">
            <Image 
                src={img}
                alt={alt}
                height={60}
                width={60}
            />
            <div className="service-card__text">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
}
