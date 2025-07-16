import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-xr.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[url(https://cdn.midjourney.com/d5ecaf44-94b7-47f5-9bb8-5d1967358128/0_0.png?w=800&q=80)] bg-cover pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-medium tracking-tight text-foreground slide-in-left animate-in">
                Build the Future in{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white slide-in-left delay-200 animate-in font-medium">
                  3D
                </span>
              </h1>
              <p className="text-lg max-w-xl text-muted-foreground slide-in-left delay-300 animate-in">
                Immersive experiences, XR activations, and digital twins that move people — and markets.
              </p>
              <p className="text-base max-w-xl text-muted-foreground slide-in-left delay-300 animate-in">
                Floats XR is a full-stack immersive studio blending 3D, AI, and spatial computing to deliver world-class XR experiences — anywhere.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 slide-in-left delay-400 animate-in">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 text-black bg-primary hover:bg-primary/90"
              >
                Start a Project <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#capabilities" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-200 bg-muted text-foreground hover:bg-muted/80"
              >
                Explore Capabilities <Play className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-6 slide-in-left delay-500 animate-in">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background">
                  <span className="text-sm font-medium text-primary">AR</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border-2 border-background">
                  <span className="text-sm font-medium text-accent">VR</span>
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
          
          <div className="relative blur-in delay-600 animate-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="XR Development Workspace" 
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-black/90 slide-in-right delay-800 animate-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex bg-neutral-800 rounded-full items-center justify-center">
                    <span className="text-primary text-sm font-bold">3D</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Immersive Rate</p>
                    <p className="text-lg font-bold text-foreground">+250%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-black/90 slide-in-left delay-900 animate-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex bg-neutral-800 rounded-full items-center justify-center">
                    <span className="text-accent text-sm font-bold">XR</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Engagement</p>
                    <p className="text-lg font-bold text-foreground">+180%</p>
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