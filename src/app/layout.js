import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipes",
  description: "Recipes? check. names check. categorie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
