import type { Metadata } from "next";
import "@/app/globals.css";
import GlassdoorNavbar from "@/components/GlassdoorNavbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MSC-IGDTUW | Microsoft Student Chapter",
  description:
    "IGDTUW's Microsoft Student Chapter — where women technologists run hackathons, host industry sessions, and shape each other's careers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <GlassdoorNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
