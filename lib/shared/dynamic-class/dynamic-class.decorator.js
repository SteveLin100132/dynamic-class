"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicClass = void 0;
const dynamic_class_factory_1 = require("./dynamic-class.factory");
/**
 * 動態類別裝飾器
 *
 * @param config 動態類別設定
 */
function DynamicClass(config) {
    return (target) => {
        // 添加原始類別名稱
        dynamic_class_factory_1.DynamicClassFactory.record(target.name, target);
        // 添加類別別名
        if (typeof (config === null || config === void 0 ? void 0 : config.alias) === 'string') {
            dynamic_class_factory_1.DynamicClassFactory.record(config.alias, target);
        }
        else if (typeof (config === null || config === void 0 ? void 0 : config.alias) === 'object') {
            config.alias.forEach(name => dynamic_class_factory_1.DynamicClassFactory.record(name, target));
        }
    };
}
exports.DynamicClass = DynamicClass;
