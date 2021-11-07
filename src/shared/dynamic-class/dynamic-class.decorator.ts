/**
 * 專案名稱： wistroni40-dynamic-class
 * 部門代號： ML8100
 * 檔案說明： 動態類別裝飾器
 * @CREATE Sunday, 7th November 2021 1:06:07 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { DynamicClassFactory } from './dynamic-class.factory';

/**
 * 動態類別裝飾器
 */
export function DynamicClass() {
  return (target: Function) => {
    DynamicClassFactory.record(target.name, target);
  };
}
