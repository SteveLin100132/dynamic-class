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
/**
 * 動態類別工廠
 */
export declare class DynamicClassFactory {
    /**
     * 類別清單
     */
    protected static list: Map<string, Function>;
    /**
     * 紀錄類別
     *
     * @method public
     * @param name   類別名稱
     * @param target 類別建構函式
     */
    static record(name: string, target: Function): void;
    /**
     * 建立類別實例
     *
     * @method public
     * @param classNmae 類別名稱
     * @param args      類別參數
     * @return 回傳類別實例
     */
    static createInstance<T = any>(classNmae: string, ...args: any[]): T;
}
