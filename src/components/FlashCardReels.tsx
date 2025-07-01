
import { useState, useEffect } from "react";
import { ArrowLeft, Heart, Bookmark, Share2, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FlashCardReels = ({ onBack }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [likedCards, setLikedCards] = useState(new Set());
  const [bookmarkedCards, setBookmarkedCards] = useState(new Set());

  const flashCards = [
    {
      id: 1,
      title: "Article 14 - Right to Equality",
      content: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
      category: "Constitutional Law",
      fact: "This is the foundation of equality in Indian Constitution",
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Basic Structure Doctrine",
      content: "Established in Kesavananda Bharati Case (1973). Parliament cannot alter the basic structure of the Constitution.",
      category: "Constitutional Law",
      fact: "This landmark case saved Indian democracy",
      color: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Section 375 - Rape Definition",
      content: "A man commits rape if he has sexual intercourse with a woman against her will, without her consent, or with her consent obtained by fraud.",
      category: "Criminal Law",
      fact: "Recently amended to include marital rape exceptions",
      color: "bg-gradient-to-br from-red-500 to-red-700"
    },
    {
      id: 4,
      title: "Consideration in Contracts",
      content: "An agreement without consideration is void. Consideration means something in return - it can be past, present, or future.",
      category: "Contract Law",
      fact: "Love and affection is valid consideration between near relatives",
      color: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      id: 5,
      title: "Negligence - Donoghue v Stevenson",
      content: "You must take reasonable care to avoid acts which you can reasonably foresee would likely injure your neighbor.",
      category: "Tort Law",
      fact: "This case established the modern law of negligence",
      color: "bg-gradient-to-br from-orange-500 to-orange-700"
    },
    {
      id: 6,
      title: "Article 32 - Right to Constitutional Remedies",
      content: "Dr. Ambedkar called it the 'Heart and Soul' of the Constitution. It empowers citizens to approach Supreme Court directly.",
      category: "Constitutional Law",
      fact: "This article can never be suspended, even during emergency",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-700"
    }
  ];

  const handleScroll = (direction) => {
    if (direction === 'up' && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    } else if (direction === 'down' && currentCard < flashCards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const toggleLike = () => {
    const newLiked = new Set(likedCards);
    if (newLiked.has(currentCard)) {
      newLiked.delete(currentCard);
    } else {
      newLiked.add(currentCard);
    }
    setLikedCards(newLiked);
  };

  const toggleBookmark = () => {
    const newBookmarked = new Set(bookmarkedCards);
    if (newBookmarked.has(currentCard)) {
      newBookmarked.delete(currentCard);
    } else {
      newBookmarked.add(currentCard);
    }
    setBookmarkedCards(newBookmarked);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      handleScroll('up');
    } else if (e.key === 'ArrowDown') {
      handleScroll('down');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCard]);

  const currentFlashCard = flashCards[currentCard];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
        <Button
          onClick={onBack}
          variant="ghost"
          className="p-2 hover:bg-white/20 rounded-full text-white"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold">Law Reels</h1>
        <div className="w-8" />
      </div>

      {/* Main Card */}
      <div className="relative h-screen flex items-center justify-center p-4">
        <Card className={`w-full max-w-sm h-5/6 ${currentFlashCard.color} border-0 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
            {/* Category Badge */}
            <div className="text-center">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                {currentFlashCard.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center space-y-6">
              <h2 className="text-2xl font-bold text-center leading-tight">
                {currentFlashCard.title}
              </h2>
              <p className="text-lg leading-relaxed text-center">
                {currentFlashCard.content}
              </p>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm italic text-center">
                  💡 {currentFlashCard.fact}
                </p>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="text-center">
              <span className="text-sm opacity-75">
                {currentCard + 1} of {flashCards.length}
              </span>
            </div>
          </div>
        </Card>

        {/* Navigation Controls */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          <Button
            onClick={() => handleScroll('up')}
            disabled={currentCard === 0}
            variant="ghost"
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 text-white"
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
          <Button
            onClick={() => handleScroll('down')}
            disabled={currentCard === flashCards.length - 1}
            variant="ghost"
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 text-white"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="absolute right-4 bottom-20 flex flex-col space-y-4">
          <Button
            onClick={toggleLike}
            variant="ghost"
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <Heart 
              className={`w-6 h-6 ${likedCards.has(currentCard) ? 'fill-red-500 text-red-500' : ''}`} 
            />
          </Button>
          <Button
            onClick={toggleBookmark}
            variant="ghost"
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <Bookmark 
              className={`w-6 h-6 ${bookmarkedCards.has(currentCard) ? 'fill-yellow-500 text-yellow-500' : ''}`} 
            />
          </Button>
          <Button
            variant="ghost"
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <Share2 className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Swipe Hint */}
      {currentCard === 0 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center animate-pulse">
          <p>Swipe up/down or use arrow keys</p>
        </div>
      )}
    </div>
  );
};

export default FlashCardReels;
