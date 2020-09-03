"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCreateNumericalCandidates = void 0;
const constant_1 = require("../../constant");
const addCreateNumericalCandidates = (args) => {
    const { gridInfo, lineAnalysis, rowAnalysis, squareAnalysis } = args;
    const [lineIndex, rowIndex, squareIndex, enteredValue] = gridInfo;
    if (enteredValue !== constant_1.unknownNumberGridValue) {
        return gridInfo;
    }
    const fullNumericalCandidates = [
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
    const numericalCandidates = fullNumericalCandidates.filter((number) => {
        const allGridAnalysis = [
            ...lineAnalysis[lineIndex],
            ...rowAnalysis[rowIndex],
            ...squareAnalysis[squareIndex],
        ];
        return !allGridAnalysis.includes(number);
    });
    return [...gridInfo, numericalCandidates];
};
exports.addCreateNumericalCandidates = addCreateNumericalCandidates;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ3JlYXRlTnVtZXJpY2FsQ2FuZGlkYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RzL3NyYy9jb21wb25lbnQvZmluZEVudGVyTnVtYmVyL2FkZENyZWF0ZU51bWVyaWNhbENhbmRpZGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXdEO0FBT3hELE1BQU0sNEJBQTRCLEdBQUcsQ0FDbkMsSUFBMEIsRUFDTyxFQUFFO0lBQ25DLE1BQU0sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDckUsTUFBTSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUdsRSxJQUFJLFlBQVksS0FBSyxpQ0FBc0IsRUFBRTtRQUMzQyxPQUFPLFFBQVEsQ0FBQztLQUNqQjtJQUVELE1BQU0sdUJBQXVCLEdBQWlDO1FBQzVELEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztLQUNKLENBQUM7SUFHRixNQUFNLG1CQUFtQixHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FDeEQsQ0FBQyxNQUEyQixFQUFFLEVBQUU7UUFDOUIsTUFBTSxlQUFlLEdBQUc7WUFDdEIsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzFCLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUN4QixHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUM7U0FDL0IsQ0FBQztRQUVGLE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FDRixDQUFDO0lBRUYsT0FBTyxDQUFDLEdBQUcsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRU8sb0VBQTRCIn0=