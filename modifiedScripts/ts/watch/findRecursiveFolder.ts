import * as fs from "fs";
import * as path from "path";
import { setWatchEvent } from "./setWatchEvent";
import { folderPath, readDirOptions, findRecursiveFolder } from "../@types/watchEvent";

const defaultOnFindFolderPath = (folderPath: folderPath) => setWatchEvent(folderPath);

/**
 * 再帰的にフォルダを取得する関数
 * https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_caveats
 *
 */
const findRecursiveFolder: findRecursiveFolder = (args = {}) => {
  const { folderPath } = args;
  const onFindFolderPath = args.onFindFolderPath || defaultOnFindFolderPath;
  onFindFolderPath(folderPath);

  // フォルダ内容を取得
  const readDirOptions: readDirOptions = {
    withFileTypes: true,
    encoding: "utf8",
  };
  const folderDirEntries: fs.Dirent[] = fs.readdirSync(folderPath, readDirOptions);

  const isDir = (dirEntry: fs.Dirent) => dirEntry.isDirectory();
  // フォルダが内部にあった場合には、その内部のフォルダの中身も見る
  const folders: fs.Dirent[] = folderDirEntries.filter(isDir);
  folders.forEach((dirEntry: fs.Dirent) => {
    const subFolderPath = path.join(folderPath, dirEntry.name);
    findRecursiveFolder({ folderPath: subFolderPath });
  });
};

export { findRecursiveFolder };
