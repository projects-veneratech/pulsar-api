(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CreateJobResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateJobResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.CreateJobResponse = factory(root.PulsarApi.ApiClient, root.PulsarApi.CreateJobResponseData);
  }
}(this, function(ApiClient, CreateJobResponseData) {
  'use strict';

  /**
   * The CreateJobResponse model module.
   * @module model/CreateJobResponse
   * @version Beta
   */

  /**
   * Constructs a new <code>CreateJobResponse</code>.
   * @alias module:model/CreateJobResponse
   * @class
   * @param status
   * @param data
   */
  var exports = function(status, data) {

    this['status'] = status;
    this['data'] = data;
  };

  /**
   * Constructs a <code>CreateJobResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateJobResponse} obj Optional instance to populate.
   * @return {module:model/CreateJobResponse} The populated <code>CreateJobResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [CreateJobResponseData]);
      }
    }
    return obj;
  }


  /**
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Array.<module:model/CreateJobResponseData>} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
