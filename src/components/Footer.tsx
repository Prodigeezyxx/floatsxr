const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="text-lg font-bold text-foreground font-space">Floats XR</span>
            </div>
            <p className="text-muted-foreground font-inter mb-4">
              Immersive Studio for the Spatial Era
            </p>
            <p className="text-sm text-muted-foreground font-inter">
              © 2025 Floats XR. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-foreground">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Augmented Reality</a></li>
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Virtual Reality</a></li>
              <li><a href="#" className="transition-colors hover:text-primary font-inter">3D Visualization</a></li>
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Digital Twins</a></li>
              <li><a href="#" className="transition-colors hover:text-primary font-inter">AI Interfaces</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-foreground">
              Industries
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Brands & Marketing</a></li>
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Real Estate</a></li>
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Healthcare</a></li>
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Education</a></li>
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Smart Cities</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-foreground">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Terms of Use</a></li>
              <li><a href="#" className="transition-colors hover:text-primary font-inter">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;