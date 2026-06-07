import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MSC IGDTUW — Build. Collaborate. Lead.",
  description:
    "Microsoft Student Chapter at IGDTUW — powering hackathons, workshops, " +
    "mentorship, and Microsoft-backed resources for women technologists in Delhi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is required so React doesn't complain about
    // the "dark" class being added before hydration by our inline script below.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          This tiny inline script runs synchronously BEFORE the first paint,
          so the user never sees a flash of the wrong theme.
          It reads localStorage and applies the "dark" class immediately.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
