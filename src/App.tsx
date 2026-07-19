import { useState } from "react";
import "./App.css";

import {
  DndContext,
  DragOverlay,
} from "@dnd-kit/core";

import type {
  DragEndEvent,
  DragStartEvent,
  DragCancelEvent,
} from "@dnd-kit/core";

import InputBar from "./components/InputBar/InputBar";
import StickyNotesList from "./components/StickyNotesList/StickyNotesList";
import MatrixBoard from "./components/MatrixBoard/MatrixBoard";
import DragOverlayNote from "./components/DragOverlayNote/DragOverlayNote";

import type { Note } from "./types/Note";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);

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
      prev.map((note) =>
        note.id === id
          ? { ...note, text: newText }
          : note
      )
    );
  };

  const moveNote = (
    id: string,
    quadrant: Note["quadrant"]
  ) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, quadrant }
          : note
      )
    );
  };

  const handleDragStart = (
    event: DragStartEvent
  ) => {
    const dragged = notes.find(
      (note) => note.id === event.active.id
    );

    if (dragged) {
      setActiveNote(dragged);
    }
  };

  const handleDragCancel = (
    _event: DragCancelEvent
  ) => {
    setActiveNote(null);
  };

  const handleDragEnd = (
    event: DragEndEvent
  ) => {
    const { active, over } = event;

    setActiveNote(null);

    if (!over) return;

    moveNote(
      active.id as string,
      over.id as Note["quadrant"]
    );
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      onDragEnd={handleDragEnd}
    >
      <div className="app">
        <h1>Task Prioritizer</h1>

        <InputBar onCreate={addNote} />

        <StickyNotesList
          notes={notes}
          onDelete={deleteNote}
          onEdit={editNote}
          onMove={moveNote}
        />

        <MatrixBoard
          notes={notes}
          onDelete={deleteNote}
          onEdit={editNote}
          onMove={moveNote}
        />
      </div>

      <DragOverlay dropAnimation={null}>
        {activeNote ? (
          <DragOverlayNote note={activeNote} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default App;