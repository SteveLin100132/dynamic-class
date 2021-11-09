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
/**
 * 動態類別裝飾器
 *
 * @param config 動態類別設定
 */
export declare function DynamicClass(config?: DynamicClassConfig): (target: Function) => void;
