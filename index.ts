import {run} from "./simulation/zombieSimulation";
import {Move} from "./simulation/types";

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