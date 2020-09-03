import { findRecursiveFolder } from "./findRecursiveFolder";
import path from "path";

const joinPaths = (dirName: string) => path.join(baseFolderPath, dirName);

// 監視対象となるフォルダのフルパスを取得する
const baseFolderPath = path.resolve("./ts");
const watchFolders = ["src", "test", "@types"];
const watchFullPaths: string[] = watchFolders.map(joinPaths);

// 監視対象の全てのフォルダに対して監視対象にするため、フォルダ内を再帰的に検索する
watchFullPaths.forEach((folderPath) => findRecursiveFolder({ folderPath }));
