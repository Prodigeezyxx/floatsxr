
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

const clients = [
  {
    name: "MarkHack 3.0",
    logo: "/lovable-uploads/f773b0ff-542d-4239-a7c2-23d66681648c.png"
  },
  {
    name: "CHIVAS",
    logo: "/lovable-uploads/e308b5d8-33a0-4c0a-8cd8-05dde35e786b.png"
  },
  {
    name: "techcabal",
    logo: "/lovable-uploads/d3eedd82-8795-42fe-aba1-0209a81cc471.png"
  },
  {
    name: "Tyfe",
    logo: "/lovable-uploads/880b26fc-6116-4346-8853-9ed4f6a8c222.png"
  },
  {
    name: "PAAL AI",
    logo: "/lovable-uploads/040d4f51-ca0d-474f-83d4-80bcb49ec26f.png"
  },
  {
    name: "MARTELL",
    logo: "/lovable-uploads/e770ce4c-5041-4b45-9fe7-52b6eb8292a7.png"
  },
  {
    name: "Meta",
    logo: "/lovable-uploads/fcb6931a-a4e4-4127-adba-2aa23a2e2423.png"
  },
  {
    name: "EMPIRE",
    logo: "/lovable-uploads/6820a230-32e1-4c4a-a8c6-c8df145671f8.png"
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4 slide-in-up">
            Industries We Serve
          </p>
          <h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-foreground mb-6 slide-in-up delay-200">
            Immersive Across Sectors
          </h2>
          <p className="text-lg text-muted-foreground slide-in-up delay-300">
            From marketing activations to urban planning, we bring spatial computing to every industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-200 hover:-translate-y-1 scale-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {industry.title}
                </h3>
                <p className="mb-4 text-muted-foreground">
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

        {/* Trusted Partners Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4 slide-in-up delay-600">
            Trusted Partners
          </p>
          <h3 className="text-2xl lg:text-3xl tracking-tight font-medium text-foreground mb-6 slide-in-up delay-700">
            Brands That Trust Our Vision
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 rounded-xl border border-border bg-background/50 hover:bg-background transition-all duration-200 hover:scale-105 slide-in-up"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-8 w-auto max-w-full object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
