import "./Quadrant.css";

import { useDroppable } from "@dnd-kit/core";

import type { ReactNode } from "react";
import type { Note } from "../../types/Note";

import StickyNote from "../StickyNote/StickyNote";

interface Props {
  id: string;

  title: string;

  subtitle: string;

  icon: ReactNode;

  notes: Note[];

  onDelete: (id: string) => void;

  onEdit: (id: string, text: string) => void;

  onMove: (id: string, quadrant: Note["quadrant"]) => void;
}

function Quadrant({
  id,
  title,
  subtitle,
  icon,
  notes,
  onDelete,
  onEdit,
  onMove,
}: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <section ref={setNodeRef} className={`quadrant ${isOver ? "over" : ""}`}>
      <div className="quadrant-header">
        <div className="quadrant-icon">{icon}</div>

        <div className="quadrant-title-group">
          <h3>{title}</h3>

          <p>{subtitle}</p>
        </div>
      </div>

      <div className="quadrant-body">
        {notes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">{icon}</div>

            <h4>No tasks yet</h4>

            <p>Drag tasks here or create a new one.</p>
          </div>
        ) : (
          notes.map((note) => (
            <StickyNote
              key={note.id}
              note={note}
              onDelete={onDelete}
              onEdit={onEdit}
              onMove={onMove}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Quadrant;
