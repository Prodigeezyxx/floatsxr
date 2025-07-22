
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
              <p className="text-xl max-w-xl text-muted-foreground slide-in-left delay-300 animate-in">
                Immersive XR experiences that move people — and markets.
              </p>
              <p className="text-base max-w-xl text-muted-foreground/80 slide-in-left delay-300 animate-in">
                Full-stack immersive studio blending 3D, AI, and spatial computing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 slide-in-left delay-400 animate-in">
              <a 
                href="https://calendly.com/hello-floatsanywhere/start" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 text-black bg-primary hover:bg-primary/90"
              >
                Start a Project <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#capabilities" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-200 bg-muted text-foreground hover:bg-muted/80"
              >
                See Capabilities
              </a>
            </div>
            
            <div className="flex items-center gap-8 slide-in-left delay-500 animate-in">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-xs font-bold text-primary">AR</div>
                  <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center text-xs font-bold text-accent">VR</div>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground">3D</div>
                </div>
                <span className="text-sm font-medium text-foreground">Full XR Pipeline</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Concept → Deployment
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
              
              {/* Floating Stats - Simplified */}
              <div className="absolute top-6 right-6 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-black/90 slide-in-right delay-800 animate-in">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">+250%</p>
                  <p className="text-xs text-muted-foreground">Engagement</p>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-black/90 slide-in-left delay-900 animate-in">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">Global</p>
                  <p className="text-xs text-muted-foreground">Reach</p>
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
