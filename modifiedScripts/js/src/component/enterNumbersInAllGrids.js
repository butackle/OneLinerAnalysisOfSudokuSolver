"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enterNumbersInAllGrids = void 0;
const hasUnknownNumberGrid_1 = require("./hasUnknownNumberGrid");
const findEnterNumber_1 = require("./findEnterNumber");
const createSudokuAnalysis_1 = require("./createSudokuAnalysis");
const enterNumbersInAllGrids = async (gridInfos, sudokuAnalysis) => {
    if (hasUnknownNumberGrid_1.hasUnknownNumberGrid(gridInfos)) {
        const newGridInfos = findEnterNumber_1.findEnterNumber({ gridInfos, sudokuAnalysis });
        return await enterNumbersInAllGrids(newGridInfos, createSudokuAnalysis_1.createSudokuAnalysis(newGridInfos));
    }
    return gridInfos;
};
exports.enterNumbersInAllGrids = enterNumbersInAllGrids;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50ZXJOdW1iZXJzSW5BbGxHcmlkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RzL3NyYy9jb21wb25lbnQvZW50ZXJOdW1iZXJzSW5BbGxHcmlkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpRUFBOEQ7QUFDOUQsdURBQW9EO0FBQ3BELGlFQUE4RDtBQWE5RCxNQUFNLHNCQUFzQixHQUErQixLQUFLLEVBQzlELFNBQVMsRUFDVCxjQUFjLEVBQ2QsRUFBRTtJQUNGLElBQUksMkNBQW9CLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDbkMsTUFBTSxZQUFZLEdBQWUsaUNBQWUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsMkNBQW9CLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUN2RjtJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVPLHdEQUFzQiJ9