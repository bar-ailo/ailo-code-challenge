export enum Move {
  Up,
  Right,
  Down,
  Left
}

interface Position {
  x: number;
  y: number
}

export interface State {
  zombie: Position,
  creatures: Position[],
  gridSize: number,
  moves: Move[]
}