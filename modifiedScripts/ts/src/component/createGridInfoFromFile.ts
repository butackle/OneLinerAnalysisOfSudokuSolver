import * as fs from "fs";

import { sudokuFilePath, standardCharacterCode, standardLineBreak } from "../constant";

/**
 * ファイル内容からマスごとの情報が入った配列を作成する
 */
const createGridInfoFromFile: () => gridInfo[] = () => {
  const sudokuFileContents: string = fs.readFileSync(
    sudokuFilePath,
    standardCharacterCode
  );

  // ファイルの行ごとの配列を作成する
  const sudokuFileLines: lineContent[] = sudokuFileContents
    .trim()
    .split(standardLineBreak);

  // ファイルの行ごとの配列を処理用に加工する
  const lineInfos: lineInfo[] = sudokuFileLines.map(
    (lineContent, lineIndex: lineIndex) => {
      // 行に書いてある入力値一つ一つごとに、[列番号, 値]の形にする
      const columnInfos: columnInfo[] = lineContent
        .split("")
        .map((enteredValue: enteredValue, rowIndex: rowIndex) => [
          rowIndex,
          enteredValue,
        ]);

      return [lineIndex, columnInfos];
    }
  );

  // マスごとの配列にする
  const gridInfos: gridInfo[] = lineInfos.reduce(
    (gridInfos, [lineIndex, columnInfos]) => [
      ...gridInfos,
      ...columnInfos.map(([rowIndex, enteredValue]) => [
        lineIndex,
        rowIndex,
        (Math.floor(lineIndex / 3) % 3) * 3 + Math.floor(rowIndex / 3),
        enteredValue,
      ]),
    ],
    []
  );

  return gridInfos;
};

export { createGridInfoFromFile };
