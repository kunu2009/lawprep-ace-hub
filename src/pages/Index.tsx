import { useState } from "react";
import { Book, Calendar, Home, List, Square, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SubjectScreen from "@/components/SubjectScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";
import NotesScreen from "@/components/NotesScreen";
import PlannerScreen from "@/components/PlannerScreen";
import FlashCardReels from "@/components/FlashCardReels";
import ProgressScreen from "@/components/ProgressScreen";
import { subjects } from "@/lib/data";

const QUIZ_HISTORY_KEY = "7klawprep_quiz_history";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

  const startQuiz = (subject, topic) => {
    // Find the questions for the selected subject and topic
    const subjectObj = subjects.find((s) => s.name === subject.name);
    const topicObj = subjectObj?.topics.find((t) => t.name === topic.name);
    if (topicObj && topicObj.questions) {
      setQuizQuestions(topicObj.questions);
      setCurrentScreen("quiz");
    }
  };

  const showResults = (score, totalQuestions) => {
    setQuizResult({ score, totalQuestions });
    setCurrentScreen("results");
    // Save quiz result to localStorage
    const history = JSON.parse(localStorage.getItem(QUIZ_HISTORY_KEY) || "[]");
    history.push({
      score,
      totalQuestions,
      date: new Date().toISOString(),
    });
    localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(history));
  };

  const renderHomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">7K LawPrep</h1>
          <p className="text-gray-600">Master MHCET & CLAT</p>
        </div>

        {/* Main Actions */}
        <div className="space-y-4">
          <Button 
            onClick={() => setCurrentScreen("subjects")} 
            className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-between px-6 shadow-lg"
          >
            <div className="flex items-center">
              <Book className="w-6 h-6 mr-4" />
              <div className="text-left">
                <div className="font-semibold">Subjects</div>
                <div className="text-sm opacity-90">Browse topics & practice</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Button 
            onClick={() => setCurrentScreen("flashcards")} 
            className="w-full h-16 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-xl flex items-center justify-between px-6 shadow-lg"
          >
            <div className="flex items-center">
              <Zap className="w-6 h-6 mr-4" />
              <div className="text-left">
                <div className="font-semibold">Law Reels</div>
                <div className="text-sm opacity-90">Quick flashcard learning</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Button 
            onClick={() => setCurrentScreen("notes")} 
            className="w-full h-16 bg-green-600 hover:bg-green-700 text-white rounded-xl flex items-center justify-between px-6 shadow-lg"
          >
            <div className="flex items-center">
              <List className="w-6 h-6 mr-4" />
              <div className="text-left">
                <div className="font-semibold">Notes</div>
                <div className="text-sm opacity-90">Your study materials</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Button 
            onClick={() => setCurrentScreen("planner")} 
            className="w-full h-16 bg-purple-600 hover:bg-purple-700 text-white rounded-xl flex items-center justify-between px-6 shadow-lg"
          >
            <div className="flex items-center">
              <Calendar className="w-6 h-6 mr-4" />
              <div className="text-left">
                <div className="font-semibold">Planner</div>
                <div className="text-sm opacity-90">Set daily goals</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Button 
            onClick={() => setCurrentScreen("progress")} 
            className="w-full h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-xl flex items-center justify-between px-6 shadow-lg"
          >
            <div className="flex items-center">
              <Square className="w-6 h-6 mr-4" />
              <div className="text-left">
                <div className="font-semibold">Progress</div>
                <div className="text-sm opacity-90">Track your performance</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentScreen === "home" && renderHomeScreen()}
      {currentScreen === "subjects" && (
        <SubjectScreen 
          onBack={() => setCurrentScreen("home")}
          onStartQuiz={startQuiz}
        />
      )}
      {currentScreen === "flashcards" && (
        <FlashCardReels onBack={() => setCurrentScreen("home")} />
      )}
      {currentScreen === "quiz" && quizQuestions && (
        <QuizScreen 
          questions={quizQuestions}
          onComplete={showResults}
          onBack={() => setCurrentScreen("subjects")}
        />
      )}
      {currentScreen === "results" && quizResult && (
        <ResultScreen 
          score={quizResult.score}
          totalQuestions={quizResult.totalQuestions}
          onBack={() => setCurrentScreen("home")}
          onRetry={() => setCurrentScreen("quiz")}
        />
      )}
      {currentScreen === "notes" && (
        <NotesScreen onBack={() => setCurrentScreen("home")} />
      )}
      {currentScreen === "planner" && (
        <PlannerScreen onBack={() => setCurrentScreen("home")} />
      )}
      {currentScreen === "progress" && (
        <ProgressScreen onBack={() => setCurrentScreen("home")} />
      )}
    </>
  );
};

export default Index;
