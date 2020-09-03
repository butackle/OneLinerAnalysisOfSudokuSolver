import { addCreateNumericalCandidates } from "./addCreateNumericalCandidates";
import { getGridInfoFromNumericalCandidates } from "./getGridInfoFromNumericalCandidates";

type args = { gridInfos: gridInfo[]; sudokuAnalysis: sudokuAnalysis };

/**
 * 埋まっていない数値を埋める
 *
 * @param gridInfos
 * @param sudokuAnalysis
 */
const findEnterNumber = ({ gridInfos, sudokuAnalysis }: args): gridInfo[] => {
  const [lineAnalysis, rowAnalysis, squareAnalysis] = sudokuAnalysis;
  const analysis: analysis = { lineAnalysis, rowAnalysis, squareAnalysis };

  const gridFullInfo: gridInfoWithNumericalCandidates[] = gridInfos.map((gridInfo) =>
    addCreateNumericalCandidates({ gridInfo, ...analysis })
  );

  return gridFullInfo.map(getGridInfoFromNumericalCandidates);
};

export { findEnterNumber };
