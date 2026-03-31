import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import { Trash2, Pencil, Save, Pin } from "lucide-react";

function NoteCard({ note }) {
  const { deleteNote, updateNote, togglePin } = useContext(NotesContext);

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const handleUpdate = () => {
    updateNote({ ...note, title, body });
    setEdit(false);
  };

  return (
    <div
      className={`p-5 rounded-xl shadow-md transition hover:shadow-lg ${
        note.pinned ? "bg-yellow-50 border-l-4 border-yellow-400" : "bg-white"
      }`}
    >
      {edit ? (
        <>
          <input
            className="w-full border p-2 mb-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border p-2 mb-2 rounded"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button
            onClick={handleUpdate}
            className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded"
          >
            <Save size={16} /> Save
          </button>
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
          <p className="text-gray-600">{note.body}</p>

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setEdit(true)}
              className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded"
            >
              <Pencil size={16} /> Edit
            </button>

            <button
              onClick={() => togglePin(note.id)}
              className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded"
            >
              <Pin size={16} /> {note.pinned ? "Unpin" : "Pin"}
            </button>

            <button
              onClick={() => deleteNote(note.id)}
              className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded"
            >
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteCard;