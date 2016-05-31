(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/JobDetailsData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JobDetailsData'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.JobDetails = factory(root.PulsarApi.ApiClient, root.PulsarApi.JobDetailsData);
  }
}(this, function(ApiClient, JobDetailsData) {
  'use strict';




  /**
   * The JobDetails model module.
   * @module model/JobDetails
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JobDetails</code>.
   * @alias module:model/JobDetails
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
   * Constructs a <code>JobDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobDetails} obj Optional instance to populate.
   * @return {module:model/JobDetails} The populated <code>JobDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [JobDetailsData]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<module:model/JobDetailsData>} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));


