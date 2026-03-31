import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // 🔹 Load meaningful default notes
  useEffect(() => {
    const dummyNotes = [
      {
        id: 1,
        title: "Learn React Hooks",
        body: "Understand useState, useEffect, and useContext properly for better state management.",
        pinned: true,
      },
      {
        id: 2,
        title: "Build Real Projects",
        body: "Focus on real-world applications like notes app, todo app, and dashboards.",
        pinned: false,
      },
      {
        id: 3,
        title: "Revise DSA Daily",
        body: "Practice arrays, strings, recursion, and graphs regularly for placements.",
        pinned: false,
      },
      {
        id: 4,
        title: "Improve UI Skills",
        body: "Learn Tailwind CSS and build responsive layouts with modern design.",
        pinned: true,
      },
    ];

    setNotes(dummyNotes);
  }, []);

  // ➕ Add Note
  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body,
      pinned: false,
    };

    setNotes([newNote, ...notes]);
  };

  // ❌ Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // ✏️ Update Note
  const updateNote = (updatedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      )
    );
  };

  // 📌 Toggle Pin
  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, togglePin }}
    >
      {children}
    </NotesContext.Provider>
  );
};