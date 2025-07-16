const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="fade-in">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Floats XR</h3>
            <p className="text-muted-foreground mb-4">
              Immersive Studio for the Spatial Era
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Floats XR. All rights reserved.
            </p>
          </div>
          
          <div className="fade-in delay-200">
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-foreground">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Augmented Reality</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Virtual Reality</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">3D Visualization</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Digital Twins</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">AI Interfaces</a></li>
            </ul>
          </div>
          
          <div className="fade-in delay-400">
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-foreground">
              Industries
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Brands & Marketing</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Real Estate</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Healthcare</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Education</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Smart Cities</a></li>
            </ul>
          </div>
          
          <div className="fade-in delay-600">
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-foreground">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Terms of Use</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;