import { memo } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import teamLucas from "@/assets/team-lucas.jpg";
import teamAubry from "@/assets/team-aubry.jpg";
import teamRodrigo from "@/assets/team-rodrigo.jpg";
import teamGabriel from "@/assets/team-gabriel.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    x?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "LUCAS",
    role: "CEO",
    image: teamLucas,
    socials: {
      linkedin: "https://www.linkedin.com/in/lucastobritto/",
      x: "https://x.com/lucastobritto",
    }
  },
  {
    name: "AUBREY",
    role: "COO",
    image: teamAubry,
    socials: {
      linkedin: "https://www.linkedin.com/in/agk23/",
    }
  },
  {
    name: "RODRIGO",
    role: "CPO",
    image: teamRodrigo,
    socials: {
      linkedin: "https://www.linkedin.com/in/rodrigotrindademenezes/",
      x: "https://x.com/r0dtr",
    }
  },
  {
    name: "GABRIEL",
    role: "CTO",
    image: teamGabriel,
    socials: {
      linkedin: "https://www.linkedin.com/in/thomgabriel",
      x: "https://x.com/thomgaabriel",
    }
  }
];

const GeometricTeam = memo(() => {
  const isMobile = useIsMobile();

  return (
    <section id="team" className="py-24 bg-clean-white relative overflow-hidden isometric-grid below-fold-section">
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(121, 194, 255, 0.05) 0%, transparent 70%)',
            }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">

          <div className="flex-1 flex items-center justify-center lg:justify-start">
             <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-deep-black uppercase tracking-widest mb-4">
                  LEADERSHIP
                </h2>
                <div className="w-24 h-1 bg-strategic-blue"></div>
             </div>
          </div>

          <div className="flex-1 space-y-12 z-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={isMobile ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white border-2 border-depth-gray/10 hover:border-strategic-blue/50 rounded-sm overflow-hidden transition-colors duration-300 hover:shadow-xl"
                >
                  <div className="flex items-start p-6 gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-depth-gray/10 shrink-0 md:group-hover:border-strategic-blue/50 transition-colors duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        width={64}
                        height={64}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-deep-black mb-1 md:group-hover:text-strategic-blue transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="text-xs font-mono text-strategic-blue mb-2 uppercase tracking-wider bg-strategic-blue/10 inline-block px-2 py-0.5 rounded-sm">
                        {member.role}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn`}
                            className="text-depth-gray hover:text-strategic-blue transition-colors duration-200"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                        {member.socials.x && (
                          <a
                            href={member.socials.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} X`}
                            className="text-depth-gray hover:text-strategic-blue transition-colors duration-200"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-8 h-8 bg-strategic-blue/10 md:group-hover:bg-strategic-blue transform rotate-45 translate-x-4 -translate-y-4 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
});

GeometricTeam.displayName = 'GeometricTeam';

export default GeometricTeam;