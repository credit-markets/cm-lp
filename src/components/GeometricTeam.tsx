import { motion } from "framer-motion";
import teamLucas from "@/assets/team-lucas.jpg";
import teamAubry from "@/assets/team-aubry.jpg";
import teamRodrigo from "@/assets/team-rodrigo.jpg";
import teamKaue from "@/assets/team-kaue.jpg";
import teamGabriel from "@/assets/team-gabriel.jpg";

const teamMembers = [
  {
    name: "LUCAS",
    role: "CEO",
    credential: "Ex-Moore M&A and Governance",
    image: teamLucas
  },
  {
    name: "AUBREY", 
    role: "COO",
    credential: "Ex-Centrifuge VP of Finance and Operations",
    image: teamAubry
  },
  {
    name: "RODRIGO",
    role: "CSO",
    credential: "Ex-Iporanga Ventures Associate",
    image: teamRodrigo
  },
  {
    name: "KAUE",
    role: "CTO", 
    credential: "Ex-MakerDAO RWA/CES Engineer",
    image: teamKaue
  },
  {
    name: "GABRIEL",
    role: "CPO",
    credential: "Ex-BTG Pactual Engineer",
    image: teamGabriel
  }
];

const GeometricTeam = () => {
  return (
    <section id="team" className="py-24 bg-clean-white relative overflow-hidden isometric-grid">
       {/* Central Blue Glow (Subtle) */}
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-strategic-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Left Column: Header (was Visual) */}
          <div className="flex-1 flex items-center justify-center lg:justify-start">
             <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-deep-black uppercase tracking-widest mb-4">
                  LEADERSHIP
                </h2>
                <div className="w-24 h-1 bg-strategic-blue"></div>
             </div>
          </div>

          {/* Right Column: Team Grid (Isometric Cards on White) */}
          <div className="flex-1 space-y-12 z-10 w-full">

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white border-2 border-depth-gray/10 hover:border-strategic-blue/50 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-start p-6 gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-depth-gray/10 shrink-0 group-hover:border-strategic-blue/50 transition-colors duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        loading="lazy"
                        className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-300" 
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-deep-black mb-1 group-hover:text-strategic-blue transition-colors duration-300">
                        {member.name}
                      </h4>
                      <div className="text-xs font-mono text-strategic-blue mb-2 uppercase tracking-wider bg-strategic-blue/10 inline-block px-2 py-0.5 rounded-sm">
                        {member.role}
                      </div>
                      <p className="text-xs text-depth-gray leading-relaxed font-light">
                        {member.credential}
                      </p>
                    </div>
                  </div>

                  {/* Isometric Corner Accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-strategic-blue/10 group-hover:bg-strategic-blue transform rotate-45 translate-x-4 -translate-y-4 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GeometricTeam;