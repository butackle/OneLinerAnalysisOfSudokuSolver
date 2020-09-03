type analysisArray = enteredValue[]; // 数独を解析するために使用する配列

//　数独を解析するために使用する配列を要素の数だけ設定する
type analysisGridArray = [
  analysisArray,
  analysisArray,
  analysisArray,
  analysisArray,
  analysisArray,
  analysisArray,
  analysisArray,
  analysisArray,
  analysisArray
];

type lineAnalysis = analysisGridArray; // その行にある数値を入れる配列

type rowAnalysis = analysisGridArray; // その列にある数値を入れる配列

type squareAnalysis = analysisGridArray; // 数独表を9マスごとに区切ったものの中の数値を入れる配列

type sudokuAnalysis = [lineAnalysis, rowAnalysis, squareAnalysis]; // 数独表全体の解析表

// 各マスの解析表が入ったオブジェクト
interface analysis {
  lineAnalysis: lineAnalysis;
  rowAnalysis: rowAnalysis;
  squareAnalysis: squareAnalysis;
}

// 各マスの解析表が入ったオブジェクトにgridInfoが入ったもの
interface analysisWithGridInfo extends analysis {
  gridInfo: gridInfo;
}
