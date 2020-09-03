/*
import { createGridInfoFromFile } from "../src/component/createGridInfoFromFile";

console.log(
  createGridInfoFromFile().map((x, i, b) =>
    x[3] !== "*"
      ? x
      : [
          ...x.slice(0, 4),
          [...Array(9)]
            .map((v, i) => String(i + 1))
            .filter(
              (y) =>
                !b[0][x[0]]
                  // @ts-ignore
                  .concat(b[1][x[1]])
                  .concat(b[2][x[2]])
                  .includes(y)
            ),
        ]
  )
);


import { createGridInfoFromFile } from "../src/component/createGridInfoFromFile";

console.log(
  createGridInfoFromFile()
    .map(([, , z]) => z)
    .sort()
);


const d = require("fs")
  .readFileSync("/root/sudoku", "utf8")
  .trim()
  .split("\n")
  .map((v, i) => [i, v])
  .map((x) => Array.from(x[1].split("").entries()));

console.log(d);

 */
