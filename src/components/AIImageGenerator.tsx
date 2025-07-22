
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RunwareService } from '@/services/runware';
import { toast } from 'sonner';
import { Loader2, Download, Copy } from 'lucide-react';

interface ImagePrompt {
  id: string;
  section: string;
  description: string;
  prompt: string;
  width: number;
  height: number;
}

const imagePrompts: ImagePrompt[] = [
  {
    id: 'hero-main',
    section: 'Hero Section',
    description: 'Main hero background',
    prompt: 'Professional modern tech workspace, person wearing sleek AR/VR headset, holographic 3D displays floating in air, futuristic office environment, soft blue and purple lighting, photorealistic, high-tech atmosphere, clean minimal design',
    width: 1200,
    height: 800
  },
  {
    id: 'ar-vr-tab',
    section: 'AR/VR Capabilities',
    description: 'AR/VR technology showcase',
    prompt: 'Split scene showing augmented reality overlay on left with person pointing at floating 3D objects, virtual reality experience on right with person in VR headset exploring digital environment, modern office setting, professional lighting, photorealistic',
    width: 1024,
    height: 600
  },
  {
    id: 'ai-3d-tab',
    section: '3D/AI Capabilities',
    description: '3D modeling and AI workspace',
    prompt: 'Modern 3D design studio, multiple monitors showing 3D models and AI avatars, designer working on holographic interface, floating AI assistant, professional workspace, blue and white color scheme, photorealistic, high-tech environment',
    width: 1024,
    height: 600
  },
  {
    id: 'spatial-tech-tab',
    section: 'Spatial Tech Capabilities',
    description: 'Digital twins and spatial computing',
    prompt: 'Futuristic control room with large displays showing city digital twin, person using gesture controls to manipulate 3D city model, mixed reality interface, professional setting, modern architecture, photorealistic',
    width: 1024,
    height: 600
  },
  {
    id: 'immersive-booth',
    section: 'Immersive Booths',
    description: 'Trade show booth with LED panels',
    prompt: 'Modern trade show booth with curved LED panel walls, visitors experiencing immersive content, interactive displays, professional exhibition environment, branded space, people engaged with technology, photorealistic',
    width: 1024,
    height: 700
  },
  {
    id: 'process-planning',
    section: 'Process - Planning',
    description: 'Design planning workspace',
    prompt: 'Modern office meeting room, team collaborating on XR project planning, whiteboard with sketches, laptops showing 3D designs, professional diverse team, bright lighting, contemporary design, photorealistic',
    width: 800,
    height: 600
  },
  {
    id: 'process-development',
    section: 'Process - Development',
    description: 'Development environment',
    prompt: 'High-tech development workspace, multiple monitors showing code and 3D environments, developer working on VR application, modern office setup, professional atmosphere, blue screen glow, photorealistic',
    width: 800,
    height: 600
  },
  {
    id: 'industry-marketing',
    section: 'Industry - Marketing',
    description: 'Brand activation with AR',
    prompt: 'Modern marketing activation event, people using smartphones to view AR product overlay, branded display, professional event space, engaging interactive experience, photorealistic',
    width: 800,
    height: 600
  },
  {
    id: 'industry-realestate',
    section: 'Industry - Real Estate',
    description: 'Virtual property tour',
    prompt: 'Professional real estate agent showing virtual property tour on tablet to clients, modern office or showroom, 3D architectural visualization on screen, professional business setting, photorealistic',
    width: 800,
    height: 600
  }
];

const AIImageGenerator = () => {
  const [apiKey, setApiKey] = useState('dwk71SUyrqJ8E3WBvksfGjuiBFb1oLCa');
  const [generating, setGenerating] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [runwareService, setRunwareService] = useState<RunwareService | null>(null);

  const initializeService = () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Runware API key');
      return null;
    }
    
    if (!runwareService) {
      const service = new RunwareService(apiKey);
      setRunwareService(service);
      return service;
    }
    
    return runwareService;
  };

  const generateImage = async (imagePrompt: ImagePrompt) => {
    const service = initializeService();
    if (!service) return;

    setGenerating(imagePrompt.id);
    try {
      toast.info(`Generating ${imagePrompt.section} image...`);
      
      const result = await service.generateImage({
        positivePrompt: imagePrompt.prompt,
        width: imagePrompt.width,
        height: imagePrompt.height,
        numberResults: 1,
        outputFormat: 'WEBP'
      });

      setGeneratedImages(prev => ({
        ...prev,
        [imagePrompt.id]: result.imageURL
      }));

      toast.success(`${imagePrompt.section} image generated successfully!`);
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error(`Failed to generate ${imagePrompt.section} image`);
    } finally {
      setGenerating(null);
    }
  };

  const generateAllImages = async () => {
    const service = initializeService();
    if (!service) return;

    for (const imagePrompt of imagePrompts) {
      if (!generatedImages[imagePrompt.id]) {
        await generateImage(imagePrompt);
        // Add delay between requests
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('URL copied to clipboard!');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Image Generator for Floats XR</CardTitle>
          <CardDescription>
            Generate photorealistic images for all website sections using Runware AI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter your Runware API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={generateAllImages}
              disabled={generating !== null}
              className="whitespace-nowrap"
            >
              {generating ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : null}
              Generate All Images
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imagePrompts.map((imagePrompt) => (
          <Card key={imagePrompt.id}>
            <CardHeader>
              <CardTitle className="text-lg">{imagePrompt.section}</CardTitle>
              <CardDescription>{imagePrompt.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                {generatedImages[imagePrompt.id] ? (
                  <img 
                    src={generatedImages[imagePrompt.id]} 
                    alt={imagePrompt.description}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No image generated
                  </div>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => generateImage(imagePrompt)}
                  disabled={generating === imagePrompt.id}
                  className="flex-1"
                >
                  {generating === imagePrompt.id ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : null}
                  Generate
                </Button>
                
                {generatedImages[imagePrompt.id] && (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(generatedImages[imagePrompt.id])}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(generatedImages[imagePrompt.id], '_blank')}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>

              {generatedImages[imagePrompt.id] && (
                <div className="text-xs text-muted-foreground break-all bg-muted p-2 rounded">
                  {generatedImages[imagePrompt.id]}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AIImageGenerator;
