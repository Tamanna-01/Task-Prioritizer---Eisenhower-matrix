import type { QuadrantType } from "../types/Note";

export interface BoardQuadrant {
  id: QuadrantType;
  title: string;
}

export const BOARD_QUADRANTS: BoardQuadrant[] = [
  {
    id: "urgent-important",
    title: "Urgent & Important",
  },
  {
    id: "noturgent-important",
    title: "Not Urgent & Important",
  },
  {
    id: "urgent-notimportant",
    title: "Urgent & Not Important",
  },
  {
    id: "noturgent-notimportant",
    title: "Not Urgent & Not Important",
  },
];
