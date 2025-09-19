import teamLucas from "@/assets/team-lucas.jpg";
import teamOren from "@/assets/team-oren.jpg";
import teamRodrigo from "@/assets/team-rodrigo.jpg";
import teamKaue from "@/assets/team-kaue.jpg";
import teamGabriel from "@/assets/team-gabriel.jpg";

const GeometricTeam = () => {
  const teamMembers = [
    {
      name: "LUCAS",
      role: "CEO",
      credential: "Ex-Goldman Sachs LATAM",
      image: teamLucas,
      position: "top-left"
    },
    {
      name: "AUBREY", 
      role: "COO",
      credential: "Ex-Centrifuge CFO",
      image: teamOren,
      position: "top-right"
    },
    {
      name: "RODRIGO",
      role: "CSO",
      credential: "Iporanga Ventures",
      image: teamRodrigo,
      position: "bottom-left"
    },
    {
      name: "KAUE",
      role: "CTO", 
      credential: "Ex-MakerDAO RWA/CES",
      image: teamKaue,
      position: "bottom-center"
    },
    {
      name: "GABRIEL",
      role: "CPO",
      credential: "Ex-BTG Pactual",
      image: teamGabriel,
      position: "bottom-right"
    }
  ];

  return (
    <section className="py-24 bg-clean-white isometric-grid">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-deep-black tracking-[0.2em] uppercase">
            CORE TEAM
          </h2>
        </div>

        {/* Isometric Team Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row */}
          <div className="grid grid-cols-2 gap-4 md:flex md:justify-center md:items-center md:mb-12 md:space-x-16">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div
                key={member.name}
                className={`isometric-card bg-dimensional-gray border-2 border-depth-gray/50 hover:bg-deep-black hover:border-strategic-blue p-6 text-center group relative overflow-hidden transition-all duration-300 w-full h-[260px] md:w-[280px] md:h-[320px] ${index === 1 ? 'md:mt-8' : ''}`}
              >
                {/* Portrait */}
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden border border-clean-white bg-deep-black">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-300"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-clean-white font-bold text-lg tracking-wider mb-2">
                  {member.name}
                </h3>
                
                {/* Role */}
                <p className="text-depth-gray text-sm mb-3 tracking-wide">
                  {member.role}
                </p>
                
                {/* Credential */}
                <p className="text-clean-white group-hover:text-strategic-blue font-mono text-xs tracking-wider opacity-80 group-hover:opacity-100 transition-all duration-300">
                  {member.credential}
                </p>

                {/* Isometric corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-strategic-blue/30 group-hover:bg-strategic-blue transform rotate-45 translate-x-4 -translate-y-4 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-nowrap md:justify-center md:items-start md:space-x-8 md:gap-0">
            {teamMembers.slice(2).map((member, index) => (
              <div
                key={member.name}
                className={`isometric-card bg-dimensional-gray border-2 border-depth-gray/50 hover:bg-deep-black hover:border-strategic-blue p-6 text-center group relative overflow-hidden transition-all duration-300 w-full h-[270px] md:w-[240px] md:h-[260px] ${index === 1 ? 'md:mt-4' : index === 2 ? 'md:mt-8' : ''}`}
              >
                {/* Portrait */}
                <div className="w-20 h-20 mx-auto mb-3 overflow-hidden border border-clean-white bg-deep-black">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-300"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-clean-white font-bold text-base tracking-wider mb-2">
                  {member.name}
                </h3>
                
                {/* Role */}
                <p className="text-depth-gray text-sm mb-3 tracking-wide">
                  {member.role}
                </p>
                
                {/* Credential */}
                <p className="text-clean-white group-hover:text-strategic-blue font-mono text-xs tracking-wider opacity-80 group-hover:opacity-100 transition-all duration-300">
                  {member.credential}
                </p>

                {/* Isometric corner */}
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-strategic-blue/30 group-hover:bg-strategic-blue transform rotate-45 -translate-x-3 translate-y-3 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-data font-mono text-deep-black mb-2">
              50+
            </div>
            <div className="text-depth-gray text-sm tracking-wider uppercase">
              YEARS COMBINED EXP
            </div>
          </div>
          <div className="text-center">
            <div className="text-data font-mono text-deep-black mb-2">
              $2B+
            </div>
            <div className="text-depth-gray text-sm tracking-wider uppercase">
              ASSETS MANAGED
            </div>
          </div>
          <div className="text-center">
            <div className="text-data font-mono text-deep-black mb-2">
              15+
            </div>
            <div className="text-depth-gray text-sm tracking-wider uppercase">
              COUNTRIES SERVED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeometricTeam;