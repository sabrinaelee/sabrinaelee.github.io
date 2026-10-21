import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorTag from "@/components/CursorTag";

export const metadata: Metadata = {
  title: "Sabrina Lee",
  description: "A designer of experiences and a daydreamer of everything under the sun.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <CursorTag />
      </body>
    </html>
  );
}
