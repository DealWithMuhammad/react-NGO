import { Providers } from "./providers";
import "./globals.css";

import Header from "components/Header";
import Footer from "components/Footer";
import Lines from "components/Lines";

export const metadata = {
  title: "Baig Associates",
  description: "Under Development Of Rafay Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Lines />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
