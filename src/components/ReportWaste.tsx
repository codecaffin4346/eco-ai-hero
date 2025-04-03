
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Upload, Check, Loader2, X, Coins } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "@/components/ui/use-toast";
import LoginModal from './LoginModal';
import { Card, CardContent } from "@/components/ui/card";

const ReportWaste = () => {
  const [step, setStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
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
      }, 1500);
    }
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleContinue = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    
    if (step === 1) {
      if (!uploadedImage) {
        toast({
          title: "No image selected",
          description: "Please upload an image to continue",
          variant: "destructive",
        });
        return;
      }
      
      setStep(2);
      setIsVerifying(true);
      
      // Simulate AI verification delay
      setTimeout(() => {
        setIsVerifying(false);
      }, 3000);
    } else if (step === 2) {
      setStep(3);
    }
  };
  
  const handleReset = () => {
    setStep(1);
    setUploadedImage(null);
  };

  return (
    <section id="report" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block eco-badge mb-4">Report Waste</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Make An <span className="bg-eco-gradient text-transparent bg-clip-text">Impact Today</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Take a photo of waste you've collected or found, and our AI will verify it. 
            Earn rewards and carbon credits for your positive environmental impact!
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto border-0 shadow-lg overflow-hidden bg-white">
          <CardContent className="p-8">
            {/* Progress Steps */}
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-eco-gradient -translate-y-1/2 z-0" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
              
              {[1, 2, 3].map((s) => (
                <div key={s} className="relative z-10 flex flex-col items-center">
                  <div 
                    className={`h-10 w-10 rounded-full flex items-center justify-center font-medium ${
                      s < step ? 'bg-eco-green text-white' : 
                      s === step ? 'bg-white border-2 border-eco-green text-eco-green' :
                      'bg-white border-2 border-gray-200 text-gray-400'
                    }`}
                  >
                    {s < step ? <Check className="h-5 w-5" /> : s}
                  </div>
                  <p className={`mt-2 text-sm ${s === step ? 'text-eco-dark-green font-medium' : 'text-gray-500'}`}>
                    {s === 1 ? "Upload Image" : s === 2 ? "AI Verification" : "Receive Rewards"}
                  </p>
                </div>
              ))}
            </div>
            
            {step === 1 && (
              <div className="space-y-8 text-center">
                <h3 className="text-xl font-medium">Upload Waste Image</h3>
                <div 
                  className={`border-2 ${
                    uploadedImage ? 'border-eco-green' : 'border-dashed border-gray-200'
                  } rounded-lg p-6 bg-gray-50 relative transition-all`}
                >
                  {uploadedImage ? (
                    <div className="relative">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded waste" 
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <button 
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-red-50"
                        onClick={() => setUploadedImage(null)}
                      >
                        <X className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  ) : isUploading ? (
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
                        <p className="font-medium">Drag & drop your image here</p>
                        <p className="text-sm text-gray-500">or click to browse files</p>
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
                          className="bg-eco-gradient hover:shadow-md transition-all"
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
                
                <div className="flex justify-end">
                  <Button 
                    className={`bg-eco-gradient hover:shadow-md transition-all ${!uploadedImage ? 'opacity-70' : 'hover:opacity-90'}`} 
                    onClick={handleContinue}
                    disabled={isUploading || !uploadedImage}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-8 text-center">
                <h3 className="text-xl font-medium">AI Verification</h3>
                <div className="border rounded-lg p-6 bg-white relative">
                  <div className="max-w-xs h-64 mx-auto bg-gray-100 rounded-lg mb-6 overflow-hidden">
                    {uploadedImage && (
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded waste" 
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>
                  
                  {isVerifying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                      <div className="text-center">
                        <div className="relative h-16 w-16 mx-auto mb-4">
                          <div className="absolute inset-0 rounded-full border-4 border-eco-green/30 border-t-eco-green animate-spin"></div>
                        </div>
                        <p className="font-medium text-eco-dark-green">AI is analyzing your waste image...</p>
                        <p className="text-sm text-gray-500 mt-1">This usually takes about 15 seconds</p>
                      </div>
                    </div>
                  )}
                  
                  {!isVerifying && (
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full">
                        <Check className="h-4 w-4" /> 
                        Verification Successful
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500">Waste Type</p>
                          <p className="font-medium">Mixed Recyclables</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500">Estimated Weight</p>
                          <p className="font-medium">1.2 kg</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500">Reward Points</p>
                          <p className="font-medium text-eco-blue">+35 points</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-xs text-gray-500">Carbon Credits</p>
                          <p className="font-medium text-eco-green flex items-center">
                            +35 <Coins className="h-3 w-3 ml-1" />
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button 
                    className="bg-eco-gradient hover:shadow-md transition-all" 
                    onClick={handleContinue}
                    disabled={isVerifying}
                  >
                    {isVerifying ? 'Verifying...' : 'Confirm & Continue'}
                  </Button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-8 text-center">
                <h3 className="text-xl font-medium">Congratulations!</h3>
                <div className="p-8">
                  <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-10 w-10 text-eco-green" />
                  </div>
                  <h4 className="text-xl font-bold text-eco-dark-green mb-2">Waste Verified Successfully</h4>
                  <p className="text-gray-600">Thank you for your contribution to a cleaner environment!</p>
                  
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <div className="flex justify-between mb-3">
                      <span className="font-medium">Verification Results:</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Waste Type:</span>
                        <span className="font-medium">Mixed Recyclables</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Estimated Weight:</span>
                        <span className="font-medium">1.2 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reward Points:</span>
                        <span className="font-medium text-eco-blue">+35 points</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Carbon Credits:</span>
                        <span className="font-medium text-eco-green flex items-center">
                          +35 <Coins className="h-3 w-3 ml-1" />
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">CO₂ Saved:</span>
                        <span className="font-medium text-eco-green">2.4 kg</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h5 className="font-medium text-eco-blue mb-1">Carbon Credits Earned</h5>
                      <p className="text-sm text-gray-600">
                        You've earned 35 carbon credits that you can trade or use for offset projects.
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-3 border-eco-blue text-eco-blue hover:bg-eco-blue/10 w-full"
                        onClick={() => {
                          window.location.href = '/carbon-credits';
                        }}
                      >
                        View Your Credits
                      </Button>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h5 className="font-medium text-eco-green mb-1">Leaderboard Impact</h5>
                      <p className="text-sm text-gray-600">
                        Your points have been added to the leaderboard. Keep up the good work!
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-3 border-eco-green text-eco-green hover:bg-eco-green/10 w-full"
                        onClick={() => {
                          document.getElementById('leaderboard')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        View Leaderboard
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleReset}>New Report</Button>
                  <Button 
                    className="bg-eco-gradient hover:shadow-md transition-all"
                    onClick={() => {
                      window.location.href = '/carbon-credits';
                    }}
                  >
                    Manage Carbon Credits
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </section>
  );
};

export default ReportWaste;
