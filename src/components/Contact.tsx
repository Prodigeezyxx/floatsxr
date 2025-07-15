import { Mail, Calendar, MapPin, Globe, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-cosmic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
            Let's Build Something Bold
          </p>
          <h2 className="text-3xl lg:text-4xl tracking-tight font-bold text-foreground mb-6 font-space">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            We're open to collaboration, commissions, consulting, and moonshots.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-space">Email</h3>
                  <a 
                    href="mailto:hello@floatsanywhere.com" 
                    className="text-primary hover:text-primary-glow transition-colors font-inter"
                  >
                    hello@floatsanywhere.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-space">Book a Call</h3>
                  <p className="text-muted-foreground font-inter">Schedule a consultation to discuss your project</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-space">Offices</h3>
                  <p className="text-muted-foreground font-inter">London & Lagos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-space">Web</h3>
                  <p className="text-muted-foreground font-inter">floatsanywhere.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 font-space">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-2 font-inter">@floatsanywhere</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2 font-inter">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground font-inter"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2 font-inter">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground font-inter"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2 font-inter">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground font-inter"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2 font-inter">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground font-inter">
                  <option>Augmented Reality (AR)</option>
                  <option>Virtual Reality (VR)</option>
                  <option>3D Visualization</option>
                  <option>Digital Twin</option>
                  <option>AI + Spatial Interfaces</option>
                  <option>Full XR Experience</option>
                  <option>Consultation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2 font-inter">
                  Message
                </label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground font-inter" 
                  placeholder="Tell us about your immersive vision..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 px-8 bg-gradient-primary text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:shadow-primary font-space"
              >
                Start Your XR Journey
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;