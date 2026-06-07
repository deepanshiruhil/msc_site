import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MSC IGDTUW",
  description: "Microsoft Student Chapter - IGDTUW",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 1. No-flash theme script — runs before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var s = localStorage.getItem('theme');
                  var p = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (s === 'dark' || (!s && p)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(_){}
              })();
            `,
          }}
        />
        {/* 2. Scroll-reveal observer — wires .reveal and .reveal-stagger */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                function init(){
                  var els = document.querySelectorAll('.reveal, .reveal-stagger');
                  if (!els.length) return;
                  var obs = new IntersectionObserver(function(entries){
                    entries.forEach(function(e){
                      if(e.isIntersecting){
                        e.target.classList.add('visible');
                        obs.unobserve(e.target);
                      }
                    });
                  }, { threshold: 0.12 });
                  els.forEach(function(el){ obs.observe(el); });
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', init);
                } else {
                  init();
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
