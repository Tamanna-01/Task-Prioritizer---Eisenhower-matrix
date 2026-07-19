import type { Note } from "../../types/Note";
import "./DragOverlayNote.css";

interface Props {
  note: Note;
}

function DragOverlayNote({ note }: Props) {
  return (
    <div
      className="drag-overlay-note"
      style={{
        backgroundColor: note.color,
      }}
    >
      <p>{note.text}</p>
    </div>
  );
}

export default DragOverlayNote;