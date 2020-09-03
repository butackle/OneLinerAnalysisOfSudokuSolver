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
exports.findRecursiveFolder = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const setWatchEvent_1 = require("./setWatchEvent");
const defaultOnFindFolderPath = (folderPath) => setWatchEvent_1.setWatchEvent(folderPath);
const findRecursiveFolder = (args = {}) => {
    const { folderPath } = args;
    const onFindFolderPath = args.onFindFolderPath || defaultOnFindFolderPath;
    onFindFolderPath(folderPath);
    const readDirOptions = {
        withFileTypes: true,
        encoding: "utf8",
    };
    const folderDirEntries = fs.readdirSync(folderPath, readDirOptions);
    const isDir = (dirEntry) => dirEntry.isDirectory();
    const folders = folderDirEntries.filter(isDir);
    folders.forEach((dirEntry) => {
        const subFolderPath = path.join(folderPath, dirEntry.name);
        findRecursiveFolder({ folderPath: subFolderPath });
    });
};
exports.findRecursiveFolder = findRecursiveFolder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZFJlY3Vyc2l2ZUZvbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL3dhdGNoL2ZpbmRSZWN1cnNpdmVGb2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF5QjtBQUN6QiwyQ0FBNkI7QUFDN0IsbURBQWdEO0FBR2hELE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxVQUFzQixFQUFFLEVBQUUsQ0FBQyw2QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBT3RGLE1BQU0sbUJBQW1CLEdBQXdCLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFO0lBQzdELE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDNUIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksdUJBQXVCLENBQUM7SUFDMUUsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFHN0IsTUFBTSxjQUFjLEdBQW1CO1FBQ3JDLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFFBQVEsRUFBRSxNQUFNO0tBQ2pCLENBQUM7SUFDRixNQUFNLGdCQUFnQixHQUFnQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVqRixNQUFNLEtBQUssR0FBRyxDQUFDLFFBQW1CLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUU5RCxNQUFNLE9BQU8sR0FBZ0IsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFtQixFQUFFLEVBQUU7UUFDdEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELG1CQUFtQixDQUFDLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFTyxrREFBbUIifQ==