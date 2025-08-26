import Marquee from "react-fast-marquee";
import TestimonialCard from "./cards/TestimonialCard";

export default function TestimonialTicker({ testimonials }) {
  const repeatedTestimonials = [...testimonials, ...testimonials]; 

  return (
    <Marquee gradient={false} speed={20} pauseOnHover={true} autoFill={true} className="ticker">
      {repeatedTestimonials.map((testimonial, i) => (
        <div key={i}>
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
