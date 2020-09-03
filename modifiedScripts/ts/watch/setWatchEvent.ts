import fs from "fs";
import * as path from "path";

import { buildAndTest } from "./buildAndTest";
import { findRecursiveFolder } from "./findRecursiveFolder";
type eventType = "rename" | "change";

const watchDirs = [];

/**
 * 監視イベントが走ったときの処理
 *
 * @param dirPath
 */
const watchEvent = (dirPath) => (eventType: eventType, fileName) => {
  // デバッグ用のファイルの際は何もしない
  if (fileName.includes("debug")) {
    return false;
  }

  const targetPath = path.join(dirPath, fileName);
  console.table({ time: new Date(), eventType, targetPath });

  if (!fs.existsSync(targetPath)) {
    return console.log(`${targetPath} is delete`);
  }

  const stat: fs.Stats = fs.statSync(targetPath);
  if (eventType === "rename" && stat.isDirectory()) {
    return findRecursiveFolder(targetPath);
  }

  return buildAndTest();
};

/**
 * ディレクトリを監視対象にする
 *
 * @param dirPath
 */
const setWatchEvent = (dirPath) => {
  if (watchDirs.includes(dirPath)) {
    return false;
  }

  console.log(`${dirPath}: watch start`);
  watchDirs.push(dirPath);
  fs.watch(dirPath, watchEvent(dirPath));
};

export { setWatchEvent };
