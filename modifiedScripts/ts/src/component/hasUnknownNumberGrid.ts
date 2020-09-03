import { unknownNumberGridValue } from "../constant";

/**
 * まだ数字が不明の箇所があるかを判定する
 *
 * @param gridInfos
 */
const hasUnknownNumberGrid = (gridInfos: gridInfo[]): Boolean => {
  return gridInfos.some(
    ([, , , enteredValue]) => enteredValue === unknownNumberGridValue
  );
};

export { hasUnknownNumberGrid };
