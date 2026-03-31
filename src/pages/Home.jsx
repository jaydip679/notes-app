import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";

function Home() {
  const { notes } = useContext(NotesContext);
  const [search, setSearch] = useState("");

  const filtered = notes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => b.pinned - a.pinned);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <input
        className="w-full border rounded-lg p-3 mb-6 shadow-sm focus:outline-blue-400"
        placeholder="🔍 Search notes..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <NoteForm />

      {sorted.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No notes found 
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {sorted.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;