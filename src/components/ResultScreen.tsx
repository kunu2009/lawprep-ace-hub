
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ResultScreen = ({ score, totalQuestions, onBack, onRetry }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 80) return { message: "Excellent! 🎉", color: "text-green-600" };
    if (percentage >= 60) return { message: "Good Job! 👍", color: "text-blue-600" };
    if (percentage >= 40) return { message: "Keep Practicing! 💪", color: "text-orange-600" };
    return { message: "Need More Practice 📚", color: "text-red-600" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8 pt-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="p-2 hover:bg-gray-100 rounded-full mr-3"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">Quiz Results</h1>
        </div>

        {/* Results Card */}
        <Card className="p-8 text-center mb-8 bg-white/80 backdrop-blur-sm">
          <div className="mb-6">
            <div className="text-6xl font-bold text-blue-600 mb-2">{percentage}%</div>
            <div className={`text-xl font-semibold ${performance.color} mb-2`}>
              {performance.message}
            </div>
            <div className="text-gray-600">
              You got {score} out of {totalQuestions} questions correct
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-green-700">Correct</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{totalQuestions - score}</div>
              <div className="text-sm text-red-700">Incorrect</div>
            </div>
          </div>

          {/* Progress Ring */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-200"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${(percentage / 100) * 314} 314`}
                className="text-blue-600"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">{percentage}%</span>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={onRetry}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
          >
            Try Again
          </Button>
          <Button
            onClick={onBack}
            variant="outline"
            className="w-full h-12 border-2 border-gray-300 hover:bg-gray-50 font-medium rounded-lg"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
