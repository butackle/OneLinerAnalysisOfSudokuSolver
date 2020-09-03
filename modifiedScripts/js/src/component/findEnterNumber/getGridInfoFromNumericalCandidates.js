"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGridInfoFromNumericalCandidates = void 0;
const getGridInfoFromNumericalCandidates = (gridFullInfo) => {
    const [lineIndex, rowIndex, squareIndex, enteredValue, numericalCandidates,] = gridFullInfo;
    if (!numericalCandidates) {
        return [lineIndex, rowIndex, squareIndex, enteredValue];
    }
    if (numericalCandidates.length === 1) {
        return [lineIndex, rowIndex, squareIndex, numericalCandidates[0]];
    }
    return [lineIndex, rowIndex, squareIndex, enteredValue];
};
exports.getGridInfoFromNumericalCandidates = getGridInfoFromNumericalCandidates;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JpZEluZm9Gcm9tTnVtZXJpY2FsQ2FuZGlkYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RzL3NyYy9jb21wb25lbnQvZmluZEVudGVyTnVtYmVyL2dldEdyaWRJbmZvRnJvbU51bWVyaWNhbENhbmRpZGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0EsTUFBTSxrQ0FBa0MsR0FBRyxDQUN6QyxZQUE2QyxFQUNuQyxFQUFFO0lBQ1osTUFBTSxDQUNKLFNBQVMsRUFDVCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFlBQVksRUFDWixtQkFBbUIsRUFDcEIsR0FBRyxZQUFZLENBQUM7SUFFakIsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUN6RDtJQUdELElBQUksbUJBQW1CLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuRTtJQUVELE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFFTyxnRkFBa0MifQ==