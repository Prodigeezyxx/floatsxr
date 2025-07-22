
import { useState } from 'react';
import { toast } from "sonner";

const API_ENDPOINT = "wss://ws-api.runware.ai/v1";

export interface GenerateImageParams {
  positivePrompt: string;
  model?: string;
  numberResults?: number;
  outputFormat?: string;
  CFGScale?: number;
  scheduler?: string;
  strength?: number;
  promptWeighting?: "compel" | "sdEmbeds";
  seed?: number | null;
  lora?: string[];
}

export interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
  NSFWContent: boolean;
}

export class RunwareService {
  private ws: WebSocket | null = null;
  private apiKey: string | null = null;
  private connectionSessionUUID: string | null = null;
  private messageCallbacks: Map<string, (data: any) => void> = new Map();
  private isAuthenticated: boolean = false;
  private connectionPromise: Promise<void> | null = null;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.connectionPromise = this.connect();
  }

  private connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(API_ENDPOINT);
      
      this.ws.onopen = () => {
        console.log("WebSocket connected");
        this.authenticate().then(resolve).catch(reject);
      };

      this.ws.onmessage = (event) => {
        console.log("WebSocket message received:", event.data);
        const response = JSON.parse(event.data);
        
        if (response.error || response.errors) {
          console.error("WebSocket error response:", response);
          const errorMessage = response.errorMessage || response.errors?.[0]?.message || "An error occurred";
          toast.error(errorMessage);
          return;
        }

        if (response.data) {
          response.data.forEach((item: any) => {
            if (item.taskType === "authentication") {
              console.log("Authentication successful, session UUID:", item.connectionSessionUUID);
              this.connectionSessionUUID = item.connectionSessionUUID;
              this.isAuthenticated = true;
            } else {
              const callback = this.messageCallbacks.get(item.taskUUID);
              if (callback) {
                callback(item);
                this.messageCallbacks.delete(item.taskUUID);
              }
            }
          });
        }
      };

      this.ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        toast.error("Connection error. Please try again.");
        reject(error);
      };

      this.ws.onclose = () => {
        console.log("WebSocket closed, attempting to reconnect...");
        this.isAuthenticated = false;
        setTimeout(() => {
          this.connectionPromise = this.connect();
        }, 1000);
      };
    });
  }

  private authenticate(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        reject(new Error("WebSocket not ready for authentication"));
        return;
      }
      
      const authMessage = [{
        taskType: "authentication",
        apiKey: this.apiKey,
        ...(this.connectionSessionUUID && { connectionSessionUUID: this.connectionSessionUUID }),
      }];
      
      console.log("Sending authentication message");
      
      const authCallback = (event: MessageEvent) => {
        const response = JSON.parse(event.data);
        if (response.data?.[0]?.taskType === "authentication") {
          this.ws?.removeEventListener("message", authCallback);
          resolve();
        }
      };
      
      this.ws.addEventListener("message", authCallback);
      this.ws.send(JSON.stringify(authMessage));
    });
  }

  async generateImage(params: GenerateImageParams): Promise<GeneratedImage> {
    await this.connectionPromise;

    if (!this.ws || this.ws.readyState !== WebSocket.OPEN || !this.isAuthenticated) {
      this.connectionPromise = this.connect();
      await this.connectionPromise;
    }

    const taskUUID = crypto.randomUUID();
    
    return new Promise((resolve, reject) => {
      const message = [{
        taskType: "imageInference",
        taskUUID,
        model: params.model || "runware:100@1",
        width: 1024,
        height: 1024,
        numberResults: params.numberResults || 1,
        outputFormat: params.outputFormat || "WEBP",
        steps: 4,
        CFGScale: params.CFGScale || 1,
        scheduler: params.scheduler || "FlowMatchEulerDiscreteScheduler",
        strength: params.strength || 0.8,
        lora: params.lora || [],
        ...params,
      }];

      if (!params.seed) {
        delete message[0].seed;
      }

      if (message[0].model === "runware:100@1") {
        delete message[0].promptWeighting;
      }

      console.log("Sending image generation message:", message);

      this.messageCallbacks.set(taskUUID, (data) => {
        if (data.error) {
          reject(new Error(data.errorMessage));
        } else {
          resolve(data);
        }
      });

      this.ws.send(JSON.stringify(message));
    });
  }
}

const ImageGenerator = () => {
  const [apiKey, setApiKey] = useState('');
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const imagePrompts = {
    ar: "Professional person wearing sleek AR glasses interacting with holographic 3D objects floating in modern office space, futuristic interface, cyan and teal lighting, high-tech aesthetic, photorealistic",
    vr: "Person wearing premium VR headset in immersive virtual environment with floating digital interfaces, neon blue and teal lighting, futuristic space, professional photography style",
    modeling: "Modern 3D workspace with architectural visualization on multiple screens, sleek workstation, holographic building models, professional lighting, tech office environment",
    ai: "Futuristic AI avatar interface with digital neural network patterns, cyan holographic display, modern tech aesthetic, professional corporate style",
    digital_twin: "Aerial view of smart city with digital twin overlay, IoT sensors connected by glowing lines, futuristic urban planning visualization, teal and blue color scheme",
    spatial: "Mixed reality spatial computing interface with gesture controls, person interacting with floating 3D elements, modern office space, professional tech photography"
  };

  const generateImage = async (imageKey: string, prompt: string) => {
    if (!apiKey) {
      toast.error("Please enter your Runware API key first");
      return;
    }

    setLoading(prev => ({ ...prev, [imageKey]: true }));

    try {
      const service = new RunwareService(apiKey);
      const result = await service.generateImage({
        positivePrompt: prompt,
        width: 1200,
        height: 600,
        numberResults: 1,
        outputFormat: "WEBP"
      });

      setGeneratedImages(prev => ({ ...prev, [imageKey]: result.imageURL }));
      toast.success("Image generated successfully!");
    } catch (error) {
      console.error("Image generation error:", error);
      toast.error("Failed to generate image. Please check your API key.");
    } finally {
      setLoading(prev => ({ ...prev, [imageKey]: false }));
    }
  };

  const generateAllImages = async () => {
    if (!apiKey) {
      toast.error("Please enter your Runware API key first");
      return;
    }

    for (const [key, prompt] of Object.entries(imagePrompts)) {
      await generateImage(key, prompt);
      // Small delay between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  };

  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <h3 className="text-xl font-semibold mb-4 text-foreground">AI Image Generator for Capabilities</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-foreground">
          Runware API Key
        </label>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your Runware API key"
          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
        />
        <p className="text-sm text-muted-foreground mt-1">
          Get your API key from <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">runware.ai</a>
        </p>
      </div>

      <button
        onClick={generateAllImages}
        disabled={!apiKey || Object.values(loading).some(Boolean)}
        className="mb-6 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
      >
        {Object.values(loading).some(Boolean) ? "Generating..." : "Generate All Images"}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(imagePrompts).map(([key, prompt]) => (
          <div key={key} className="border border-border rounded-lg p-4">
            <h4 className="font-medium mb-2 text-foreground capitalize">{key.replace('_', ' ')}</h4>
            <div className="aspect-[2/1] bg-muted rounded-md mb-3 flex items-center justify-center">
              {generatedImages[key] ? (
                <img
                  src={generatedImages[key]}
                  alt={`Generated ${key} image`}
                  className="w-full h-full object-cover rounded-md"
                />
              ) : loading[key] ? (
                <div className="text-muted-foreground">Generating...</div>
              ) : (
                <div className="text-muted-foreground">No image</div>
              )}
            </div>
            <button
              onClick={() => generateImage(key, prompt)}
              disabled={!apiKey || loading[key]}
              className="w-full px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 disabled:opacity-50"
            >
              {loading[key] ? "Generating..." : "Generate"}
            </button>
          </div>
        ))}
      </div>

      {Object.keys(generatedImages).length > 0 && (
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2 text-foreground">Generated Image URLs:</h4>
          <div className="space-y-2 text-sm">
            {Object.entries(generatedImages).map(([key, url]) => (
              <div key={key} className="flex items-center gap-2">
                <span className="font-medium capitalize">{key.replace('_', ' ')}:</span>
                <code className="text-xs bg-background px-2 py-1 rounded flex-1 truncate">{url}</code>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
