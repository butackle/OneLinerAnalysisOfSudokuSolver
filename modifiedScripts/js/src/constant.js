"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownNumberGridValue = exports.standardLineBreak = exports.standardCharacterCode = exports.sudokuFilePath = void 0;
const { env } = process;
const sudokuFilePath = env.SUDOKU_FILE_PATH || "/root/sudoku";
exports.sudokuFilePath = sudokuFilePath;
const standardCharacterCode = "utf8";
exports.standardCharacterCode = standardCharacterCode;
const standardLineBreak = "\n";
exports.standardLineBreak = standardLineBreak;
const unknownNumberGridValue = "*";
exports.unknownNumberGridValue = unknownNumberGridValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9zcmMvY29uc3RhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUd4QixNQUFNLGNBQWMsR0FBVyxHQUFHLENBQUMsZ0JBQWdCLElBQUksY0FBYyxDQUFDO0FBWXBFLHdDQUFjO0FBVGhCLE1BQU0scUJBQXFCLEdBQVcsTUFBTSxDQUFDO0FBVTNDLHNEQUFxQjtBQVB2QixNQUFNLGlCQUFpQixHQUFTLElBQUksQ0FBQztBQVFuQyw4Q0FBaUI7QUFMbkIsTUFBTSxzQkFBc0IsR0FBMkIsR0FBRyxDQUFDO0FBTXpELHdEQUFzQiJ9