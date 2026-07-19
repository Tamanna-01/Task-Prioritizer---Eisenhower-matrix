import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import toast from "react-hot-toast";
import "./App.css";

import { DndContext, DragOverlay } from "@dnd-kit/core";
import type {
  DragStartEvent,
  DragEndEvent,
  DragCancelEvent,
} from "@dnd-kit/core";

import { Download, Sparkles } from "lucide-react";

import InputBar from "./components/InputBar/InputBar";
import StickyNotesList from "./components/StickyNotesList/StickyNotesList";
import MatrixBoard from "./components/MatrixBoard/MatrixBoard";
import DragOverlayNote from "./components/DragOverlayNote/DragOverlayNote";

import type { Note } from "./types/Note";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const matrixRef = useRef<HTMLDivElement>(null);

  // Keeping this for compatibility with existing components.
  // We'll remove it later when StickyNote is redesigned.
  const colors = [
    "#FFF59D",
    "#FFCCBC",
    "#C8E6C9",
    "#BBDEFB",
    "#E1BEE7",
    "#FFE082",
  ];

  const addNote = (text: string) => {
    if (!text.trim()) return;

    const newNote: Note = {
      id: crypto.randomUUID(),
      text,
      color: colors[Math.floor(Math.random() * colors.length)],
      quadrant: "none",
    };

    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const editNote = (id: string, newText: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, text: newText } : note)),
    );
  };

  const moveNote = (id: string, quadrant: Note["quadrant"]) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, quadrant } : note)),
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    const dragged = notes.find((note) => note.id === event.active.id);

    if (dragged) {
      setActiveNote(dragged);
    }
  };

  const handleDragCancel = (_event: DragCancelEvent) => {
    setActiveNote(null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveNote(null);

    if (!over) return;

    moveNote(active.id as string, over.id as Note["quadrant"]);
  };

  const downloadBoard = async () => {
    // Don't download if there are no tasks
    if (notes.length === 0) {
      toast.error(
        "Your board is empty. Add at least one task before downloading.",
      );
      return;
    }

    if (!matrixRef.current) return;

    try {
      const dataUrl = await toPng(matrixRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: "#020617",
      });

      const link = document.createElement("a");

      const today = new Date().toISOString().split("T")[0];

      link.download = `FocusGrid-${today}.png`;

      link.href = dataUrl;

      link.click();
    } catch (error) {
      console.error("Failed to export board:", error);
      toast.error("Unable to download the board.");
    }
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      onDragEnd={handleDragEnd}
    >
      <div className="app fade-in">
        {/* Hero */}

        <header className="hero">
          <div className="hero-left">
            <h1>FocusGrid</h1>

            <p>
              Prioritize what truly matters with a clean, distraction-free
              Eisenhower Matrix.
            </p>
          </div>

          <div className="hero-actions">
            <button className="download-btn" onClick={downloadBoard}>
              <Download size={18} />
              Download Board
            </button>
          </div>
        </header>

        {/* Quick Add */}

        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Quick Add</h2>
              <p className="section-subtitle">
                Capture tasks before organizing them.
              </p>
            </div>

            <Sparkles size={18} color="#60A5FA" />
          </div>

          <InputBar onCreate={addNote} />
        </section>

        {/* Inbox */}

        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Inbox</h2>
              <p className="section-subtitle">
                Tasks waiting to be prioritized.
              </p>
            </div>

            <span className="section-count">
              {notes.filter((n) => n.quadrant === "none").length} Tasks
            </span>
          </div>

          <StickyNotesList
            notes={notes}
            onDelete={deleteNote}
            onEdit={editNote}
            onMove={moveNote}
          />
        </section>

        {/* Matrix */}

        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Focus Matrix</h2>
              <p className="section-subtitle">
                Drag tasks into the quadrant that best represents their
                priority.
              </p>
            </div>

            <span className="section-count">{notes.length} Total Tasks</span>
          </div>

          <div ref={matrixRef} className="export-container">
            <MatrixBoard
              notes={notes}
              onDelete={deleteNote}
              onEdit={editNote}
              onMove={moveNote}
            />
          </div>
        </section>
      </div>

      <DragOverlay dropAnimation={null}>
        {activeNote ? <DragOverlayNote note={activeNote} /> : null}
      </DragOverlay>
    </DndContext>
  );
}

export default App;
