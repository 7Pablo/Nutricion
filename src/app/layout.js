import '@/css/styles.css';
import { Provider } from "@/components/ui/provider"

export default function RootLayout({ children, params }) {
  const lang = params?.lang || 'es'; 

  return (
    <html 
      lang={lang} 
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={"/favicon-nutricion.ico"} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
