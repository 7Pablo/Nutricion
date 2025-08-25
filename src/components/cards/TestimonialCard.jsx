// TestimonialCard.jsx (Server component)
import Image from "next/image";

export default function TestimonialCard({ img, alt, name, time, body, position }) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-card__top">
                <div className="testimonial-card__top--image">
                    <Image
                        src={img}
                        alt={alt}
                        height={65}
                        width={65}
                        style={{ objectPosition: position }}
                    />
                </div>
                <div className="testimonial-card__top--text">
                    <h2>{name}</h2>
                    <h3>{time}</h3>
                </div>
            </div>
            <hr />
            <div className="testimonial-card__bottom">
                <p>{body}</p>
            </div>
        </div>
    );
}