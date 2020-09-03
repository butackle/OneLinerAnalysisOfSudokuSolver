import { hasUnknownNumberGrid } from "./hasUnknownNumberGrid";
import { findEnterNumber } from "./findEnterNumber";
import { createSudokuAnalysis } from "./createSudokuAnalysis";

type enterNumbersInAllGridsType = (
  gridInfos: gridInfo[],
  sudokuAnalysis: sudokuAnalysis
) => Promise<gridInfo[]>;

/**
 * 全てのマスに数値を入れる
 *
 * @param gridInfos
 * @param sudokuAnalysis
 */
const enterNumbersInAllGrids: enterNumbersInAllGridsType = async (
  gridInfos,
  sudokuAnalysis
) => {
  if (hasUnknownNumberGrid(gridInfos)) {
    const newGridInfos: gridInfo[] = findEnterNumber({ gridInfos, sudokuAnalysis });
    return await enterNumbersInAllGrids(newGridInfos, createSudokuAnalysis(newGridInfos));
  }

  return gridInfos;
};

export { enterNumbersInAllGrids };
