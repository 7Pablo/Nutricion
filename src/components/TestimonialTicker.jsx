import Marquee from "react-fast-marquee";
import TestimonialCard from "./cards/TestimonialCard";

export default function TestimonialTicker({ testimonials }) {
  return (
    <Marquee gradient={false} speed={20}>
      {testimonials.map((testimonial, i) => (
        <div key={i} style={{ marginRight: "40px" }}>
          <TestimonialCard
            img={testimonial.img}
            alt={testimonial.alt}
            name={testimonial.name}
            time={testimonial.time}
            body={testimonial.body}
            position={testimonial.position}
          />
        </div>
      ))}
    </Marquee>
  );
}
