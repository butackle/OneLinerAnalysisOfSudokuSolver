"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAnswer = void 0;
const createGridArray_1 = require("./createGridArray");
const constant_1 = require("../constant");
const formatAnswer = (gridInfos) => {
    const formatGrid = createGridArray_1.createGridArray();
    for (const gridInfo of gridInfos) {
        const [lineIndex, rowIndex, squareIndex, enteredValue] = gridInfo;
        formatGrid[lineIndex][rowIndex] = enteredValue;
    }
    return formatGrid.map((line) => line.join("")).join(constant_1.standardLineBreak);
};
exports.formatAnswer = formatAnswer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0QW5zd2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHMvc3JjL2NvbXBvbmVudC9mb3JtYXRBbnN3ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQW9EO0FBQ3BELDBDQUFnRDtBQU9oRCxNQUFNLFlBQVksR0FBRyxDQUFDLFNBQXFCLEVBQVUsRUFBRTtJQUNyRCxNQUFNLFVBQVUsR0FBRyxpQ0FBZSxFQUFFLENBQUM7SUFFckMsS0FBSyxNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUU7UUFDaEMsTUFBTSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNsRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsWUFBWSxDQUFDO0tBQ2hEO0lBRUQsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDRCQUFpQixDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFDO0FBRU8sb0NBQVkifQ==