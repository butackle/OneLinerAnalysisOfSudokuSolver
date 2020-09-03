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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setWatchEvent = void 0;
const fs_1 = __importDefault(require("fs"));
const path = __importStar(require("path"));
const buildAndTest_1 = require("./buildAndTest");
const findRecursiveFolder_1 = require("./findRecursiveFolder");
const watchDirs = [];
const watchEvent = (dirPath) => (eventType, fileName) => {
    if (fileName.includes("debug")) {
        return false;
    }
    const targetPath = path.join(dirPath, fileName);
    console.table({ time: new Date(), eventType, targetPath });
    if (!fs_1.default.existsSync(targetPath)) {
        return console.log(`${targetPath} is delete`);
    }
    const stat = fs_1.default.statSync(targetPath);
    if (eventType === "rename" && stat.isDirectory()) {
        return findRecursiveFolder_1.findRecursiveFolder(targetPath);
    }
    return buildAndTest_1.buildAndTest();
};
const setWatchEvent = (dirPath) => {
    if (watchDirs.includes(dirPath)) {
        return false;
    }
    console.log(`${dirPath}: watch start`);
    watchDirs.push(dirPath);
    fs_1.default.watch(dirPath, watchEvent(dirPath));
};
exports.setWatchEvent = setWatchEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0V2F0Y2hFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL3dhdGNoL3NldFdhdGNoRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFvQjtBQUNwQiwyQ0FBNkI7QUFFN0IsaURBQThDO0FBQzlDLCtEQUE0RDtBQUc1RCxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFPckIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBb0IsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUVqRSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDOUIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUUzRCxJQUFJLENBQUMsWUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUM5QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLFlBQVksQ0FBQyxDQUFDO0tBQy9DO0lBRUQsTUFBTSxJQUFJLEdBQWEsWUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxJQUFJLFNBQVMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQ2hELE9BQU8seUNBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDeEM7SUFFRCxPQUFPLDJCQUFZLEVBQUUsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFPRixNQUFNLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFO0lBQ2hDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sZUFBZSxDQUFDLENBQUM7SUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QixZQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFFTyxzQ0FBYSJ9