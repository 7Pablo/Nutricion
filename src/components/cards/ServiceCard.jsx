// ServiceCard.jsx (Server side)

import Image from "next/image";
import { MessagesSquare, Clock } from "lucide-react";

export default function ServiceCard({ img, alt, title, body, time, format }) {
    return (
        <div className="service-card">
            <Image
                src={img}
                alt={alt}
                fill
                style={{ objectFit: "cover" }}
            />
            <div className="service-card__text">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div className="service-card__bottom">
                <div className="service-card__bottom--item">
                    <Clock size={32} color="#477FCA" strokeWidth={2} />
                    <p>{time}</p>
                </div>
                <div className="service-card__bottom--item">
                    <MessagesSquare size={32} color="#477FCA" strokeWidth={2} />
                    <p>{format}</p>
                </div>
            </div>
        </div>
    );
}
