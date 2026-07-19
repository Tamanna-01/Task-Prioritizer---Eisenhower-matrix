import { useState } from "react";
import type { Note } from "../../types/Note";

import "./StickyNote.css";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import { GripVertical, Pencil, Trash2, Check, X } from "lucide-react";

interface Props {
  note: Note;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onMove: (id: string, quadrant: Note["quadrant"]) => void;
}

function StickyNote({ note, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: note.id,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.35 : 1,
    zIndex: isDragging ? 10 : "auto",
  };

  const save = () => {
    if (!editedText.trim()) return;

    onEdit(note.id, editedText.trim());

    setIsEditing(false);
  };

  const cancel = () => {
    setEditedText(note.text);
    setIsEditing(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`sticky-note ${isDragging ? "dragging" : ""}`}
    >
      <div className="note-top">
        <button className="drag-handle" {...listeners} {...attributes}>
          <GripVertical size={18} />
        </button>
      </div>

      {isEditing ? (
        <>
          <textarea
            autoFocus
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />

          <div className="actions">
            <button className="icon-btn success" onClick={save}>
              <Check size={17} />
            </button>

            <button className="icon-btn" onClick={cancel}>
              <X size={17} />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="note-content">{note.text}</div>

          <div className="actions">
            <button className="icon-btn" onClick={() => setIsEditing(true)}>
              <Pencil size={17} />
            </button>

            <button
              className="icon-btn danger"
              onClick={() => onDelete(note.id)}
            >
              <Trash2 size={17} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default StickyNote;
