import { unknownNumberGridValue } from "../../constant";

/**
 *  行・列・四角で埋められていない数値の配列を取得する
 *
 * @param args
 */
const addCreateNumericalCandidates = (
  args: analysisWithGridInfo
): gridInfoWithNumericalCandidates => {
  const { gridInfo, lineAnalysis, rowAnalysis, squareAnalysis } = args;
  const [lineIndex, rowIndex, squareIndex, enteredValue] = gridInfo;

  // 既に値が決まっていれば何もしない
  if (enteredValue !== unknownNumberGridValue) {
    return gridInfo;
  }

  const fullNumericalCandidates: fullNumericalCandidatesArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  // 入力値候補を算出する
  const numericalCandidates = fullNumericalCandidates.filter(
    (number: numericalCandidates) => {
      const allGridAnalysis = [
        ...lineAnalysis[lineIndex],
        ...rowAnalysis[rowIndex],
        ...squareAnalysis[squareIndex],
      ];

      return !allGridAnalysis.includes(number);
    }
  );

  return [...gridInfo, numericalCandidates];
};

export { addCreateNumericalCandidates };
