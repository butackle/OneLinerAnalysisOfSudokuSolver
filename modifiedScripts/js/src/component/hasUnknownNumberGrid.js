"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasUnknownNumberGrid = void 0;
const constant_1 = require("../constant");
const hasUnknownNumberGrid = (gridInfos) => {
    return gridInfos.some(([, , , enteredValue]) => enteredValue === constant_1.unknownNumberGridValue);
};
exports.hasUnknownNumberGrid = hasUnknownNumberGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzVW5rbm93bk51bWJlckdyaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90cy9zcmMvY29tcG9uZW50L2hhc1Vua25vd25OdW1iZXJHcmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUFxRDtBQU9yRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsU0FBcUIsRUFBVyxFQUFFO0lBQzlELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FDbkIsQ0FBQyxDQUFDLEVBQUUsQUFBRCxFQUFHLEFBQUQsRUFBRyxZQUFZLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxLQUFLLGlDQUFzQixDQUNsRSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRU8sb0RBQW9CIn0=