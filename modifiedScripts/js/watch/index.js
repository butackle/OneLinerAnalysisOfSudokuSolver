"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findRecursiveFolder_1 = require("./findRecursiveFolder");
const path_1 = __importDefault(require("path"));
const joinPaths = (dirName) => path_1.default.join(baseFolderPath, dirName);
const baseFolderPath = path_1.default.resolve("./ts");
const watchFolders = ["src", "test", "@types"];
const watchFullPaths = watchFolders.map(joinPaths);
watchFullPaths.forEach((folderPath) => findRecursiveFolder_1.findRecursiveFolder({ folderPath }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy93YXRjaC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtEQUE0RDtBQUM1RCxnREFBd0I7QUFFeEIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRzFFLE1BQU0sY0FBYyxHQUFHLGNBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sY0FBYyxHQUFhLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFHN0QsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMseUNBQW1CLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMifQ==