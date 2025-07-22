
import { useState } from 'react';
import { Smartphone, Headphones, Box, Brain, Building2, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const capabilityTabs = [
  {
    id: 'immersive',
    label: 'AR/VR',
    icon: Headphones,
    heroImage: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=600&fit=crop&crop=center',
    capabilities: [
      {
        icon: Smartphone,
        title: "Augmented Reality",
        description: "WebAR experiences, product try-ons, spatial mapping",
        features: ["WebAR", "Object Recognition", "Geolocated AR"],
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop&crop=center'
      },
      {
        icon: Headphones,
        title: "Virtual Reality",
        description: "Immersive training, virtual showrooms, branded experiences",
        features: ["Training Sims", "Virtual Tours", "Custom Environments"],
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop&crop=center'
      }
    ]
  },
  {
    id: 'intelligent',
    label: '3D/AI',
    icon: Brain,
    heroImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop&crop=center',
    capabilities: [
      {
        icon: Box,
        title: "3D Visualization",
        description: "Architectural walkthroughs, product renders, interactive models",
        features: ["3D Modeling", "Architectural Viz", "Product Demos"],
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop&crop=center'
      },
      {
        icon: Brain,
        title: "AI Integration",
        description: "Intelligent avatars, voice interfaces, adaptive experiences",
        features: ["AI Avatars", "Voice Control", "Smart Responses"],
        image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=300&fit=crop&crop=center'
      }
    ]
  },
  {
    id: 'spatial',
    label: 'Spatial Tech',
    icon: Eye,
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop&crop=center',
    capabilities: [
      {
        icon: Building2,
        title: "Digital Twins",
        description: "Real-world mirroring for cities, facilities, and systems",
        features: ["City Models", "Real-time Sync", "IoT Integration"],
        image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=300&fit=crop&crop=center'
      },
      {
        icon: Eye,
        title: "Spatial Computing",
        description: "Next-gen interfaces blending physical and digital realities",
        features: ["Mixed Reality", "Gesture Control", "Spatial Awareness"],
        image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=300&fit=crop&crop=center'
      }
    ]
  }
];

const TabbedCapabilities = () => {
  const [activeTab, setActiveTab] = useState('immersive');
  const activeTabData = capabilityTabs.find(tab => tab.id === activeTab);

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

          {/* Hero Section for Active Tab */}
          {activeTabData && (
            <div className="mb-12 slide-in-up">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <img
                  src={activeTabData.heroImage}
                  alt={`${activeTabData.label} technology`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent flex items-center">
                  <div className="max-w-xl px-8">
                    <div className="flex items-center gap-3 mb-4">
                      <activeTabData.icon className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                        {activeTabData.label} Solutions
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Cutting-edge {activeTabData.label.toLowerCase()} technology that transforms how people interact with digital experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {capabilityTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {tab.capabilities.map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <div 
                      key={index}
                      className="group rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1 scale-in overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Capability Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={capability.image}
                          alt={capability.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
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
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full transition-colors hover:bg-primary/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
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
