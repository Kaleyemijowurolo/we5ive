import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Navbar';
import localFont from "next/font/local";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import StoreProvider from './StoreProvider';

const nunitoSans = localFont({
  src: "./fonts/NunitoSans.ttf",
  variable: "--font-nunito-sans",
  weight: "400 600 700",
});
const pacifico = localFont({
  src: "./fonts/Pacifico.ttf",
  variable: "--font-pacifico",
  weight: "400 600 700",
});

const manrope = localFont({
  src: "./fonts/Manrope.ttf",
  variable: "--font-manrope",
  weight: "400 600 700",
});

export const metadata = {
  title: "We5ive - Your daily fashion",
  description: "Explore the latest Fashion Products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='max-w-[1440px] w-full mx-auto'>
      <body
        className={`${nunitoSans.variable} ${pacifico.variable} ${manrope.variable} antialiased`}
      >
        <StoreProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </StoreProvider>
        <Toaster />
      </body>
    </html>
  );
}
