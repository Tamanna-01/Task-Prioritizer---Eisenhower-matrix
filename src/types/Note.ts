export type QuadrantType =
  | "none"
  | "urgent-important"
  | "noturgent-important"
  | "urgent-notimportant"
  | "noturgent-notimportant";

export interface Note {
  id: string;
  text: string;
  color: string;
  quadrant: QuadrantType;
}
