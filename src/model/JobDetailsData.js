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
    root.PulsarApi.JobDetailsData = factory(root.PulsarApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JobDetailsData model module.
   * @module model/JobDetailsData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JobDetailsData</code>.
   * @alias module:model/JobDetailsData
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
   * Constructs a <code>JobDetailsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobDetailsData} obj Optional instance to populate.
   * @return {module:model/JobDetailsData} The populated <code>JobDetailsData</code> instance.
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
      if (data.hasOwnProperty('startedatetime')) {
        obj['startedatetime'] = ApiClient.convertToType(data['startedatetime'], 'String');
      }
      if (data.hasOwnProperty('enddatetime')) {
        obj['enddatetime'] = ApiClient.convertToType(data['enddatetime'], 'String');
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], 'Integer');
      }
      if (data.hasOwnProperty('warnings')) {
        obj['warnings'] = ApiClient.convertToType(data['warnings'], 'Integer');
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
   * The date time format will be YYYY-MM-DD H:I:S.
   * @member {String} startedatetime
   */
  exports.prototype['startedatetime'] = undefined;
  /**
   * The date time format will be YYYY-MM-DD H:I:S.
   * @member {String} enddatetime
   */
  exports.prototype['enddatetime'] = undefined;
  /**
   * number of errors generated.
   * @member {Integer} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * number of warnings generated.
   * @member {Integer} warnings
   */
  exports.prototype['warnings'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));


