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

import { DynamicClassConfig } from './dynamic-class-config.model';
import { DynamicClassFactory } from './dynamic-class.factory';

/**
 * 動態類別裝飾器
 *
 * @param config 動態類別設定
 */
export function DynamicClass(
  config?: DynamicClassConfig,
): (target: Function) => void {
  return (target: Function) => {
    // 添加原始類別名稱
    DynamicClassFactory.record(target.name, target);

    // 添加類別別名
    if (typeof config?.alias === 'string') {
      DynamicClassFactory.record(config.alias, target);
    } else if (typeof config?.alias === 'object') {
      config.alias.forEach(name => DynamicClassFactory.record(name, target));
    }
  };
}
