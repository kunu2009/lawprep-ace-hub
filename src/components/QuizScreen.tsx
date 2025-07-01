
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const QuizScreen = ({ quizData, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNext();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  const handleNext = () => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newAnswers);

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      // Calculate score
      let score = 0;
      newAnswers.forEach((answer, index) => {
        if (answer === quizData.questions[index].correct) {
          score++;
        }
      });
      onComplete(score, quizData.questions.length);
    }
  };

  const question = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pt-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="text-center">
            <div className="text-sm text-gray-600">Question {currentQuestion + 1} of {quizData.questions.length}</div>
            <div className="text-lg font-semibold text-red-600">{timeLeft}s</div>
          </div>
        </div>

        {/* Progress */}
        <Progress value={progress} className="mb-6 h-2" />

        {/* Question Card */}
        <Card className="p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4 leading-relaxed">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`w-full p-4 h-auto text-left justify-start rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-white text-gray-800 hover:border-gray-300"
                }`}
              >
                <span className="font-medium mr-3 text-sm bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </Button>
            ))}
          </div>
        </Card>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-medium rounded-lg"
        >
          {currentQuestion < quizData.questions.length - 1 ? "Next Question" : "Submit Quiz"}
        </Button>
      </div>
    </div>
  );
};

export default QuizScreen;
