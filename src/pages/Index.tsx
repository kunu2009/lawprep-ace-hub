
import { useState } from "react";
import { Book, Calendar, Home, List, Square, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SubjectScreen from "@/components/SubjectScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";
import NotesScreen from "@/components/NotesScreen";
import PlannerScreen from "@/components/PlannerScreen";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [quizData, setQuizData] = useState(null);

  const navigateToSubject = (subject) => {
    setSelectedSubject(subject);
    setCurrentScreen("subjects");
  };

  const startQuiz = (subject, topic) => {
    // Sample quiz data - in a real app this would come from a database
    const sampleQuiz = {
      subject,
      topic,
      questions: [
        {
          id: 1,
          question: "What is the fundamental right to equality enshrined in which article of the Indian Constitution?",
          options: ["Article 14", "Article 15", "Article 16", "Article 17"],
          correct: 0
        },
        {
          id: 2,
          question: "Which case established the basic structure doctrine?",
          options: ["Maneka Gandhi Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Golaknath Case"],
          correct: 1
        }
      ]
    };
    setQuizData(sampleQuiz);
    setCurrentScreen("quiz");
  };

  const showResults = (score, totalQuestions) => {
    setQuizData({ ...quizData, score, totalQuestions });
    setCurrentScreen("results");
  };

  const renderHomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">7K LawPrep</h1>
          <p className="text-gray-600">Master MHCET & CLAT</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="p-4 text-center bg-white/80 backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-sm text-gray-600">Questions Solved</div>
          </Card>
          <Card className="p-4 text-center bg-white/80 backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-600">78%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </Card>
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
          selectedSubject={selectedSubject}
          onStartQuiz={startQuiz}
        />
      )}
      {currentScreen === "quiz" && (
        <QuizScreen 
          quizData={quizData}
          onComplete={showResults}
          onBack={() => setCurrentScreen("subjects")}
        />
      )}
      {currentScreen === "results" && (
        <ResultScreen 
          score={quizData?.score}
          totalQuestions={quizData?.totalQuestions}
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
    </>
  );
};

export default Index;
