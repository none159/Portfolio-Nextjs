
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha384-C3jD4Y5uG1DJHf1LPn2s5shW3RGl6eZf/b8up0AdWk5ATeXtFk6KDnOby0aRFOhG"
          crossOrigin="anonymous"
        />
        
      </head>
      <body
        className="bg-[#0C090A] font-sans"
      >

        <Navbar/>
        {children}
        <Footer/>
      
      </body>
    </html>
  );
}
