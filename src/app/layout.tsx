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
    // suppressHydrationWarning stops React warning about the class we add below
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Runs BEFORE first paint — reads localStorage and applies
          "light" class if the user previously chose light mode.
          Default (no class) = dark mode, which matches the original site.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('msc-theme');
                  if (t === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e){}
              })();
            `,
          }}
        />
        {/*
          Scroll-reveal observer.
          Watches every .reveal and .reveal-stagger element.
          Adds "visible" class when the element enters the viewport.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                function init(){
                  var els = document.querySelectorAll('.reveal, .reveal-stagger');
                  if (!els.length) return;
                  var io = new IntersectionObserver(function(entries){
                    entries.forEach(function(e){
                      if (e.isIntersecting){
                        e.target.classList.add('visible');
                        io.unobserve(e.target);
                      }
                    });
                  }, { threshold: 0.1 });
                  els.forEach(function(el){ io.observe(el); });
                }
                if (document.readyState === 'loading'){
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
