"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSudokuAnalysis = void 0;
const constant_1 = require("../constant");
const createGridArray_1 = require("./createGridArray");
const createEmptySudokuAnalysis = () => {
    const lineAnalysis = createGridArray_1.createGridArray();
    const rowAnalysis = createGridArray_1.createGridArray();
    const squareAnalysis = createGridArray_1.createGridArray();
    return [lineAnalysis, rowAnalysis, squareAnalysis];
};
const makeSudokuAnalysisFromGridInfo = (sudokuAnalysis, gridInfo) => {
    const [lineAnalysis, rowAnalysis, squareAnalysis] = sudokuAnalysis;
    const [lineIndex, rowIndex, squareIndex, enteredValue] = gridInfo;
    if (enteredValue === constant_1.unknownNumberGridValue) {
        return sudokuAnalysis;
    }
    lineAnalysis[lineIndex].push(enteredValue);
    rowAnalysis[rowIndex].push(enteredValue);
    squareAnalysis[squareIndex].push(enteredValue);
    return [lineAnalysis, rowAnalysis, squareAnalysis];
};
const createSudokuAnalysis = (gridInfos) => {
    return gridInfos.reduce(makeSudokuAnalysisFromGridInfo, createEmptySudokuAnalysis());
};
exports.createSudokuAnalysis = createSudokuAnalysis;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU3Vkb2t1QW5hbHlzaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90cy9zcmMvY29tcG9uZW50L2NyZWF0ZVN1ZG9rdUFuYWx5c2lzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUFxRDtBQUNyRCx1REFBb0Q7QUFLcEQsTUFBTSx5QkFBeUIsR0FBRyxHQUFtQixFQUFFO0lBQ3JELE1BQU0sWUFBWSxHQUFpQixpQ0FBZSxFQUFFLENBQUM7SUFDckQsTUFBTSxXQUFXLEdBQWdCLGlDQUFlLEVBQUUsQ0FBQztJQUNuRCxNQUFNLGNBQWMsR0FBbUIsaUNBQWUsRUFBRSxDQUFDO0lBRXpELE9BQU8sQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQztBQVFGLE1BQU0sOEJBQThCLEdBQUcsQ0FDckMsY0FBOEIsRUFDOUIsUUFBa0IsRUFDRixFQUFFO0lBQ2xCLE1BQU0sQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQyxHQUFHLGNBQWMsQ0FBQztJQUNuRSxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBR2xFLElBQUksWUFBWSxLQUFLLGlDQUFzQixFQUFFO1FBQzNDLE9BQU8sY0FBYyxDQUFDO0tBQ3ZCO0lBRUQsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFL0MsT0FBTyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDO0FBT0YsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLFNBQXFCLEVBQWtCLEVBQUU7SUFDckUsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQztBQUN2RixDQUFDLENBQUM7QUFFTyxvREFBb0IifQ==