import { Globe, Users, Zap, Award } from 'lucide-react';
import studioImage from '@/assets/studio-workspace.jpg';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4 slide-in-left">
                Who We Are
              </p>
              <h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-foreground mb-6 slide-in-left delay-200">
                Spatializing the Internet
              </h2>
              <div className="space-y-4 text-muted-foreground slide-in-left delay-300">
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
              <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-shadow scale-in delay-400">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex bg-primary/20 rounded-lg items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-medium text-foreground">Global</p>
                    <p className="text-sm text-muted-foreground">Footprint</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Active across Africa, Europe, and North America</p>
              </div>
              
              <div className="p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-shadow scale-in delay-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex bg-accent/20 rounded-lg items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-medium text-foreground">Rapid</p>
                    <p className="text-sm text-muted-foreground">Prototyping</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">From idea to demo in days, not weeks</p>
              </div>
            </div>

            <div className="space-y-4 slide-in-left delay-600">
              <h3 className="text-xl font-semibold text-foreground">Why Partner with Us?</h3>
              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">100% XR-native studio with hybrid design, dev, and AI fluency</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Hardware agnostic — works on any screen or headset</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Every experience is both emotionally resonant and technically robust</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1675981004381-6305f7dd07fe?w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover w-full h-auto blur-in delay-200"
              />
              <img 
                src="https://images.unsplash.com/photo-1642923051153-07d4c98fe203?w=800&q=80" 
                alt="Design process" 
                className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover w-full h-auto blur-in delay-400"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.unsplash.com/photo-1650473395434-8674d953ef2f?w=800&q=80" 
                alt="Creative workspace" 
                className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover w-full h-auto blur-in delay-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1644251966613-170a26996adb?w=800&q=80" 
                alt="Strategy session" 
                className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover w-full h-auto blur-in delay-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;