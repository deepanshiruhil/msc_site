"use client";
import Image from "next/image";

const sponsors = [
  { name: "Rise In",            logo: "/images/risein.png"           },
  { name: "AlgoPrep",           logo: "/images/algoprep.png"         },
  { name: "DoraHacks",          logo: "/images/dorahacks.png"        },
  { name: "HackerRank",         logo: "/images/hackerrank.png"       },
  { name: "GeeksForGeeks",      logo: "/images/gfg.png"              },
  { name: "InterviewBuddy",     logo: "/images/interviewbuddy.png"   },
  { name: "Unstop",             logo: "/images/unstop.png"           },
  { name: "Eduquest Education", logo: "/images/eduquesteducation.jpeg"},
  { name: "My Certificate",     logo: "/images/mycertificate.png"    },
  { name: "Fueler",             logo: "/images/fueler.svg"           },
  { name: "Certopus",           logo: "/images/certopus.png"         },
  { name: "StockEdge",          logo: "/images/stockedge.png"        },
  { name: "Banyan Nation",      logo: "/images/banyannation.png"     },
];

export default function SponsorsGrid() {
  return (
    <section id="sponsors" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-semibold tracking-tight mb-3">
          Our Sponsors
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
          Supporters helping us build opportunities, skills, and community.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {sponsors.map((s) => (
            <div
              key={s.name}
              title={s.name}
              className="
                group flex items-center justify-center
                rounded-xl border border-border/40 bg-card
                p-4 aspect-[3/2]
                hover:border-border hover:shadow-sm
                transition-all duration-200
              "
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={100}
                height={48}
                className="
                  object-contain max-h-10 w-auto
                  grayscale opacity-60
                  group-hover:grayscale-0 group-hover:opacity-100
                  transition-all duration-300
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
