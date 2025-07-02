
import React, { useState } from "react";
import { ArrowLeft, ChevronUp, ChevronDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const lawReelsData = [
  {
    id: 1,
    title: "Contract Law Basics",
    content: "A contract is a legally binding agreement between two or more parties. Key elements: Offer, Acceptance, Consideration, Capacity, and Legality.",
    category: "Contract Law",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Tort Law - Negligence",
    content: "Negligence requires 4 elements: Duty of Care, Breach of Duty, Causation, and Damages. The plaintiff must prove all elements to succeed.",
    category: "Tort Law",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Constitutional Law",
    content: "The Constitution is the supreme law. Fundamental Rights are enforceable against the state under Articles 12-35 of the Indian Constitution.",
    category: "Constitutional Law",
    color: "from-red-500 to-pink-600"
  },
  {
    id: 4,
    title: "Criminal Law - IPC",
    content: "Indian Penal Code defines crimes and punishments. Mens rea (guilty mind) and actus reus (guilty act) are essential elements of most crimes.",
    category: "Criminal Law",
    color: "from-orange-500 to-yellow-600"
  },
  {
    id: 5,
    title: "Property Law",
    content: "Property can be movable or immovable. Transfer of Property Act governs sale, mortgage, lease, and gift of immovable property.",
    category: "Property Law",
    color: "from-purple-500 to-indigo-600"
  }
];

const FlashCardReels = ({ onBack }) => {
  const [currentReel, setCurrentReel] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePrevious = () => {
    setCurrentReel((prev) => (prev > 0 ? prev - 1 : lawReelsData.length - 1));
    setIsFlipped(false);
  };

  const handleNext = () => {
    setCurrentReel((prev) => (prev < lawReelsData.length - 1 ? prev + 1 : 0));
    setIsFlipped(false);
  };

  const currentData = lawReelsData[currentReel];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
        <Button
          onClick={onBack}
          variant="ghost"
          className="p-2 hover:bg-white/20 rounded-full text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-xl font-bold">Law Reels</h1>
        <div className="w-10" />
      </div>

      {/* Main Content Area */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-sm">
          {/* Navigation Buttons */}
          <div className="flex flex-col items-center space-y-4 mb-6">
            <Button
              onClick={handlePrevious}
              variant="ghost"
              className="p-3 hover:bg-white/20 rounded-full text-white"
            >
              <ChevronUp className="w-8 h-8" />
            </Button>
          </div>

          {/* Card */}
          <Card 
            className={`relative h-96 bg-gradient-to-br ${currentData.color} border-0 shadow-2xl cursor-pointer transform transition-transform duration-300 hover:scale-105`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className="absolute inset-0 bg-black/20 rounded-lg" />
            <div className="relative p-6 h-full flex flex-col justify-between text-white">
              {/* Category Badge */}
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                  {currentData.category}
                </span>
                <BookOpen className="w-6 h-6 opacity-80" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  {currentData.title}
                </h2>
                <p className="text-lg leading-relaxed text-center opacity-90">
                  {currentData.content}
                </p>
              </div>

              {/* Bottom Info */}
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-70">
                  {currentReel + 1} of {lawReelsData.length}
                </span>
                <span className="text-sm opacity-70">
                  Tap to flip
                </span>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex flex-col items-center space-y-4 mt-6">
            <Button
              onClick={handleNext}
              variant="ghost"
              className="p-3 hover:bg-white/20 rounded-full text-white"
            >
              <ChevronDown className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {lawReelsData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentReel ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashCardReels;
