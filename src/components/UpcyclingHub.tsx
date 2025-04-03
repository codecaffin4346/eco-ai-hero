
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Upload, Loader2, Lightbulb, Recycle, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "@/components/ui/use-toast";
import LoginModal from './LoginModal';

const upcyclingIdeas = [
  {
    title: "Plastic Bottle Planters",
    description: "Transform plastic bottles into hanging planters for herbs or small plants",
    image: "https://images.unsplash.com/photo-1582782897948-9e7e5316a5fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    difficulty: "Easy",
    materials: ["Plastic bottles", "Scissors", "String", "Soil", "Seeds"]
  },
  {
    title: "Glass Jar Lanterns",
    description: "Convert glass jars into beautiful ambient lanterns for your home or garden",
    image: "https://images.unsplash.com/photo-1477747219816-5238ddf073c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    difficulty: "Easy",
    materials: ["Glass jars", "Tea lights", "Wire", "Decorative elements"]
  },
  {
    title: "Cardboard Furniture",
    description: "Create sturdy, customizable furniture from cardboard boxes",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    difficulty: "Medium",
    materials: ["Cardboard boxes", "Box cutter", "Glue gun", "Decorative paper"]
  }
];

const UpcyclingHub = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [recommendedIdeas, setRecommendedIdeas] = useState<typeof upcyclingIdeas>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const { isAuthenticated } = useAuth();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (event) => {
          setUploadedImage(event.target?.result as string);
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const generateIdeas = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    
    if (!uploadedImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image of waste to get upcycling ideas",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      // Randomly select 2 of the predefined ideas
      const shuffled = [...upcyclingIdeas].sort(() => 0.5 - Math.random());
      setRecommendedIdeas(shuffled.slice(0, 2));
      setIsGenerating(false);
      
      toast({
        title: "Ideas Generated!",
        description: "Our AI has found creative ways to upcycle your waste",
      });
    }, 2500);
  };
  
  const resetForm = () => {
    setUploadedImage(null);
    setRecommendedIdeas([]);
  };

  return (
    <section id="upcycling" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block eco-badge mb-4">Upcycling Hub</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Waste Into <span className="bg-eco-gradient text-transparent bg-clip-text">Beautiful Creations</span>
          </h2>
          <p className="text-gray-600">
            Upload images of your waste items and our AI will suggest creative DIY projects 
            or connect you with local upcycling businesses that can transform them.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border overflow-hidden p-8">
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <Recycle className="h-5 w-5 mr-2 text-eco-green" />
              Get Upcycling Ideas
            </h3>
            
            {uploadedImage ? (
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded waste" 
                    className="w-full h-64 object-contain bg-gray-50 rounded-lg"
                  />
                  <Button 
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2 h-8 w-8 p-0"
                    onClick={resetForm}
                  >
                    <Loader2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  className="w-full bg-eco-gradient"
                  onClick={generateIdeas}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" /> 
                      Generating Ideas...
                    </>
                  ) : (
                    <>
                      <Lightbulb className="h-4 w-4 mr-2" /> 
                      Get Upcycling Ideas
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 bg-gray-50">
                {isUploading ? (
                  <div className="flex flex-col items-center gap-4 py-10">
                    <Loader2 className="h-10 w-10 text-eco-green animate-spin" />
                    <p className="font-medium text-gray-700">Uploading image...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 py-10">
                    <div 
                      className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                      onClick={handleUploadClick}
                    >
                      <Upload className="h-8 w-8 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">Upload an image of your waste</p>
                      <p className="text-sm text-gray-500">Our AI will suggest creative ways to repurpose it</p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      ref={fileInputRef}
                      accept="image/*" 
                      onChange={handleFileChange}
                    />
                    <div className="flex gap-4 mt-4">
                      <Button 
                        className="bg-eco-gradient"
                        onClick={handleUploadClick}
                        disabled={isUploading}
                      >
                        <Upload className="h-4 w-4 mr-2" /> Upload Image
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          // In a real app, this would trigger camera capture
                          toast({
                            title: "Camera Access",
                            description: "Opening camera to take a photo...",
                          });
                        }}
                        disabled={isUploading}
                      >
                        <Camera className="h-4 w-4 mr-2" /> Take a Photo
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border overflow-hidden p-8">
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-eco-green" />
              DIY Project Ideas
            </h3>
            
            {recommendedIdeas.length > 0 ? (
              <div className="space-y-6">
                {recommendedIdeas.map((idea, index) => (
                  <div key={index} className="border rounded-xl overflow-hidden bg-gray-50 group hover:shadow-md transition-all">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={idea.image} 
                        alt={idea.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-eco-dark-green">{idea.title}</h4>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                          {idea.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{idea.description}</p>
                      
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Materials needed:</p>
                        <div className="flex flex-wrap gap-1">
                          {idea.materials.map((material, i) => (
                            <span 
                              key={i} 
                              className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-eco-green border-eco-green hover:bg-eco-green/10"
                        onClick={() => {
                          toast({
                            title: "Tutorial Loading",
                            description: `Opening detailed tutorial for ${idea.title}...`,
                          });
                        }}
                      >
                        View Full Tutorial <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={resetForm}
                >
                  Try Another Item
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-64 border-2 border-dashed border-gray-200 rounded-lg p-6 bg-gray-50">
                <Lightbulb className="h-12 w-12 text-gray-300 mb-4" />
                <h4 className="text-lg font-medium text-gray-500 mb-2">No Ideas Generated Yet</h4>
                <p className="text-gray-400 text-sm max-w-xs">
                  Upload an image of your waste item and our AI will suggest creative ways to repurpose it.
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-16 bg-eco-gradient-subtle rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-7 w-7 text-eco-green" />
              </div>
              <h4 className="font-bold text-eco-dark-green mb-2">Reduce Waste</h4>
              <p className="text-gray-600 text-sm">
                Give new life to items that would otherwise end up in landfills
              </p>
            </div>
            <div className="text-center p-4">
              <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-7 w-7 text-eco-green" />
              </div>
              <h4 className="font-bold text-eco-dark-green mb-2">Creative Solutions</h4>
              <p className="text-gray-600 text-sm">
                Our AI suggests innovative ways to transform waste into useful items
              </p>
            </div>
            <div className="text-center p-4">
              <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Community" 
                  className="h-7 w-7 object-cover rounded-full"
                />
              </div>
              <h4 className="font-bold text-eco-dark-green mb-2">Join the Community</h4>
              <p className="text-gray-600 text-sm">
                Connect with local upcycling businesses and enthusiasts
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </section>
  );
};

export default UpcyclingHub;
