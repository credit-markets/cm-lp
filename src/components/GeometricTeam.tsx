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
          
          {/* Left Column: Visual "The Constellation" (Blueprint Style) */}
          <div className="flex-1 relative w-full h-[600px] hidden lg:flex items-center justify-center">
             
             {/* The Network Visual */}
             <div className="relative w-[500px] h-[500px]">
                {/* Connecting Lines (Darker for White BG) */}
                <svg className="absolute inset-0 w-full h-full">
                   <motion.line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.3" animate={{ strokeOpacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4, repeat: Infinity }} />
                   <motion.line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.3" animate={{ strokeOpacity: [0.2, 0.6, 0.2] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
                   <motion.line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.3" animate={{ strokeOpacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
                   <motion.line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.3" animate={{ strokeOpacity: [0.2, 0.6, 0.2] }} transition={{ duration: 6, repeat: Infinity, delay: 1.5 }} />
                   <motion.circle cx="50%" cy="50%" r="200" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" fill="none" animate={{ rotate: 360 }} transition={{ duration: 60, ease: "linear", repeat: Infinity }} style={{ originX: "50%", originY: "50%" }} />
                </svg>

                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-strategic-blue rounded-full shadow-lg"></div>

                {/* Orbiting Nodes */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                   <div className="absolute top-0 left-1/2 w-3 h-3 bg-deep-black rounded-full border border-white"></div>
                </motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute inset-[10%]">
                   <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-depth-gray rounded-full"></div>
                </motion.div>
             </div>
             
             <div className="absolute bottom-12 left-12">
                <h2 className="text-4xl md:text-5xl font-bold text-deep-black uppercase tracking-widest">
                  LEADERSHIP
                </h2>
             </div>

          </div>

          {/* Right Column: Team Grid (Isometric Cards on White) */}
          <div className="flex-1 space-y-12 z-10 w-full">
            <div className="lg:hidden text-center mb-8">
               <h2 className="text-section font-bold text-deep-black tracking-[0.2em] uppercase">
                LEADERSHIP
              </h2>
            </div>
            
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