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
const assert = __importStar(require("assert"));
const sourceMapSupport = __importStar(require("source-map-support"));
sourceMapSupport.install();
const src_1 = require("../src");
const answer = [
    "534678912",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179",
];
const test = async () => {
    console.log("test start!!");
    const result = await src_1.main();
    const resultLines = result.split("\n");
    assert.strictEqual(resultLines.length, answer.length, "The number of output lines is different");
    for (const index in resultLines) {
        const expectLine = answer[index];
        const actualLine = resultLines[index];
        const msg = [
            `L${index + 1}: different`,
            `actual: ${actualLine}`,
            `expect: ${expectLine}`,
        ].join("\n");
        assert.strictEqual(actualLine, expectLine, msg);
    }
};
test()
    .catch((err) => console.error(err))
    .then(() => console.log("test finished!!"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy90ZXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFpQztBQUNqQyxxRUFBdUQ7QUFDdkQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7QUFFM0IsZ0NBQThCO0FBRTlCLE1BQU0sTUFBTSxHQUFhO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztDQUNaLENBQUM7QUFFRixNQUFNLElBQUksR0FBd0IsS0FBSyxJQUFJLEVBQUU7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUU1QixNQUFNLE1BQU0sR0FBVyxNQUFNLFVBQUksRUFBRSxDQUFDO0lBQ3BDLE1BQU0sV0FBVyxHQUFhLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakQsTUFBTSxDQUFDLFdBQVcsQ0FDaEIsV0FBVyxDQUFDLE1BQU0sRUFDbEIsTUFBTSxDQUFDLE1BQU0sRUFDYix5Q0FBeUMsQ0FDMUMsQ0FBQztJQUVGLEtBQUssTUFBTSxLQUFLLElBQUksV0FBVyxFQUFFO1FBQy9CLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTSxHQUFHLEdBQUc7WUFDVixJQUFJLEtBQUssR0FBRyxDQUFDLGFBQWE7WUFDMUIsV0FBVyxVQUFVLEVBQUU7WUFDdkIsV0FBVyxVQUFVLEVBQUU7U0FDeEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFYixNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDakQ7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFJLEVBQUU7S0FDSCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDIn0=