import teamLucas from "@/assets/team-lucas.jpg";
import teamOren from "@/assets/team-oren.jpg";
import teamRodrigo from "@/assets/team-rodrigo.jpg";
import teamKaue from "@/assets/team-kaue.jpg";
import teamGabriel from "@/assets/team-gabriel.jpg";

const GeometricTeam = () => {
  const teamMembers = [
    {
      name: "LUCAS",
      role: "CEO & Founder",
      credential: "Ex-Goldman Sachs LATAM",
      image: teamLucas,
      position: "top-left"
    },
    {
      name: "OREN", 
      role: "CTO & Co-Founder",
      credential: "MIT Computer Science",
      image: teamOren,
      position: "top-right"
    },
    {
      name: "RODRIGO",
      role: "Head of Product",
      credential: "Stanford MBA",
      image: teamRodrigo,
      position: "bottom-left"
    },
    {
      name: "KAUE",
      role: "Lead Engineer", 
      credential: "Blockchain Specialist",
      image: teamKaue,
      position: "bottom-center"
    },
    {
      name: "GABRIEL",
      role: "Risk Management",
      credential: "Quantitative Finance",
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
            FINANCIAL ARCHITECTS
          </h2>
        </div>

        {/* Isometric Team Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row */}
          <div className="flex justify-center items-center mb-12 space-x-16">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div
                key={member.name}
                className="isometric-card bg-dimensional-gray border-2 border-depth-gray/50 hover:bg-deep-black hover:border-strategic-blue p-6 text-center group relative overflow-hidden transition-all duration-300"
                style={{
                  width: '280px',
                  height: '320px',
                  marginTop: index === 1 ? '2rem' : '0'
                }}
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
          <div className="flex justify-center items-start space-x-8">
            {teamMembers.slice(2).map((member, index) => (
              <div
                key={member.name}
                className="isometric-card bg-dimensional-gray border-2 border-depth-gray/50 hover:bg-deep-black hover:border-strategic-blue p-6 text-center group relative overflow-hidden transition-all duration-300"
                style={{
                  width: '240px',
                  height: '280px',
                  marginTop: index === 1 ? '1rem' : index === 2 ? '2rem' : '0'
                }}
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