
import React from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Upload, Check } from 'lucide-react';

const ReportWaste = () => {
  const [step, setStep] = React.useState(1);
  
  return (
    <section id="report" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block eco-badge mb-4">Report Waste</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make An <span className="bg-eco-gradient text-transparent bg-clip-text">Impact Today</span>
          </h2>
          <p className="text-gray-600">
            Take a photo of waste you've collected or found, and our AI will verify it. 
            Earn rewards for your positive environmental impact!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border overflow-hidden">
          <div className="p-8">
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
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-10 bg-gray-50">
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">Drag & drop your image here</p>
                      <p className="text-sm text-gray-500">or click to browse files</p>
                    </div>
                    <Button className="mt-4 bg-eco-gradient">
                      <Camera className="h-4 w-4 mr-2" /> Take a Photo
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-eco-gradient" onClick={() => setStep(2)}>Continue</Button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-8 text-center">
                <h3 className="text-xl font-medium">AI Verification</h3>
                <div className="border rounded-lg p-6 bg-white relative">
                  <div className="max-w-xs h-64 mx-auto bg-gray-100 rounded-lg mb-6">
                    {/* Placeholder for upload image */}
                    <div className="h-full flex items-center justify-center">
                      <p className="text-gray-400">Uploaded image preview</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                    <div className="text-center">
                      <div className="relative h-16 w-16 mx-auto mb-4">
                        <div className="absolute inset-0 rounded-full border-4 border-eco-green/30 border-t-eco-green animate-spin"></div>
                      </div>
                      <p className="font-medium text-eco-dark-green">AI is analyzing your waste image...</p>
                      <p className="text-sm text-gray-500 mt-1">This usually takes about 15 seconds</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button className="bg-eco-gradient" onClick={() => setStep(3)}>Skip Verification (Demo)</Button>
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
                        <span className="text-gray-600">CO₂ Saved:</span>
                        <span className="font-medium text-eco-green">2.4 kg</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>New Report</Button>
                  <Button className="bg-eco-gradient">View Your Impact</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportWaste;
