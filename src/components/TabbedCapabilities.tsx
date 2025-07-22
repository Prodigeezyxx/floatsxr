
import { useState } from 'react';
import { Smartphone, Headphones, Box, Brain, Building2, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const capabilityTabs = [
  {
    id: 'immersive',
    label: 'AR/VR',
    icon: Headphones,
    heroImage: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1024&q=80', // Placeholder, replace with AI-generated
    capabilities: [
      {
        icon: Smartphone,
        title: "Augmented Reality",
        description: "WebAR experiences, product try-ons, spatial mapping",
        features: ["WebAR", "Object Recognition", "Geolocated AR"]
      },
      {
        icon: Headphones,
        title: "Virtual Reality",
        description: "Immersive training, virtual showrooms, branded experiences",
        features: ["Training Sims", "Virtual Tours", "Custom Environments"]
      }
    ]
  },
  {
    id: 'intelligent',
    label: '3D/AI',
    icon: Brain,
    heroImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1024&q=80', // Placeholder, replace with AI-generated
    capabilities: [
      {
        icon: Box,
        title: "3D Visualization",
        description: "Architectural walkthroughs, product renders, interactive models",
        features: ["3D Modeling", "Architectural Viz", "Product Demos"]
      },
      {
        icon: Brain,
        title: "AI Integration",
        description: "Intelligent avatars, voice interfaces, adaptive experiences",
        features: ["AI Avatars", "Voice Control", "Smart Responses"]
      }
    ]
  },
  {
    id: 'spatial',
    label: 'Spatial Tech',
    icon: Eye,
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1024&q=80', // Placeholder, replace with AI-generated
    capabilities: [
      {
        icon: Building2,
        title: "Digital Twins",
        description: "Real-world mirroring for cities, facilities, and systems",
        features: ["City Models", "Real-time Sync", "IoT Integration"]
      },
      {
        icon: Eye,
        title: "Spatial Computing",
        description: "Next-gen interfaces blending physical and digital realities",
        features: ["Mixed Reality", "Gesture Control", "Spatial Awareness"]
      }
    ]
  }
];

const TabbedCapabilities = () => {
  const [activeTab, setActiveTab] = useState('immersive');

  return (
    <section id="capabilities" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4 slide-in-up">
            What We Build
          </p>
          <h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-foreground mb-6 slide-in-up delay-200">
            Immersive Tech That Moves
          </h2>
          <p className="text-lg text-muted-foreground slide-in-up delay-300">
            Full XR pipeline — from spatial concept to real-time deployment.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            {capabilityTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="flex items-center gap-2 px-4 py-3"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {capabilityTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              {/* Hero Image Section */}
              <div className="mb-12 rounded-2xl overflow-hidden">
                <div 
                  className="h-64 md:h-80 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${tab.heroImage})` }}
                >
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                    <div className="text-center text-foreground">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <tab.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">{tab.label} Technologies</h3>
                      <p className="text-muted-foreground max-w-md">
                        Cutting-edge solutions for immersive experiences
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {tab.capabilities.map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <div 
                      key={index}
                      className="p-8 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-200 hover:-translate-y-1 scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {capability.title}
                      </h3>
                      <p className="mb-4 text-muted-foreground">
                        {capability.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {capability.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TabbedCapabilities;
