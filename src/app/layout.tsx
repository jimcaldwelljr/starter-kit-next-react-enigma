import "@/styles/tailwind.css";
import { createClient } from "@/lib/contento";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import notFound from "./not-found";
import { Inter } from "next/font/google";

const InterFont = Inter({
  variable: "--font-inter",
  weight: ["400", "600", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainNavId = process.env.SITE_MAIN_NAV_ID ?? false;
  const footerNavId = process.env.SITE_FOOTER_NAV_ID ?? false;

  if (!mainNavId || !footerNavId) {
    throw new Error(
      "No mainNavId or footerNavId found, please ensure you have created a mainNav and footerNav entry in Contento CMS and copy their id's to your .env file"
    );
  }

  const mainNav = await createClient()
    .getContentById(mainNavId)
    .catch(() => {
      notFound();
    });

  const footerNav = await createClient()
    .getContentById(footerNavId)
    .catch(() => {
      notFound();
    });

  return (
    <html
      lang="en"
      className={`${InterFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex h-full">
        <div className="flex flex-col w-full">
          <Header mainNav={mainNav} />
          <main className="flex-auto">{children}</main>
          <Footer footerNav={footerNav} />
        </div>
      </body>
    </html>
  );
}
