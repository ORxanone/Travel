import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "~/components/header";
import Footer from "~/components/Footer/Tour";
import { Provider } from "~/components/ui/provider";
export const metadata: Metadata = {
  title: "Travel Pro",
  description: "Travel Pro",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${GeistSans.variable}`}>
      <body>
      <Provider>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
        </Provider>
      </body>
    </html>
  );
}
