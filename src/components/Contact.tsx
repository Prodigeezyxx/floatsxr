import { Mail, Calendar, MapPin, Globe, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4 slide-in-up">
            Let's Build Something Bold
          </p>
          <h2 className="text-3xl lg:text-4xl tracking-tight font-medium text-foreground mb-6 slide-in-up delay-200">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-lg text-muted-foreground slide-in-up delay-300">
            We're open to collaboration, commissions, consulting, and moonshots.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-muted border border-border rounded-2xl p-8 scale-in delay-400">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
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
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                  placeholder="Tell us about your immersive vision..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 px-8 text-black font-medium rounded-lg transition-colors duration-200 bg-primary hover:bg-primary/90"
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