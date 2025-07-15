import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-xr.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-cosmic pt-24 pb-16 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight font-space text-foreground">
                Build the Future in{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  3D
                </span>
              </h1>
              <p className="text-lg max-w-xl text-muted-foreground font-inter">
                Immersive experiences, XR activations, and digital twins that move people — and markets.
              </p>
              <p className="text-base max-w-xl text-muted-foreground font-inter">
                Floats XR is a full-stack immersive studio blending 3D, AI, and spatial computing to deliver world-class XR experiences — anywhere.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-primary"
              >
                Start a Project <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#capabilities" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-200 border border-border bg-card text-card-foreground hover:bg-muted"
              >
                Explore Capabilities <Play className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center border-2 border-background">
                  <span className="text-sm font-medium text-primary-foreground">AR</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center border-2 border-background">
                  <span className="text-sm font-medium text-accent-foreground">VR</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border-2 border-background">
                  <span className="text-sm font-medium text-secondary-foreground">3D</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border-2 border-background">
                  <span className="text-sm font-medium text-muted-foreground">AI</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Full XR Pipeline</p>
                <p className="text-sm text-muted-foreground">From concept to deployment</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-deep">
              <img 
                src={heroImage} 
                alt="XR Development Workspace" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-card/90 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex bg-primary/20 rounded-full items-center justify-center">
                    <span className="text-primary text-sm font-bold">3D</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Immersive Rate</p>
                    <p className="text-lg font-bold text-primary">+250%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-card/90 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex bg-accent/20 rounded-full items-center justify-center">
                    <span className="text-accent text-sm font-bold">XR</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">Engagement</p>
                    <p className="text-lg font-bold text-accent">+180%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;