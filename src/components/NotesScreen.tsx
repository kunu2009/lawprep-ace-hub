import { useState, useEffect } from "react";
import { ArrowLeft, Square, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { defaultNotes } from "@/lib/data";

const NOTES_KEY = "7klawprep_notes";

const NotesScreen = ({ onBack }) => {
  const [notes, setNotes] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "", subject: "" });

  // Load notes from localStorage on mount, preload defaultNotes if none exist
  useEffect(() => {
    const saved = localStorage.getItem(NOTES_KEY);
    if (saved) {
      setNotes(JSON.parse(saved));
    } else {
      setNotes(defaultNotes);
      localStorage.setItem(NOTES_KEY, JSON.stringify(defaultNotes));
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.title && newNote.content) {
      const note = {
        id: Date.now(),
        ...newNote,
        date: new Date().toISOString().split('T')[0]
      };
      setNotes([note, ...notes]);
      setNewNote({ title: "", content: "", subject: "" });
      setIsAdding(false);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const renderAddForm = () => (
    <Card className="p-4 mb-4">
      <h3 className="font-semibold text-gray-800 mb-4">Add New Note</h3>
      <div className="space-y-4">
        <Input
          placeholder="Note title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <Input
          placeholder="Subject"
          value={newNote.subject}
          onChange={(e) => setNewNote({ ...newNote, subject: e.target.value })}
        />
        <Textarea
          placeholder="Note content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          rows={4}
        />
        <div className="flex gap-2">
          <Button onClick={addNote} className="bg-blue-600 hover:bg-blue-700 text-white">
            Save Note
          </Button>
          <Button 
            onClick={() => setIsAdding(false)} 
            variant="outline"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pt-4">
          <div className="flex items-center">
            <Button
              onClick={onBack}
              variant="ghost"
              className="p-2 hover:bg-gray-100 rounded-full mr-3"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-800">Notes</h1>
          </div>
          <Button
            onClick={() => setIsAdding(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Square className="w-4 h-4 mr-2" />
            Add Note
          </Button>
        </div>

        {/* Add Note Form */}
        {isAdding && renderAddForm()}

        {/* Notes List */}
        <div className="space-y-4">
          {notes.length === 0 ? (
            <Card className="p-8 text-center">
              <div className="text-gray-500 mb-4">
                <Square className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No notes yet. Add your first note!</p>
              </div>
            </Card>
          ) : (
            notes.map((note) => (
              <Card key={note.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 flex-1">{note.title}</h3>
                  <Button
                    onClick={() => deleteNote(note.id)}
                    variant="ghost"
                    className="p-1 hover:bg-red-50 text-red-500"
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {note.subject}
                  </span>
                  <span className="text-xs text-gray-500">{note.date}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{note.content}</p>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesScreen;
