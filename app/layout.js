import "./globals.css";
import { Kanit } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: "--font-kanit",
});
export const metadata = {
  title: "Prerit Ahuja | UI/UX",
  description: "Prerit Ahuja Portfolio using NextJS, Tailwind CSS, GSAP and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
