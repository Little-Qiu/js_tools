/*
 * @Author: LittleQ
 * @Date: 2022-11-10 22:45:16
 * @LastEditTime: 2022-11-10 22:58:40
 * @LastEditors: LittleQ
 * @Description: js常用方法汇总
 * @FilePath: \js_tools\src\common\utils.js
 */

/**
 * 严格的安全的类型检查
 * @param {*} obj 
 * @returns {String} 'Boolean' 'String' 'Number' 'Function' 'Undefined' 'Null' 'RegExp' 'Object' 'Array'
 */
export const getType = function (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1)
}
