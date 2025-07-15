import { Megaphone, Home, Heart, GraduationCap, MapPin } from 'lucide-react';

const industries = [
  {
    icon: Megaphone,
    title: "Brands & Agencies",
    description: "Experiential marketing, XR activations, digital product launches",
    applications: ["Brand Experiences", "Product Launches", "Interactive Campaigns"]
  },
  {
    icon: Home,
    title: "Real Estate & Architecture", 
    description: "Interactive walkthroughs, 3D flythroughs, virtual staging",
    applications: ["Virtual Tours", "3D Visualization", "Virtual Staging"]
  },
  {
    icon: Heart,
    title: "Healthcare & Medical",
    description: "Medical imaging, patient education, XR anatomy viewers",
    applications: ["Medical Training", "Patient Education", "Surgical Planning"]
  },
  {
    icon: GraduationCap,
    title: "Education & Workforce Training",
    description: "Skill simulation, immersive learning, safety training",
    applications: ["Skills Training", "Safety Simulations", "Virtual Classrooms"]
  },
  {
    icon: MapPin,
    title: "Smart Cities & Governments",
    description: "Urban digital twins, planning tools, public space overlays",
    applications: ["Urban Planning", "Digital Twins", "Public Services"]
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-gradient-cosmic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
            Industries We Serve
          </p>
          <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-foreground mb-6 font-space">
            Immersive Across Sectors
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            From marketing activations to urban planning, we bring spatial computing to every industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-xl border border-border bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-primary hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground font-space">
                  {industry.title}
                </h3>
                <p className="mb-4 text-muted-foreground font-inter">
                  {industry.description}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {industry.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;