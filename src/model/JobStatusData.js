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
    root.PulsarApi.JobStatusData = factory(root.PulsarApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JobStatusData model module.
   * @module model/JobStatusData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JobStatusData</code>.
   * @alias module:model/JobStatusData
   * @class
   * @param code
   * @param jobid
   */
  var exports = function(code, jobid) {
    var _this = this;

    _this['code'] = code;
    _this['jobid'] = jobid;



  };

  /**
   * Constructs a <code>JobStatusData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStatusData} obj Optional instance to populate.
   * @return {module:model/JobStatusData} The populated <code>JobStatusData</code> instance.
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
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'Integer');
      }
      if (data.hasOwnProperty('jobstatus')) {
        obj['jobstatus'] = ApiClient.convertToType(data['jobstatus'], 'Integer');
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
   * 1 means completed, 2 means running, 3 means waiting/queued
   * @member {Integer} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Integer} jobstatus
   */
  exports.prototype['jobstatus'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));


