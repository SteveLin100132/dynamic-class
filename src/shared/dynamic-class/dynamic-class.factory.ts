/**
 * 專案名稱： wistroni40-dynamic-class
 * 部門代號： ML8100
 * 檔案說明： 動態類別工廠
 * @CREATE Sunday, 7th November 2021 1:12:57 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Class } from 'utility-types';

/**
 * 動態類別工廠
 */
export class DynamicClassFactory {
  /**
   * 類別清單
   */
  protected static list = new Map<string, Function>();

  /**
   * 紀錄類別
   *
   * @method public
   * @param name   類別名稱
   * @param target 類別建構函式
   */
  public static record(name: string, target: Function): void {
    this.list.set(name, target);
  }

  /**
   * 建立類別實例
   *
   * @method public
   * @param classNmae 類別名稱
   * @param args      類別參數
   * @return 回傳類別實例
   */
  public static createInstance<T = any>(classNmae: string, ...args: any[]): T {
    const Prototype = this.list.get(classNmae) as Class<T> | undefined;
    if (Prototype) {
      return new Prototype(...args);
    } else {
      throw new Error(
        `Class ${classNmae} undefined: please decorate the Class`,
      );
    }
  }
}
