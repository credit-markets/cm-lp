import { memo } from "react";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";
import teamLucas from "@/assets/team-lucas.jpg";
import teamAubry from "@/assets/team-aubry.jpg";
import teamRodrigo from "@/assets/team-rodrigo.jpg";
import teamGabriel from "@/assets/team-gabriel.jpg";

const TEAM = [
  { name: "Lucas Britto", role: "CEO", image: teamLucas, href: "https://www.linkedin.com/in/lucastobritto/" },
  { name: "Aubry Kessel", role: "COO", image: teamAubry, href: "https://www.linkedin.com/in/agk23/" },
  { name: "Rodrigo Trindade", role: "CSO", image: teamRodrigo, href: "https://www.linkedin.com/in/rodrigotrindademenezes/" },
  { name: "Gabriel Thom", role: "CTO", image: teamGabriel, href: "https://www.linkedin.com/in/thomgabriel" },
];

const TeamSection = memo(function TeamSection() {
  const { t } = useLang();
  return (
    <section id="team" className="relative py-12 md:py-14 bg-cm-bg border-t border-cm-border">
      <div className={`${cm.container} flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12`}>
        <div className="shrink-0">
          <p className="text-sm font-semibold">{t.team.label}</p>
        </div>
        <ul className="grid grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-4 flex-1">
          {TEAM.map((m) => (
            <li key={m.name}>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name}, ${m.role}, ${t.team.linkedin}`}
                className="group flex items-center gap-3 rounded-lg p-2 -m-2 transition-colors duration-200 hover:bg-cm-raised"
              >
                <img
                  src={m.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-200"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{m.name}</span>
                  <span className="block text-xs text-cm-text-2 mt-0.5">{m.role}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default TeamSection;
