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
exports.buildAndTest = void 0;
const path = __importStar(require("path"));
const child_process_1 = require("child_process");
const spawn = (cmd, args) => {
    return child_process_1.spawnSync(cmd, args || [], { cwd: path.resolve(), encoding: "utf8" });
};
const postSpawn = (spawnSyncReturns) => {
    const { stdout, stderr, error } = spawnSyncReturns;
    if (error || stderr) {
        console.error(error || stderr);
        return false;
    }
    console.log(stdout);
    return true;
};
const buildAndTest = () => {
    console.log("build start");
    const buildResult = spawn("npm", ["run", "build"]);
    if (!postSpawn(buildResult)) {
        return;
    }
    console.log("test start");
    const testResult = spawn("npm", ["run", "test"]);
    if (!postSpawn(testResult)) {
        return;
    }
};
exports.buildAndTest = buildAndTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRBbmRUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvd2F0Y2gvYnVpbGRBbmRUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkI7QUFDN0IsaURBQTREO0FBUzVELE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBVyxFQUFFLElBQWUsRUFBRSxFQUFFO0lBQzdDLE9BQU8seUJBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDL0UsQ0FBQyxDQUFDO0FBUUYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxnQkFBMEMsRUFBYyxFQUFFO0lBQzNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLGdCQUFnQixDQUFDO0lBRW5ELElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQztRQUMvQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUtGLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNCLE1BQU0sV0FBVyxHQUE2QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUMzQixPQUFPO0tBQ1I7SUFHRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sVUFBVSxHQUE2QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUMxQixPQUFPO0tBQ1I7QUFDSCxDQUFDLENBQUM7QUFFTyxvQ0FBWSJ9