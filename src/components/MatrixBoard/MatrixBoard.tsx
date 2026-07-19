import "./MatrixBoard.css";

import type { Note } from "../../types/Note";

import Quadrant from "../Quadrant/Quadrant";

import {
  Flame,
  CalendarClock,
  Users,
  Trash2,
} from "lucide-react";

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
    <section className="board-container">

      <div className="board-heading">
        <h2>Focus Matrix</h2>

        <p>
          Organize your work using the
          Eisenhower Matrix.
        </p>
      </div>

      <div className="matrix-wrapper">

        {/* Corner */}

        <div className="corner" />

        {/* Top Axis */}

        <div className="axis-header">

          <div className="axis-title">
            URGENT
          </div>

          <div className="axis-subtitle">
            Do First
          </div>

        </div>

        <div className="axis-header">

          <div className="axis-title">
            NOT URGENT
          </div>

          <div className="axis-subtitle">
            Schedule
          </div>

        </div>

        {/* Left Axis */}

        <div className="side-axis">

          <div className="axis-title">
            IMPORTANT
          </div>

          <div className="axis-subtitle">
            High Impact
          </div>

        </div>

        <Quadrant
          id="urgent-important"
          title="Urgent & Important"
          subtitle="Do First"
          icon={<Flame size={18} />}
          notes={urgentImportant}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />

        <Quadrant
          id="noturgent-important"
          title="Not Urgent & Important"
          subtitle="Schedule"
          icon={<CalendarClock size={18} />}
          notes={notUrgentImportant}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />

        <div className="side-axis">

          <div className="axis-title">
            NOT IMPORTANT
          </div>

          <div className="axis-subtitle">
            Delegate / Eliminate
          </div>

        </div>

        <Quadrant
          id="urgent-notimportant"
          title="Urgent & Not Important"
          subtitle="Delegate"
          icon={<Users size={18} />}
          notes={urgentNotImportant}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />

        <Quadrant
          id="noturgent-notimportant"
          title="Not Urgent & Not Important"
          subtitle="Eliminate"
          icon={<Trash2 size={18} />}
          notes={notUrgentNotImportant}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />

      </div>

    </section>
  );
}

export default MatrixBoard;