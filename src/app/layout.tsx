import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MSC-IGDTUW | Microsoft Student Chapter",
  description:
    "IGDTUW's Microsoft Student Chapter- where women technologists run hackathons, host industry sessions, and shape each other's careers.",
  openGraph: {
    title: "MSC-IGDTUW",
    description: "Build. Collaborate. Lead.",
    siteName: "Microsoft Student Chapter IGDTUW",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/*
          Helvetica Neue is a system font on macOS/iOS
        */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
