
import { FileText, Wrench, TestTube, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: FileText,
    step: "01",
    title: "Scope & Plan",
    description: "Requirements analysis and spatial design thinking",
    outcome: "Clear roadmap and technical specifications"
  },
  {
    icon: Wrench,
    step: "02", 
    title: "Build & Iterate",
    description: "Rapid prototyping with Unity, WebXR, and AI tools",
    outcome: "Functional prototype and user feedback integration"
  },
  {
    icon: TestTube,
    step: "03",
    title: "Test & Optimize", 
    description: "Cross-platform QA and performance optimization",
    outcome: "Production-ready, optimized experience"
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy & Scale",
    description: "Multi-platform launch with ongoing support",
    outcome: "Live experience with analytics and maintenance"
  }
];

const StreamlinedProcess = () => {
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
            Agile production model scaling from prototype to platform.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
            
            <div className="grid grid-cols-4 gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Timeline Node */}
                    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"></div>
                    
                    <div 
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 scale-in"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold text-primary">{step.step}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs font-medium text-accent">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 scale-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-primary">{step.step}</span>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-3">
                  {step.description}
                </p>
                
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-accent">
                    {step.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StreamlinedProcess;
