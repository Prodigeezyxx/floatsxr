import { Smartphone, Headphones, Box, Brain, Building2, Eye } from 'lucide-react';

const capabilities = [
  {
    icon: Smartphone,
    title: "Augmented Reality (AR)",
    description: "WebAR, AR filters, wayfinding overlays, geoAR, product try-ons",
    features: ["WebAR Experiences", "Spatial Mapping", "Object Recognition"]
  },
  {
    icon: Headphones,
    title: "Virtual Reality (VR)",
    description: "Simulations, training, virtual environments, branded metaspaces",
    features: ["Immersive Simulations", "Training Modules", "Virtual Showrooms"]
  },
  {
    icon: Box,
    title: "3D Design & Visualization",
    description: "Architectural walkthroughs, product renders, explainer animations",
    features: ["3D Modeling", "Architectural Viz", "Product Renders"]
  },
  {
    icon: Brain,
    title: "AI + Spatial Interfaces",
    description: "Intelligent avatars, voice-controlled kiosks, adaptive XR surfaces",
    features: ["AI Avatars", "Voice Control", "Adaptive Interfaces"]
  },
  {
    icon: Building2,
    title: "Digital Twins",
    description: "Real-world mirroring for cities, campuses, venues, and systems",
    features: ["City Modeling", "Real-time Sync", "Data Integration"]
  },
  {
    icon: Eye,
    title: "Spatial Computing",
    description: "Next-gen interfaces that blend physical and digital realities",
    features: ["Mixed Reality", "Gesture Control", "Spatial Awareness"]
  }
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20 bg-gradient-cosmic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
            What We Do
          </p>
          <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-foreground mb-6 font-space">
            Immersive Tech That Moves
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            We work across the entire XR pipeline — from spatial concept to real-time deployment — combining creativity with engineering precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-xl border border-border bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-accent hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-primary transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground font-space">
                  {capability.title}
                </h3>
                <p className="mb-4 text-muted-foreground font-inter">
                  {capability.description}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
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

export default Capabilities;