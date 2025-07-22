import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TabbedCapabilities from '@/components/TabbedCapabilities';
import ImmersiveBooths from '@/components/ImmersiveBooths';
import StreamlinedProcess from '@/components/StreamlinedProcess';
import OptimizedIndustries from '@/components/OptimizedIndustries';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIImageGenerator from '@/components/AIImageGenerator';
import { Button } from '@/components/ui/button';
import { ImageIcon } from 'lucide-react';

const Index = () => {
  const [showImageGenerator, setShowImageGenerator] = useState(false);

  useEffect(() => {
    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animated elements
    document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .blur-in, .fade-in, .scale-in').forEach(el => {
      observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      
      {/* AI Image Generator Toggle */}
      <div className="fixed top-20 right-4 z-50">
        <Button
          onClick={() => setShowImageGenerator(!showImageGenerator)}
          variant="outline"
          size="sm"
          className="bg-background/90 backdrop-blur-sm"
        >
          <ImageIcon className="w-4 h-4 mr-2" />
          AI Images
        </Button>
      </div>

      {/* Conditional AI Image Generator */}
      {showImageGenerator && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm overflow-y-auto pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">AI Image Generator</h1>
              <Button
                onClick={() => setShowImageGenerator(false)}
                variant="outline"
              >
                Close
              </Button>
            </div>
            <AIImageGenerator />
          </div>
        </div>
      )}

      {/* Main Content */}
      <Hero />
      <TabbedCapabilities />
      <ImmersiveBooths />
      <StreamlinedProcess />
      <OptimizedIndustries />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
