import { FileText, Wrench, TestTube, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: FileText,
    step: "01",
    title: "Scope Planning",
    description: "Clear requirements, spatial design thinking, and outcomes alignment.",
    features: ["Requirement Analysis", "Spatial Design", "Technical Planning"]
  },
  {
    icon: Wrench,
    step: "02", 
    title: "Build & Integrate",
    description: "Rapid iteration cycles with Unity, WebXR, Three.js, and AI toolchains.",
    features: ["Rapid Prototyping", "3D Development", "AI Integration"]
  },
  {
    icon: TestTube,
    step: "03",
    title: "Test & Optimize", 
    description: "QA across devices, environments, and user flows.",
    features: ["Cross-Platform Testing", "Performance Optimization", "User Testing"]
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy Anywhere",
    description: "From physical activations to global WebXR launches.",
    features: ["Multi-Platform Deploy", "Global Distribution", "Live Support"]
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4 slide-in-up">
            How We Work
          </p>
          <h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-foreground mb-6 slide-in-up delay-200">
            From Brief to Breakthrough
          </h2>
          <p className="text-lg text-muted-foreground slide-in-up delay-300">
            Our agile production model scales from fast prototypes to full platform deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 transform translate-x-4 -translate-y-1/2"></div>
                )}
                
                <div 
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 scale-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;