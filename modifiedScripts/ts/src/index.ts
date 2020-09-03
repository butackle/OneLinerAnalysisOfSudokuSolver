import * as sourceMapSupport from "source-map-support";
import { createGridInfoFromFile } from "./component/createGridInfoFromFile";
import { createSudokuAnalysis } from "./component/createSudokuAnalysis";
import { enterNumbersInAllGrids } from "./component/enterNumbersInAllGrids";
import { formatAnswer } from "./component/formatAnswer";

sourceMapSupport.install();

const main: () => Promise<string> = async () => {
  const firstGridInfos: gridInfo[] = createGridInfoFromFile();
  const firstSudokuAnalysis: sudokuAnalysis = createSudokuAnalysis(firstGridInfos);

  const gridInfos: gridInfo[] = await enterNumbersInAllGrids(
    firstGridInfos,
    firstSudokuAnalysis
  );

  return formatAnswer(gridInfos);
};

export { main };
