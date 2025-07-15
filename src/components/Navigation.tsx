import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-background/80 border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold tracking-tight font-space text-foreground">
              Floats XR
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary">
              Home
            </a>
            <a href="#capabilities" className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary">
              Capabilities
            </a>
            <a href="#process" className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary">
              Process
            </a>
            <a href="#industries" className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary">
              Industries
            </a>
            <a href="#about" className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary">
              About
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-primary"
            >
              Start a Project
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md transition-colors hover:bg-muted"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-primary">Home</a>
              <a href="#capabilities" className="text-sm font-medium text-muted-foreground hover:text-primary">Capabilities</a>
              <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-primary">Process</a>
              <a href="#industries" className="text-sm font-medium text-muted-foreground hover:text-primary">Industries</a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary">About</a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full text-sm font-medium bg-gradient-primary text-primary-foreground"
              >
                Start a Project
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;