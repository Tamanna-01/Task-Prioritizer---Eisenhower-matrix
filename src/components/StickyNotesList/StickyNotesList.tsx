import { Inbox } from "lucide-react";
import { useDroppable } from "@dnd-kit/core";

import StickyNote from "../StickyNote/StickyNote";

import type { Note } from "../../types/Note";

import "./StickyNotesList.css";

interface Props {
  notes: Note[];
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onMove: (id: string, quadrant: Note["quadrant"]) => void;
}

function StickyNotesList({ notes, onDelete, onEdit, onMove }: Props) {
  const inboxNotes = notes.filter((note) => note.quadrant === "none");

  const { setNodeRef, isOver } = useDroppable({
    id: "none",
  });

  return (
    <div
      ref={setNodeRef}
      className={`sticky-list ${isOver ? "drag-over" : ""}`}
    >
      <div className="sticky-header">
        <div className="sticky-title">
          <Inbox size={20} />

          <h3>Inbox</h3>
        </div>

        <span className="sticky-count">
          {inboxNotes.length} Task
          {inboxNotes.length !== 1 ? "s" : ""}
        </span>
      </div>

      {inboxNotes.length === 0 ? (
        <div className="empty-state">
          <Inbox size={52} />

          <h3>Inbox is empty</h3>

          <p>
            Create a task above and drag it into the matrix when you're ready.
          </p>
        </div>
      ) : (
        <div className="notes-container">
          {inboxNotes.map((note) => (
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
