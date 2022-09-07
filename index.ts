import {run, Move} from "./simulation";

run({
  gridSize: 4,
  zombie: {
    x: 3,
    y: 1
  },
  creatures: [
    {x: 0, y: 1},
    {x: 1, y: 2},
    {x: 1, y: 1}
  ],
  moves: [Move.Right, Move.Down, Move.Right, Move.Up]
})