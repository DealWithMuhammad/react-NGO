import { Providers } from "./providers";
import "./globals.css";

import Header from "components/Header";
import Footer from "components/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "ReAct Malaysia",
  description: "Under Development Of Muhammad Ahmad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fffffd]">
        <Providers>
          <NextTopLoader color="#f8cf2c" />

          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
