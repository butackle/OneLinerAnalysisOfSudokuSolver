const { env } = process;

// 数独の問題のファイルが配置されている絶対パス
const sudokuFilePath: string = env.SUDOKU_FILE_PATH || "/root/sudoku";

// 標準文字コード
const standardCharacterCode: "utf8" = "utf8";

// 標準の改行コード
const standardLineBreak: "\n" = "\n";

// 数字が入力されていないマスの記載値
const unknownNumberGridValue: unknownNumberGridValue = "*";

export {
  sudokuFilePath,
  standardCharacterCode,
  standardLineBreak,
  unknownNumberGridValue,
};
