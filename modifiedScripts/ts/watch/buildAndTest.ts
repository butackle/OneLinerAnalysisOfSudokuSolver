import * as path from "path";
import { spawnSync, SpawnSyncReturns } from "child_process";
import { isContinue } from "../@types/watchEvent";

/**
 * コマンドを実行する
 *
 * @param cmd
 * @param args
 */
const spawn = (cmd: string, args?: string[]) => {
  return spawnSync(cmd, args || [], { cwd: path.resolve(), encoding: "utf8" });
};

/**
 * コマンドの実行後の処理
 * 実行結果から処理を続行するかを返す
 *
 * @param spawnSyncReturns
 */
const postSpawn = (spawnSyncReturns: SpawnSyncReturns<string>): isContinue => {
  const { stdout, stderr, error } = spawnSyncReturns;

  if (error || stderr) {
    console.error(error || stderr);
    return false;
  }

  console.log(stdout);
  return true;
};

/**
 *　ビルド実行・テスト実行
 */
const buildAndTest = () => {
  // build
  console.log("build start");
  const buildResult: SpawnSyncReturns<string> = spawn("npm", ["run", "build"]);
  if (!postSpawn(buildResult)) {
    return;
  }

  // test
  console.log("test start");
  const testResult: SpawnSyncReturns<string> = spawn("npm", ["run", "test"]);
  if (!postSpawn(testResult)) {
    return;
  }
};

export { buildAndTest };
