import { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addNote } = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;

    addNote({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form className="bg-white p-5 rounded-xl shadow-md" onSubmit={handleSubmit}>
      <input
        className="w-full border p-3 mb-3 rounded focus:outline-blue-400"
        value={title}
        placeholder="Title..."
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border p-3 mb-3 rounded focus:outline-blue-400"
        value={body}
        placeholder="Write your note..."
        onChange={(e) => setBody(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;