// page.js (LandingPage/Server component)

import { getTranslations } from "@/locales/translations";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import Scroller from "@/components/Scroller";
import ServiceCard from "@/components/cards/BenefitCard";
import AnimatedSection from "@/utils/AnimatedSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialTicker from "@/components/TestimonialTicker";

// LandingPage
export default async function LandingPage({params}) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    // Services
    const all = [
       {
        img: "/pictures/service1.jpg",
        alt: "Programa de bienestar general",
        title: trans.services.card_title1,
        body: trans.services.card_body1,
        time: `4 ${trans.services.weeks}`,
        format: trans.services.format,
       },
       {
        img: "/pictures/service2.jpg",
        alt: "Asesoría nutricional",
        title: trans.services.card_title2,
        body: trans.services.card_body2,
        time: "60 min",
        format: `${trans.services.format}/Online`,
       },
       {
        img: "/pictures/service3.jpg",
        alt: "Plan de nutrición hormonal",
        title: trans.services.card_title3,
        body: trans.services.card_body3,
        time: `30 ${trans.services.days}`,
        format: "Online",
       },
       {
        img: "/pictures/service1.jpg",
        alt: "Programa de bienestar general",
        title: trans.services.card_title1,
        body: trans.services.card_body1,
        time: `4 ${trans.services.weeks}`,
        format: trans.services.format,
       },
       {
        img: "/pictures/service3.jpg",
        alt: "Plan de nutrición hormonal",
        title: trans.services.card_title3,
        body: trans.services.card_body3,
        time: `30 ${trans.services.days}`,
        format: "Online",
       }
    ];

    const business = [
       {
        img: "/pictures/service1.jpg",
        alt: "Programa de bienestar general",
        title: trans.services.card_title1,
        body: trans.services.card_body1,
        time: `4 ${trans.services.weeks}`,
        format: trans.services.format,
       },
       {
        img: "/pictures/service1.jpg",
        alt: "Programa de bienestar general",
        title: trans.services.card_title1,
        body: trans.services.card_body1,
        time: `4 ${trans.services.weeks}`,
        format: trans.services.format,
       },
       {
        img: "/pictures/service1.jpg",
        alt: "Programa de bienestar general",
        title: trans.services.card_title1,
        body: trans.services.card_body1,
        time: `4 ${trans.services.weeks}`,
        format: trans.services.format,
       },
       {
        img: "/pictures/service1.jpg",
        alt: "Programa de bienestar general",
        title: trans.services.card_title1,
        body: trans.services.card_body1,
        time: `4 ${trans.services.weeks}`,
        format: trans.services.format,
       },
       {
        img: "/pictures/service1.jpg",
        alt: "Programa de bienestar general",
        title: trans.services.card_title1,
        body: trans.services.card_body1,
        time: `4 ${trans.services.weeks}`,
        format: trans.services.format,
       }
    ];

    const testimonials = [
      {
        img: "/pictures/testimonial1.jpeg",
        alt: "Testimonio Laura Méndez",
        name: "Laura Méndez",
        time: `${trans.testimonials.patient1} 2023`,
        body: `${trans.testimonials.testimonial1}`,
        position: "50% 50%"
      },
      {
        img: "/pictures/testimonial2.jpg",
        alt: "Testimonio Carlos Ríos",
        name: "Carlos Ríos",
        time: `${trans.testimonials.patient2}`,
        body: `${trans.testimonials.testimonial2}`,
        position: "50% 50%"
      },
      {
        img: "/pictures/testimonial3.webp",
        alt: "Testimonio Valentina Ortiz",
        name: "Valentina Ortiz",
        time: `${trans.testimonials.patient1} 2020`,
        body: `${trans.testimonials.testimonial3}`,
        position: "50% 50%"
      }
    ];

    return (
        <div className="landing-page">

          {/* Start */}
          <section id="start" className="start">
            <div className="start__content">
              <div className="start__left">
                <div className="start__left--container">
                  <div className="start__left--text">
                    <h1>{trans.start.title}</h1>
                    <h2>{trans.start.subtitle}</h2>
                  </div>
                  <Button type="primary">
                    {trans.buttons.begin}
                  </Button>
                </div>
              </div>
              <div className="start__right">
                <Image 
                  src="/pictures/start-picture.png"
                  alt="Imagen de Maria Gracia Yturralde"
                  height={500}
                  width={500}
                />
                <div className="start__right--overlay"/>
              </div>

              {/* Decoration */}
              <div className="start__decoration">
                <div className="start__decoration--balls-1">
                  <Image
                    src="/images/purple-balls.png"
                    alt="Fondo de formas moradas"
                    height={600}
                    width={600}
                  />
                </div>
                <div className="start__decoration--balls-2">
                  <Image
                    src="/images/purple-balls.png"
                    alt="Fondo de formas moradas"
                    height={600}
                    width={600}
                  />
                </div>
              </div>

              {/* Background */}
              <div className="start__background">
                <div className="start__background--fruit-1">
                  <Image
                    src="/images/leaf-one2.png"
                    alt="Hoja verde"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="start__background--fruit-2">
                  <Image
                    src="/images/leaf-one1.png"
                    alt="Hoja verde"
                    height={45}
                    width={45}
                  />
                </div>
                <div className="start__background--fruit-3">
                  <Image
                    src="/images/leaf-one2.png"
                    alt="Hoja verde"
                    height={35}
                    width={35}
                  />
                </div>
                <div className="start__background--fruit-4">
                  <Image
                    src="/images/blue1.png"
                    alt="Mora azul"
                    height={80}
                    width={80}
                  />
                </div>
                <div className="start__background--fruit-5">
                  <Image
                    src="/images/leaf-three1.png"
                    alt="Hoja verde"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="start__background--fruit-6">
                  <Image
                    src="/images/blue2.png"
                    alt="Mora azul"
                    height={80}
                    width={80}
                  />
                </div>
                <div className="start__background--fruit-7">
                  <Image
                    src="/images/red.png"
                    alt="Frambuesa"
                    height={60}
                    width={60}
                  />
                </div>
                <div className="start__background--fruit-8">
                  <Image
                    src="/images/leaf-three2.png"
                    alt="Hoja verde"
                    height={90}
                    width={90}
                  />
                </div>
                <div className="start__background--fruit-9">
                  <Image
                    src="/images/leaf-one1.png"
                    alt="Hoja verde"
                    height={45}
                    width={45}
                  />
                </div>
                <div className="start__background--fruit-10">
                  <Image
                    src="/images/red.png"
                    alt="Frambuesa"
                    height={80}
                    width={80}
                  />
                </div>
                <div className="start__background--fruit-11">
                  <Image
                    src="/images/blue1.png"
                    alt="Mora azul"
                    height={40}
                    width={40}
                  />
                </div>
                <div className="start__background--fruit-12">
                  <Image
                    src="/images/leaf-three2.png"
                    alt="Hoja verde"
                    height={75}
                    width={75}
                  />
                </div>
                <div className="start__background--fruit-13">
                  <Image
                    src="/images/blue3.png"
                    alt="Mora azul"
                    height={80}
                    width={80}
                  />
                </div>
                <div className="start__background--fruit-14">
                  <Image
                    src="/images/leaf-two.png"
                    alt="Hoja verde"
                    height={75}
                    width={75}
                  />
                </div>
              </div>
            </div>
            <Scroller />
          </section>

          {/* Summary */}
          <section id="summary" className="summary">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="summary__text">
                <h3>{trans.summary.top}</h3>
                <h2>{trans.summary.center}</h2>
                <h4>{trans.summary.bottom}</h4>
              </div>
            </AnimatedSection>
            <div className="summary__cards">
              <AnimatedSection animation='flipCard'>
                <ServiceCard
                  img="/icons/cycle.png"
                  alt="Icono de flechas en ciclo"
                  title={trans.summary.card_title1}
                  body={trans.summary.card_body1}
                />
              </AnimatedSection>
              <AnimatedSection animation='flipCard' delay={0.2}>
                <ServiceCard
                  img="/icons/apple.png"
                  alt="Icono de manzana"
                  title={trans.summary.card_title2}
                  body={trans.summary.card_body2}
                />
              </AnimatedSection>
              <AnimatedSection animation='flipCard' delay={0.4}>
                <ServiceCard
                  img="/icons/leaf.png"
                  alt="Icono de hoja"
                  title={trans.summary.card_title3}
                  body={trans.summary.card_body3}
                />
              </AnimatedSection>
              <AnimatedSection animation='flipCard' delay={0.6}>
                <ServiceCard
                  img="/icons/heart.png"
                  alt="Icono de corazon"
                  title={trans.summary.card_title4}
                  body={trans.summary.card_body4}
                />
              </AnimatedSection>
            </div>
          </section>

          {/* About */}
          <section id="about" className="about">
            <div className="about__top">
              <div className="about__top--image">
                <AnimatedSection animation="fadeInScale" delay={0}>
                  <Image
                    src="/pictures/about-picture.png"
                    alt="Imagen de Maria Gracia Yturralde"
                    height={400}
                    width={400}
                  />
                </AnimatedSection>
                <div className="about__top--background">
                  <AnimatedSection animation="fallingLeafAnim" delay={0.2}>
                    <div className="about__background--fruit-1">
                      <Image
                        src="/images/leaf-three1.png"
                        alt="Hoja verde"
                        height={75}
                        width={75}
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fallingLeafAnimReverse" delay={0.2}>
                    <div className="about__background--fruit-2">
                      <Image
                        src="/images/leaf-one2.png"
                        alt="Hoja verde"
                        height={65}
                        width={65}
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fallingLeafAnim" delay={0.2}>
                    <div className="about__background--fruit-3">
                      <Image
                        src="/images/leaf-three2.png"
                        alt="Hoja verde"
                        height={130}
                        width={130}
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fallingLeafAnimReverse" delay={0.2}>
                    <div className="about__background--fruit-4">
                      <Image
                        src="/images/leaf-one1.png"
                        alt="Hoja verde"
                        height={60}
                        width={60}
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fallingLeafAnim" delay={0.2}>
                    <div className="about__background--fruit-5">
                      <Image
                        src="/images/leaf-one2.png"
                        alt="Hoja verde"
                        height={65}
                        width={65}
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fallingLeafAnimReverse" delay={0.2}>
                    <div className="about__background--fruit-6">
                      <Image
                        src="/images/leaf-two.png"
                        alt="Hoja verde"
                        height={95}
                        width={95}
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
              <div className="about__content">
                <div className="about__content--text">
                  <AnimatedSection animation="slideFromRight" delay={0.2}>
                    <h3>{trans.about.top}</h3>
                  </AnimatedSection>
                  <AnimatedSection animation="slideFromRight" delay={0.4}>
                    <h2>María Gracia Yturralde</h2>
                  </AnimatedSection>
                  <AnimatedSection animation="slideFromRight" delay={0.6}>
                    <p>{trans.about.body1}</p>
                  </AnimatedSection>
                  <AnimatedSection animation="slideFromRight" delay={0.8}>
                    <p>{trans.about.body2}</p>
                  </AnimatedSection>
                  <AnimatedSection animation="slideFromRight" delay={1}>
                    <p>{trans.about.body3}</p>
                  </AnimatedSection>
                </div>
                <AnimatedSection animation="slideFromRight" delay={1.2}>
                  <Button type="secondary">
                    {trans.buttons.history}
                  </Button>
                </AnimatedSection>
              </div>
              </div>
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="about__bottom">
                <Image
                  src="/images/catolica.png"
                  alt="Logo de Universidad Catolica de Santiago de Guayaquil"
                  height={225}
                  width={225}
                />
                <Image
                  src="/images/uib.png"
                  alt="Logo de Universitat de les Illes Balears"
                  height={225}
                  width={225}
                />
                <Image
                  src="/images/psc.png"
                  alt="Logo de Politecnico Superior de Colombia"
                  height={225}
                  width={225}
                />
              </div>
            </AnimatedSection>
          </section>

          {/* Services */}
          <ServicesSection trans={trans} all={all} business={business} />

          {/* Testimonials */}
          <section id="testimonials" className="testimonials">
            <div className="testimonials__decoration">
              <Image
                src="/images/purple-balls-big.png"
                alt="Fondo de formas moradas"
                height={600}
                width={600}
              />
            </div>
            <div className="testimonials__content">
              <AnimatedSection animation="fadeInUp" delay={0.2}>
                <div className="testimonials__text">
                  <h3>{trans.testimonials.top}</h3>
                  <h2>{trans.testimonials.center}</h2>
                  <p>{trans.testimonials.bottom}</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="tickerFadeInUp" delay={0.2}>
                <div className="testimonials__ticker">
                  <TestimonialTicker testimonials={testimonials} />
                </div>
              </AnimatedSection>
            </div>
          </section>
          
        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}