import React from "react";
import { useState } from "react";
import { ArrowLeft, Book, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { subjects } from "@/lib/data";

const SubjectScreen = ({ onBack, onStartQuiz }) => {
  const [currentSubject, setCurrentSubject] = useState(null);

  const renderSubjectList = () => (
    <div className="space-y-4">
      {subjects.map((subject) => (
        <Card key={subject.name} className="p-4 hover:shadow-md transition-shadow">
          <Button
            onClick={() => setCurrentSubject(subject)}
            className="w-full justify-between h-auto p-4 bg-white hover:bg-gray-50 text-gray-800 border-0"
          >
            <div className="flex items-center">
              <Book className="w-5 h-5 mr-3 text-blue-600" />
              <span className="font-medium">{subject.name}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </Button>
        </Card>
      ))}
    </div>
  );

  const renderTopicList = () => (
    <div className="space-y-3">
      <div className="flex items-center mb-6">
        <Button
          onClick={() => setCurrentSubject(null)}
          variant="ghost"
          className="p-2 hover:bg-gray-100 rounded-full mr-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-xl font-semibold text-gray-800">{currentSubject.name}</h2>
      </div>
      {currentSubject.topics.map((topic) => (
        <Card key={topic.name} className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-800">{topic.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {topic.questions.length} questions available
              </p>
            </div>
            <Button
              onClick={() => onStartQuiz(currentSubject, topic)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              Start Quiz
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6 pt-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="p-2 hover:bg-gray-100 rounded-full mr-3"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">
            {currentSubject ? currentSubject.name : "Subjects"}
          </h1>
        </div>
        {currentSubject ? renderTopicList() : renderSubjectList()}
      </div>
    </div>
  );
};

export default SubjectScreen;
