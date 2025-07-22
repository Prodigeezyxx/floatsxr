
import { Megaphone, Home, Heart, GraduationCap, MapPin } from 'lucide-react';

const industries = [
  {
    icon: Megaphone,
    title: "Brands & Marketing",
    description: "Experiential campaigns and product launches",
    highlight: "250% engagement boost"
  },
  {
    icon: Home,
    title: "Real Estate", 
    description: "Virtual tours and architectural visualization",
    highlight: "60% faster sales"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Medical training and patient education",
    highlight: "Safe simulation"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Immersive learning and skills training",
    highlight: "Enhanced retention"
  },
  {
    icon: MapPin,
    title: "Smart Cities",
    description: "Urban planning and digital twins",
    highlight: "Data-driven decisions"
  }
];

const clients = [
  "MarkHack 3.0", "CHIVAS", "techcabal", "Tyfe", 
  "PAAL AI", "MARTELL", "Meta", "EMPIRE"
];

const OptimizedIndustries = () => {
  return (
    <section id="industries" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4 slide-in-up">
            Industries We Transform
          </p>
          <h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-foreground mb-6 slide-in-up delay-200">
            Immersive Solutions Across Sectors
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-200 hover:-translate-y-1 scale-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {industry.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {industry.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* CTA Card */}
          <div className="p-6 rounded-xl border-2 border-primary/20 bg-primary/5 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 scale-in delay-900">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Your Industry?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                We adapt to any sector requiring immersive experiences
              </p>
              <a 
                href="https://calendly.com/hello-floatsanywhere/start"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Discuss Your Needs
              </a>
            </div>
          </div>
        </div>

        {/* Trusted Partners */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-primary mb-6 slide-in-up delay-600">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="px-4 py-2 rounded-lg bg-background/50 border border-border/50 hover:bg-background transition-colors slide-in-up"
              style={{ animationDelay: `${0.8 + index * 0.05}s` }}
            >
              <span className="font-medium text-foreground/80 text-sm">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptimizedIndustries;
