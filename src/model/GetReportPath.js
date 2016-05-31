(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetReportPathData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetReportPathData'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.GetReportPath = factory(root.PulsarApi.ApiClient, root.PulsarApi.GetReportPathData);
  }
}(this, function(ApiClient, GetReportPathData) {
  'use strict';




  /**
   * The GetReportPath model module.
   * @module model/GetReportPath
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetReportPath</code>.
   * @alias module:model/GetReportPath
   * @class
   * @param status
   * @param data
   */
  var exports = function(status, data) {
    var _this = this;

    _this['status'] = status;
    _this['data'] = data;
  };

  /**
   * Constructs a <code>GetReportPath</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetReportPath} obj Optional instance to populate.
   * @return {module:model/GetReportPath} The populated <code>GetReportPath</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [GetReportPathData]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<module:model/GetReportPathData>} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));


