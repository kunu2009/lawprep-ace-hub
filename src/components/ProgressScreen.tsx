import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QUIZ_HISTORY_KEY = "7klawprep_quiz_history";
const NOTES_KEY = "7klawprep_notes";
const TASKS_KEY = "7klawprep_tasks";

const ProgressScreen = ({ onBack }) => {
  const [stats, setStats] = useState({
    quizzesTaken: 0,
    bestScore: 0,
    notesCount: 0,
    tasksCompleted: 0,
    quizHistory: [],
  });

  useEffect(() => {
    // Quiz history
    const quizHistory = JSON.parse(localStorage.getItem(QUIZ_HISTORY_KEY) || "[]");
    const quizzesTaken = quizHistory.length;
    const bestScore = quizHistory.reduce((max, q) => {
      const percent = Math.round((q.score / q.totalQuestions) * 100);
      return percent > max ? percent : max;
    }, 0);

    // Notes
    const notes = JSON.parse(localStorage.getItem(NOTES_KEY) || "[]");
    const notesCount = notes.length;

    // Tasks
    const tasks = JSON.parse(localStorage.getItem(TASKS_KEY) || "[]");
    const tasksCompleted = tasks.filter((t) => t.completed).length;

    setStats({
      quizzesTaken,
      bestScore,
      notesCount,
      tasksCompleted,
      quizHistory,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6 pt-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="p-2 hover:bg-gray-100 rounded-full mr-3"
          >
            &#8592;
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">Your Progress</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="p-4 text-center bg-white/80 backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-600">{stats.quizzesTaken}</div>
            <div className="text-sm text-gray-600">Quizzes Taken</div>
          </Card>
          <Card className="p-4 text-center bg-white/80 backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-600">{stats.bestScore}%</div>
            <div className="text-sm text-gray-600">Best Score</div>
          </Card>
          <Card className="p-4 text-center bg-white/80 backdrop-blur-sm">
            <div className="text-2xl font-bold text-purple-600">{stats.notesCount}</div>
            <div className="text-sm text-gray-600">Notes</div>
          </Card>
          <Card className="p-4 text-center bg-white/80 backdrop-blur-sm">
            <div className="text-2xl font-bold text-orange-600">{stats.tasksCompleted}</div>
            <div className="text-sm text-gray-600">Tasks Completed</div>
          </Card>
        </div>

        {/* Quiz History */}
        <Card className="p-6 bg-white/70 mb-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Quiz History</h2>
          {stats.quizHistory.length === 0 ? (
            <div className="text-gray-500">No quizzes taken yet.</div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {stats.quizHistory.slice().reverse().map((q, i) => (
                <li key={i} className="py-2 flex justify-between items-center">
                  <span className="text-gray-700 text-sm">
                    {new Date(q.date).toLocaleDateString()} - {q.score}/{q.totalQuestions} ({Math.round((q.score/q.totalQuestions)*100)}%)
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ProgressScreen; 