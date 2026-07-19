import "./MatrixBoard.css";
import Quadrant from "../Quadrant/Quadrant";
import { BOARD_QUADRANTS } from "../../utils/boardConfig";
import type { Note } from "../../types/Note";

interface Props {
  notes: Note[];
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onMove: (id: string, quadrant: Note["quadrant"]) => void;
}

function MatrixBoard({
  notes,
  onDelete,
  onEdit,
  onMove,
}: Props) {
  const urgentImportant = notes.filter(
    (note) => note.quadrant === "urgent-important"
  );

  const notUrgentImportant = notes.filter(
    (note) => note.quadrant === "noturgent-important"
  );

  const urgentNotImportant = notes.filter(
    (note) => note.quadrant === "urgent-notimportant"
  );

  const notUrgentNotImportant = notes.filter(
    (note) => note.quadrant === "noturgent-notimportant"
  );

  return (
    <div className="board-container">
      <h2>Eisenhower Matrix</h2>

      <div className="matrix-wrapper">

        <div className="corner"></div>

        <div className="header">
          Urgent
          <span>DO</span>
        </div>

        <div className="header">
          Not Urgent
          <span>DECIDE</span>
        </div>

        <div className="side-label">
          Important
          <span>DELEGATE</span>
        </div>

        <Quadrant
          id="urgent-important"
          notes={urgentImportant}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />

        <Quadrant
          id="noturgent-important"
          notes={notUrgentImportant}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />

        <div className="side-label">
          Not Important
          <span>DELETE</span>
        </div>

        <Quadrant
          id="urgent-notimportant"
          notes={urgentNotImportant}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />

        <Quadrant
          id="noturgent-notimportant"
          notes={notUrgentNotImportant}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />

      </div>
    </div>
  );
}

export default MatrixBoard;