import { unknownNumberGridValue } from "../constant";
import { createGridArray } from "./createGridArray";

/**
 * 数独を解析するための表の基となるものを作る
 */
const createEmptySudokuAnalysis = (): sudokuAnalysis => {
  const lineAnalysis: lineAnalysis = createGridArray();
  const rowAnalysis: rowAnalysis = createGridArray();
  const squareAnalysis: squareAnalysis = createGridArray();

  return [lineAnalysis, rowAnalysis, squareAnalysis];
};

/**
 * gridInfoから数独を解読するための配列を作成する
 *
 * @param sudokuAnalysis
 * @param gridInfo
 */
const makeSudokuAnalysisFromGridInfo = (
  sudokuAnalysis: sudokuAnalysis,
  gridInfo: gridInfo
): sudokuAnalysis => {
  const [lineAnalysis, rowAnalysis, squareAnalysis] = sudokuAnalysis;
  const [lineIndex, rowIndex, squareIndex, enteredValue] = gridInfo;

  // もし、数値が入っていなければ何もしない
  if (enteredValue === unknownNumberGridValue) {
    return sudokuAnalysis;
  }

  lineAnalysis[lineIndex].push(enteredValue);
  rowAnalysis[rowIndex].push(enteredValue);
  squareAnalysis[squareIndex].push(enteredValue);

  return [lineAnalysis, rowAnalysis, squareAnalysis];
};

/**
 * 現在の数独の入力値を解析するための配列を作る
 *
 * @param gridInfos
 */
const createSudokuAnalysis = (gridInfos: gridInfo[]): sudokuAnalysis => {
  return gridInfos.reduce(makeSudokuAnalysisFromGridInfo, createEmptySudokuAnalysis());
};

export { createSudokuAnalysis };
