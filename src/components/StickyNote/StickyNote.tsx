import { useState } from "react";
import type { Note } from "../../types/Note";
import "./StickyNote.css";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  note: Note;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onMove: (id: string, quadrant: Note["quadrant"]) => void;
}

function StickyNote({ note, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: note.id,
  });

  const style = {
    backgroundColor: note.color,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.25 : 1,
    zIndex: isDragging ? 1 : "auto",
  };

  return (
    <div
      ref={setNodeRef}
      className={`sticky-note ${isDragging ? "dragging" : ""}`}
      style={style}
    >
      {/* Drag Handle */}
      <div
        className="drag-handle"
        {...listeners}
        {...attributes}
      >
        ⠿
      </div>

      {isEditing ? (
        <>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />

          <div className="actions">
            <button
              onClick={() => {
                if (!editedText.trim()) return;

                onEdit(note.id, editedText);
                setIsEditing(false);
              }}
            >
              💾
            </button>

            <button
              onClick={() => {
                setEditedText(note.text);
                setIsEditing(false);
              }}
            >
              ❌
            </button>
          </div>
        </>
      ) : (
        <>
          <p>{note.text}</p>

          <div className="actions">
            <button
              onClick={() => setIsEditing(true)}
            >
              ✏️
            </button>

            <button
              onClick={() => onDelete(note.id)}
            >
              🗑️
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default StickyNote;