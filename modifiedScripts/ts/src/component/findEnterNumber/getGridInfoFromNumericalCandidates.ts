/**
 * 行・列・四角で埋められていない数値の候補が１つのみであれば、その値を入力する
 *
 * @param gridFullInfo
 */
const getGridInfoFromNumericalCandidates = (
  gridFullInfo: gridInfoWithNumericalCandidates
): gridInfo => {
  const [
    lineIndex,
    rowIndex,
    squareIndex,
    enteredValue,
    numericalCandidates,
  ] = gridFullInfo;

  if (!numericalCandidates) {
    return [lineIndex, rowIndex, squareIndex, enteredValue];
  }

  // 候補が一つの場合には、その値を入力する
  if (numericalCandidates.length === 1) {
    return [lineIndex, rowIndex, squareIndex, numericalCandidates[0]];
  }

  return [lineIndex, rowIndex, squareIndex, enteredValue];
};

export { getGridInfoFromNumericalCandidates };
