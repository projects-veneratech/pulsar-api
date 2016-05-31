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
    root.PulsarApi.CreateJobResponseData = factory(root.PulsarApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateJobResponseData model module.
   * @module model/CreateJobResponseData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateJobResponseData</code>.
   * @alias module:model/CreateJobResponseData
   * @class
   * @param code
   * @param message
   */
  var exports = function(code, message) {
    var _this = this;

    _this['code'] = code;

    _this['message'] = message;
  };

  /**
   * Constructs a <code>CreateJobResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateJobResponseData} obj Optional instance to populate.
   * @return {module:model/CreateJobResponseData} The populated <code>CreateJobResponseData</code> instance.
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
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));


