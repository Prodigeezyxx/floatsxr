import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import Process from '@/components/Process';
import Industries from '@/components/Industries';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Capabilities />
      <Process />
      <Industries />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
