import { createGridArray } from "./createGridArray";
import { standardLineBreak } from "../constant";

/**
 * gridInfoの入力値をファイルの記載の形に戻す
 *
 * @param gridInfos
 */
const formatAnswer = (gridInfos: gridInfo[]): string => {
  const formatGrid = createGridArray();

  for (const gridInfo of gridInfos) {
    const [lineIndex, rowIndex, squareIndex, enteredValue] = gridInfo;
    formatGrid[lineIndex][rowIndex] = enteredValue;
  }

  return formatGrid.map((line) => line.join("")).join(standardLineBreak);
};

export { formatAnswer };
