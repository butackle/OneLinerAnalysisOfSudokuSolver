type unknownNumberGridValue = "*"; // まだ数字が決まっていないマスの入力値

type numericalCandidates = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"; // 入力値の数値の候補

type indexCandidates = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8; // line・row・squareの配列のindex候補

type lineIndex = indexCandidates; // 何行目か

type lineContent = string; // 行の内容

type rowIndex = indexCandidates; // 何列目か

type enteredValue = numericalCandidates | unknownNumberGridValue; // マスに記載された値

type squareIndex = indexCandidates; // 数独表を9マスごとに区切った場合に、どの番号に属するか

type columnInfo = [rowIndex, enteredValue]; // 列の情報の配列

type lineInfo = [lineIndex, columnInfo[]]; // 行の情報の配列

type gridInfo = [lineIndex, rowIndex, squareIndex, enteredValue]; // マスごとの情報の配列

// 入力値の数値の候補の全部が入った配列
type fullNumericalCandidatesArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// マスごとの情報の配列に数値の候補が追加されたもの
type gridFullInfo = [
  lineIndex,
  rowIndex,
  squareIndex,
  enteredValue,
  numericalCandidates[]
];
type gridInfoWithNumericalCandidates = gridInfo | gridFullInfo;
