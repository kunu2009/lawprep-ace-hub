
import { useState } from "react";
import { ArrowLeft, Calendar, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const PlannerScreen = ({ onBack }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete Constitutional Law - 20 questions", completed: false, date: "2024-01-15" },
    { id: 2, text: "Review Contract Law notes", completed: true, date: "2024-01-15" },
    { id: 3, text: "Practice Criminal Law MCQs", completed: false, date: "2024-01-15" }
  ]);
  
  const [newTask, setNewTask] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask,
        completed: false,
        date: selectedDate
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const todayTasks = tasks.filter(task => task.date === selectedDate);
  const completedCount = todayTasks.filter(task => task.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6 pt-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="p-2 hover:bg-gray-100 rounded-full mr-3"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">Study Planner</h1>
        </div>

        {/* Date Selector */}
        <Card className="p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-medium text-gray-800">Select Date</span>
            </div>
          </div>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full"
          />
        </Card>

        {/* Progress Card */}
        <Card className="p-4 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">Today's Progress</h3>
              <p className="text-sm text-gray-600">
                {completedCount} of {todayTasks.length} tasks completed
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {todayTasks.length > 0 ? Math.round((completedCount / todayTasks.length) * 100) : 0}%
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ 
                width: `${todayTasks.length > 0 ? (completedCount / todayTasks.length) * 100 : 0}%` 
              }}
            ></div>
          </div>
        </Card>

        {/* Add Task */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-4">Add New Task</h3>
          <div className="flex gap-2">
            <Input
              placeholder="Enter your study goal..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              className="flex-1"
            />
            <Button onClick={addTask} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Square className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Tasks List */}
        <div className="space-y-3">
          {todayTasks.length === 0 ? (
            <Card className="p-8 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No tasks for this date. Add your first task!</p>
            </Card>
          ) : (
            todayTasks.map((task) => (
              <Card key={task.id} className={`p-4 transition-all ${task.completed ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="mr-3"
                    />
                    <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {task.text}
                    </span>
                  </div>
                  <Button
                    onClick={() => deleteTask(task.id)}
                    variant="ghost"
                    className="p-1 hover:bg-red-50 text-red-500 ml-2"
                  >
                    ×
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PlannerScreen;
