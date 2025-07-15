import { Globe, Users, Zap, Award } from 'lucide-react';
import studioImage from '@/assets/studio-workspace.jpg';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
                Who We Are
              </p>
              <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-foreground mb-6 font-space">
                Spatializing the Internet
              </h2>
              <div className="space-y-4 text-muted-foreground font-inter">
                <p>
                  Floats XR is an immersive technology studio on a mission to spatialize the internet. 
                  Founded by <strong>Iyobosa Rehoboth</strong>, we operate at the intersection of 3D design, 
                  AI, spatial computing, and global culture.
                </p>
                <p>
                  We serve clients across verticals — from digital marketing and real estate to smart cities 
                  and education — with a focus on bold, human-centered XR experiences.
                </p>
                <p>
                  We're also creators, educators, and explorers of the immersive frontier.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card hover:bg-muted/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex bg-primary/20 rounded-lg items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card-foreground font-space">Global</p>
                    <p className="text-sm text-muted-foreground">Footprint</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Active across Africa, Europe, and North America</p>
              </div>
              
              <div className="p-6 rounded-xl border border-border bg-card hover:bg-muted/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex bg-accent/20 rounded-lg items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-card-foreground font-space">Rapid</p>
                    <p className="text-sm text-muted-foreground">Prototyping</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">From idea to demo in days, not weeks</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground font-space">Why Partner with Us?</h3>
              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground font-inter">100% XR-native studio with hybrid design, dev, and AI fluency</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground font-inter">Hardware agnostic — works on any screen or headset</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground font-inter">Every experience is both emotionally resonant and technically robust</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-deep">
              <img 
                src={studioImage} 
                alt="Floats XR Studio" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 backdrop-blur-sm rounded-xl p-4 shadow-lg bg-card/90 border border-border">
                <div className="text-center">
                  <p className="text-sm font-medium text-card-foreground mb-1">Studio Locations</p>
                  <p className="text-lg font-bold text-primary font-space">London & Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;