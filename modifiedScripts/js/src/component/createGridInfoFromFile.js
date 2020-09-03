"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGridInfoFromFile = void 0;
const fs = __importStar(require("fs"));
const constant_1 = require("../constant");
const createGridInfoFromFile = () => {
    const sudokuFileContents = fs.readFileSync(constant_1.sudokuFilePath, constant_1.standardCharacterCode);
    const sudokuFileLines = sudokuFileContents
        .trim()
        .split(constant_1.standardLineBreak);
    const lineInfos = sudokuFileLines.map((lineContent, lineIndex) => {
        const columnInfos = lineContent
            .split("")
            .map((enteredValue, rowIndex) => [
            rowIndex,
            enteredValue,
        ]);
        return [lineIndex, columnInfos];
    });
    const gridInfos = lineInfos.reduce((gridInfos, [lineIndex, columnInfos]) => [
        ...gridInfos,
        ...columnInfos.map(([rowIndex, enteredValue]) => [
            lineIndex,
            rowIndex,
            (Math.floor(lineIndex / 3) % 3) * 3 + Math.floor(rowIndex / 3),
            enteredValue,
        ]),
    ], []);
    return gridInfos;
};
exports.createGridInfoFromFile = createGridInfoFromFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlR3JpZEluZm9Gcm9tRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RzL3NyYy9jb21wb25lbnQvY3JlYXRlR3JpZEluZm9Gcm9tRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlCO0FBRXpCLDBDQUF1RjtBQUt2RixNQUFNLHNCQUFzQixHQUFxQixHQUFHLEVBQUU7SUFDcEQsTUFBTSxrQkFBa0IsR0FBVyxFQUFFLENBQUMsWUFBWSxDQUNoRCx5QkFBYyxFQUNkLGdDQUFxQixDQUN0QixDQUFDO0lBR0YsTUFBTSxlQUFlLEdBQWtCLGtCQUFrQjtTQUN0RCxJQUFJLEVBQUU7U0FDTixLQUFLLENBQUMsNEJBQWlCLENBQUMsQ0FBQztJQUc1QixNQUFNLFNBQVMsR0FBZSxlQUFlLENBQUMsR0FBRyxDQUMvQyxDQUFDLFdBQVcsRUFBRSxTQUFvQixFQUFFLEVBQUU7UUFFcEMsTUFBTSxXQUFXLEdBQWlCLFdBQVc7YUFDMUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzthQUNULEdBQUcsQ0FBQyxDQUFDLFlBQTBCLEVBQUUsUUFBa0IsRUFBRSxFQUFFLENBQUM7WUFDdkQsUUFBUTtZQUNSLFlBQVk7U0FDYixDQUFDLENBQUM7UUFFTCxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FDRixDQUFDO0lBR0YsTUFBTSxTQUFTLEdBQWUsU0FBUyxDQUFDLE1BQU0sQ0FDNUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3ZDLEdBQUcsU0FBUztRQUNaLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQyxTQUFTO1lBQ1QsUUFBUTtZQUNSLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUM5RCxZQUFZO1NBQ2IsQ0FBQztLQUNILEVBQ0QsRUFBRSxDQUNILENBQUM7SUFFRixPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFTyx3REFBc0IifQ==