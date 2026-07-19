import "./Quadrant.css";

import { useDroppable } from "@dnd-kit/core";

import type { Note } from "../../types/Note";

import StickyNote from "../StickyNote/StickyNote";

interface Props {
  id: string;

  notes: Note[];

  onDelete: (id: string) => void;

  onEdit: (id: string, text: string) => void;

  onMove: (id: string, quadrant: Note["quadrant"]) => void;
}

function Quadrant({
  id,
  notes,
  onDelete,
  onEdit,
  onMove,
}: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`quadrant ${isOver ? "over" : ""}`}
    >
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />
      ))}
    </div>
  );
}

export default Quadrant;