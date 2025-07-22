
import { Monitor, Layers, Hand, Volume2, Users, Store, Building, Landmark } from 'lucide-react';
import boothImage from "@/assets/immersive-booth-exhibition.jpg";

const howItWorksFeatures = [
  {
    icon: Layers,
    title: "Tailored Structures",
    description: "Build walls, floors and ceilings with modular panels that adapt to your footprint."
  },
  {
    icon: Monitor,
    title: "Real‑Time Visuals",
    description: "Drive crisp 2D and 3D environments with industry‑standard rendering engines—no lag, no limits."
  },
  {
    icon: Hand,
    title: "Interactive Engagement",
    description: "Incorporate motion, touch and gesture sensors so content evolves with every movement."
  },
  {
    icon: Volume2,
    title: "Spatial Audio",
    description: "Surround‑sound speakers deliver directional audio that deepens immersion."
  }
];

const whyChooseFeatures = [
  {
    title: "Full‑Body Immersion",
    description: "Move beyond static displays. Engage all senses for maximum impact."
  },
  {
    title: "Powerful Storytelling",
    description: "Immerse guests in your brand narrative through cohesive audio‑visual journeys."
  },
  {
    title: "Fast Turnkey Setup",
    description: "Plug‑and‑play hardware and software get you live in hours, not days."
  },
  {
    title: "Actionable Insights",
    description: "Capture real‑time interaction data to measure engagement and drive follow‑up."
  }
];

const perfectForCases = [
  {
    icon: Users,
    title: "Trade Shows",
    description: "Command attention with interactive showcases."
  },
  {
    icon: Store,
    title: "Retail Activations",
    description: "Let customers try products in virtual environments."
  },
  {
    icon: Building,
    title: "Corporate Events",
    description: "Elevate training, launches and town halls with controlled, branded spaces."
  },
  {
    icon: Landmark,
    title: "Exhibitions & Museums",
    description: "Bring art, history and science to life through immersive storytelling."
  }
];

const ImmersiveBooths = () => {
  return (
    <section id="immersive-booths" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl tracking-tight font-medium text-foreground mb-6 slide-in-up">
            Immersive Booths
          </h2>
          <p className="text-xl text-muted-foreground slide-in-up delay-200 leading-relaxed">
            Step into a self‑contained world of sight, sound and interaction. Our immersive booths wrap visitors in seamless LED or projection panels, transforming any space into an unforgettable experience.
          </p>
        </div>

        {/* Showcase Image */}
        <div className="mb-20 rounded-2xl overflow-hidden">
          <div 
            className="h-96 bg-cover bg-center relative"
            style={{ 
              backgroundImage: `url(${boothImage})`
            }}
          >
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <div className="text-center text-foreground max-w-2xl px-6">
                <h3 className="text-3xl font-semibold mb-4">Experience the Future</h3>
                <p className="text-lg text-muted-foreground">
                  Immersive booth experiences that captivate and engage your audience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-medium text-foreground mb-4 slide-in-up">
              How It Works
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center scale-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Our Booths */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-medium text-foreground mb-4 slide-in-up">
              Why Choose Our Booths
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1 scale-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect For */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-medium text-foreground mb-4 slide-in-up">
              Perfect For
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perfectForCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1 scale-in"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-card-foreground">
                    {useCase.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-border bg-card slide-in-up delay-1000">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
              Ready to transform your next event?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us to explore custom booth designs, technical requirements and on‑site demos.
            </p>
            <a 
              href="https://calendly.com/hello-floatsanywhere/start" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveBooths;
