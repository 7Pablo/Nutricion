// page.js (LandingPage/Server component)

import Image from "next/image";
import { getTranslations } from "@/locales/translations";

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
                <h1>{trans.start.title}</h1>
                <h2>{trans.start.subtitle}</h2>
              </div>
              <div className="start__right">
                <Image 
                  src="/pictures/start_picture.webp"
                  alt="Maria Gracia Yturralde"
                  height={500}
                  width={500}
                />
              </div>
            </div>
            <div className="start__scroll">
          
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