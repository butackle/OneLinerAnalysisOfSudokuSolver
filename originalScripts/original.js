console.log(
  ((f) => ((u) => u(u))((x) => f((y) => x(x)(y))))((f) => (a) =>
    ((a, b) =>
      a.map((x) => x[3]).includes("*")
        ? f(
            a
              .map((x) =>
                x[3] !== "*"
                  ? x
                  : [
                      ...x.slice(0, 4),
                      [...Array(9)]
                        .map((v, i) => String(i + 1))
                        .filter(
                          (y) =>
                            !b[0][x[0]]
                              .concat(b[1][x[1]])
                              .concat(b[2][x[2]])
                              .includes(y)
                        ),
                    ]
              )
              .map((x) =>
                x.length === 4
                  ? x
                  : x[4].length === 1
                  ? [x[0], x[1], x[2], x[4][0]]
                  : x.slice(0, 4)
              )
          )
        : a)(
      a,
      a
        .reduce(
          (x, y) => (
            x[0][y[0]].push(y[3]),
            x[1][y[1]].push(y[3]),
            x[2][y[2]].push(y[3]),
            x
          ),
          [...Array(3)].map((x) => [...Array(9)].map((y) => []))
        )
        .map((x) => x.map((y) => y.filter((z) => z !== "*")))
    )
  )(
    require("fs")
      .readFileSync("/dev/stdin", "utf8")
      .trim()
      .split("\n")
      .map((v, i) => [i, v])
      .map((x) => [x[0], [...x[1].split("").entries()]])
      .flatMap((x) => x[1].map((y) => [x[0], ...y]))
      .map((x) => [
        x[0],
        x[1],
        (Math.floor(x[0] / 3) % 3) * 3 + Math.floor(x[1] / 3),
        x[2],
      ])
  )
    .reduce(
      (x, y) => (x[y[0]].push(y[3]), x),
      [...Array(9)].map((x) => [])
    )
    .map((x) => x.join(""))
    .join("\n")
);
