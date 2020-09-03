import * as assert from "assert";
import * as sourceMapSupport from "source-map-support";
sourceMapSupport.install();

import { main } from "../src";

const answer: string[] = [
  "534678912",
  "672195348",
  "198342567",
  "859761423",
  "426853791",
  "713924856",
  "961537284",
  "287419635",
  "345286179",
];

const test: () => Promise<void> = async () => {
  console.log("test start!!");

  const result: string = await main();
  const resultLines: string[] = result.split("\n");

  assert.strictEqual(
    resultLines.length,
    answer.length,
    "The number of output lines is different"
  );

  for (const index in resultLines) {
    const expectLine = answer[index];
    const actualLine = resultLines[index];

    const msg = [
      `L${index + 1}: different`,
      `actual: ${actualLine}`,
      `expect: ${expectLine}`,
    ].join("\n");

    assert.strictEqual(actualLine, expectLine, msg);
  }
};

test()
  .catch((err) => console.error(err))
  .then(() => console.log("test finished!!"));
