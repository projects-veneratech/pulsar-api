(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './JobStatusData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JobStatusData'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.JobStatus = factory(root.PulsarApi.ApiClient, root.PulsarApi.JobStatusData);
  }
}(this, function(ApiClient, JobStatusData) {
  'use strict';

  /**
   * The JobStatus model module.
   * @module model/JobStatus
   * @version Beta
   */

  /**
   * Constructs a new <code>JobStatus</code>.
   * @alias module:model/JobStatus
   * @class
   * @param status
   * @param data
   */
  var exports = function(status, data) {

    this['status'] = status;
    this['data'] = data;
  };

  /**
   * Constructs a <code>JobStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStatus} obj Optional instance to populate.
   * @return {module:model/JobStatus} The populated <code>JobStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [JobStatusData]);
      }
    }
    return obj;
  }


  /**
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Array.<module:model/JobStatusData>} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));