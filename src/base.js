const BaseMethods = {
    /**
     * 获取数据类型
     * @param params
     * @returns 'String','Number'...
     */
    getTypeOf: (params) => {
      let type = Object.prototype.toString.call(params);
      return type.match(/\[\w+\W(\w+)\]$/)[1];
    },
    /**
     * 数组，字符串去重
     * @param Array,String
     * @returns
     */
    unique: (params) => {
      if (this.getTypeOf(params) === "Array") {
        return [...new Set(arr)];
      }
      if (this.getTypeOf(params) === "String") {
        let obj = {};
        let str = "";
        for (let i = 0, len = params.length; i < len; i++) {
          if (obj[params[i]]) {
            str += params[i];
            obj[params[i]] = true;
          }
        }
        return str;
      }
    },
  };
   
  export default BaseMethods;
