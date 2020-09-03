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
exports.main = void 0;
const sourceMapSupport = __importStar(require("source-map-support"));
const createGridInfoFromFile_1 = require("./component/createGridInfoFromFile");
const createSudokuAnalysis_1 = require("./component/createSudokuAnalysis");
const enterNumbersInAllGrids_1 = require("./component/enterNumbersInAllGrids");
const formatAnswer_1 = require("./component/formatAnswer");
sourceMapSupport.install();
const main = async () => {
    const firstGridInfos = createGridInfoFromFile_1.createGridInfoFromFile();
    const firstSudokuAnalysis = createSudokuAnalysis_1.createSudokuAnalysis(firstGridInfos);
    const gridInfos = await enterNumbersInAllGrids_1.enterNumbersInAllGrids(firstGridInfos, firstSudokuAnalysis);
    return formatAnswer_1.formatAnswer(gridInfos);
};
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUF1RDtBQUN2RCwrRUFBNEU7QUFDNUUsMkVBQXdFO0FBQ3hFLCtFQUE0RTtBQUM1RSwyREFBd0Q7QUFFeEQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7QUFFM0IsTUFBTSxJQUFJLEdBQTBCLEtBQUssSUFBSSxFQUFFO0lBQzdDLE1BQU0sY0FBYyxHQUFlLCtDQUFzQixFQUFFLENBQUM7SUFDNUQsTUFBTSxtQkFBbUIsR0FBbUIsMkNBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFakYsTUFBTSxTQUFTLEdBQWUsTUFBTSwrQ0FBc0IsQ0FDeEQsY0FBYyxFQUNkLG1CQUFtQixDQUNwQixDQUFDO0lBRUYsT0FBTywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQUVPLG9CQUFJIn0=