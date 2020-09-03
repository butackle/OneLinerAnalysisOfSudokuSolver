"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEnterNumber = void 0;
const addCreateNumericalCandidates_1 = require("./addCreateNumericalCandidates");
const getGridInfoFromNumericalCandidates_1 = require("./getGridInfoFromNumericalCandidates");
const findEnterNumber = ({ gridInfos, sudokuAnalysis }) => {
    const [lineAnalysis, rowAnalysis, squareAnalysis] = sudokuAnalysis;
    const analysis = { lineAnalysis, rowAnalysis, squareAnalysis };
    const gridFullInfo = gridInfos.map((gridInfo) => addCreateNumericalCandidates_1.addCreateNumericalCandidates({ gridInfo, ...analysis }));
    return gridFullInfo.map(getGridInfoFromNumericalCandidates_1.getGridInfoFromNumericalCandidates);
};
exports.findEnterNumber = findEnterNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi90cy9zcmMvY29tcG9uZW50L2ZpbmRFbnRlck51bWJlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpRkFBOEU7QUFDOUUsNkZBQTBGO0FBVTFGLE1BQU0sZUFBZSxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFRLEVBQWMsRUFBRTtJQUMxRSxNQUFNLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxjQUFjLENBQUM7SUFDbkUsTUFBTSxRQUFRLEdBQWEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxDQUFDO0lBRXpFLE1BQU0sWUFBWSxHQUFzQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDakYsMkRBQTRCLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUN4RCxDQUFDO0lBRUYsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLHVFQUFrQyxDQUFDLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0FBRU8sMENBQWUifQ==