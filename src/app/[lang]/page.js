// page.js (LandingPage/Server component)

import { getTranslations } from "@/locales/translations";
import Image from "next/image";
import Button from "@/components/buttons/Button";

// LandingPage
export default async function LandingPage({params}) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div className="landing-page">

          {/* Start */}
          <section id="start" className="start">
            <div className="start__content">
              <div className="start__left">
                <div className="start__left--text">
                  <h1>{trans.start.title}</h1>
                  <h2>{trans.start.subtitle}</h2>
                </div>
                <Button type="primary">
                  {trans.buttons.begin}
                </Button>
              </div>
              <div className="start__right">
                <Image 
                  src="/pictures/start_picture.webp"
                  alt="Maria Gracia Yturralde"
                  height={500}
                  width={500}
                />
                <div className="start__right--overlay"/>
              </div>
              <div className="start__background">
                <div className="start__background--balls-1">
                  <Image
                    src="/images/purple-balls.png"
                    alt="Fondo de formas moradas"
                    height={600}
                    width={600}
                  />
                </div>
                <div className="start__background--balls-2">
                  <Image
                    src="/images/purple-balls.png"
                    alt="Fondo de formas moradas"
                    height={600}
                    width={600}
                  />
                </div>
              </div>
            </div>
            <div className="start__scroller">

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