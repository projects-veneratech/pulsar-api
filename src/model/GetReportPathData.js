(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.GetReportPathData = factory(root.PulsarApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetReportPathData model module.
   * @module model/GetReportPathData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetReportPathData</code>.
   * @alias module:model/GetReportPathData
   * @class
   * @param code
   * @param jobid
   * @param message
   */
  var exports = function(code, jobid, message) {
    var _this = this;

    _this['code'] = code;
    _this['jobid'] = jobid;

    _this['message'] = message;
  };

  /**
   * Constructs a <code>GetReportPathData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetReportPathData} obj Optional instance to populate.
   * @return {module:model/GetReportPathData} The populated <code>GetReportPathData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Integer');
      }
      if (data.hasOwnProperty('jobid')) {
        obj['jobid'] = ApiClient.convertToType(data['jobid'], 'String');
      }
      if (data.hasOwnProperty('report_link')) {
        obj['report_link'] = ApiClient.convertToType(data['report_link'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} jobid
   */
  exports.prototype['jobid'] = undefined;
  /**
   * @member {String} report_link
   */
  exports.prototype['report_link'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));


