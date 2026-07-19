import StickyNote from "../StickyNote/StickyNote";
import type { Note } from "../../types/Note";

import { useDroppable } from "@dnd-kit/core";

import "./StickyNotesList.css";

interface Props {
  notes: Note[];
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onMove: (id: string, quadrant: Note["quadrant"]) => void;
}

function StickyNotesList({ notes, onDelete, onEdit, onMove }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: "none",
  });
  return (
    <div
      ref={setNodeRef}
      className="sticky-list"
      style={{
        backgroundColor: isOver ? "#d9f7be" : "",
        transition: "0.2s",
      }}
    >
      <h2>Sticky Notes</h2>

      {notes.length === 0 ? (
        <div className="empty">No sticky notes yet.</div>
      ) : (
        <div className="notes-container">
          {notes
            .filter((note) => note.quadrant === "none")
            .map((note) => (
              <StickyNote
                key={note.id}
                note={note}
                onDelete={onDelete}
                onEdit={onEdit}
                onMove={onMove}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default StickyNotesList;
