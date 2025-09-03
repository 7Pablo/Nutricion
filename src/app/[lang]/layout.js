// app/[lang]/layout.js (Server component)

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default async function LangLayout(props) {
  const params = await props.params; 
  const lang = params?.lang || 'es'; 

  return (
    <div className='lang-layout'>
      <Navbar lang={lang} />
        <main>
          {props.children}
        </main>
      <Footer lang={lang}/>
    </div>
  );
}
