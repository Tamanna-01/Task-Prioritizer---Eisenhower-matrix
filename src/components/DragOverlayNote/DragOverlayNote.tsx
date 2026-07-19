import type { Note } from "../../types/Note";

import { GripVertical } from "lucide-react";

import "./DragOverlayNote.css";

interface Props {
  note: Note;
}

function DragOverlayNote({ note }: Props) {
  return (
    <div className="drag-overlay-note">
      <div className="overlay-header">
        <GripVertical size={18} />
      </div>

      <div className="overlay-content">{note.text}</div>
    </div>
  );
}

export default DragOverlayNote;
