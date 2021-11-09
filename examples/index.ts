/**
 * 專案名稱： wistroni40-dynamic-class
 * 部門代號： ML8100
 * 檔案說明： 動態類別範例
 * @CREATE Sunday, 7th November 2021 1:08:53 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import {
  DynamicClass,
  DynamicClassFactory as Factory,
} from 'wistroni40-dynamic-class';

/**
 * 自定義介面
 */
export interface Custom {
  /**
   * 自定義欄位
   */
  name: string;
  /**
   * 自定義欄位
   */
  age?: number;

  /**
   * 自定義方法
   *
   * @method public
   * @return 回傳
   */
  getId(): string;
}

/**
 * 自定義類別
 */
@DynamicClass({
  alias: 'CustomAliasA',
})
export class CustomA implements Custom {
  /**
   * 自定義欄位
   */
  private _id = 'A';

  /**
   * @param name 自定義欄位
   * @param age  自定義欄位
   */
  constructor(public name: string, public age?: number) {}

  /**
   * 自定義方法
   *
   * @method public
   * @return 回傳
   */
  public getId(): string {
    return this._id;
  }
}

const customer = Factory.createInstance<Custom>('CustomA', 'John', 20);
console.log(customer.getId(), customer);

const customerAlias = Factory.createInstance<Custom>('CustomAliasA', 'Alias');
console.log(customerAlias.getId(), customerAlias);
