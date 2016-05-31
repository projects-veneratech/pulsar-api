(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CancelJobResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CancelJobResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.CancelJobResponse = factory(root.PulsarApi.ApiClient, root.PulsarApi.CancelJobResponseData);
  }
}(this, function(ApiClient, CancelJobResponseData) {
  'use strict';

  /**
   * The CancelJobResponse model module.
   * @module model/CancelJobResponse
   * @version Beta
   */

  /**
   * Constructs a new <code>CancelJobResponse</code>.
   * @alias module:model/CancelJobResponse
   * @class
   * @param status
   * @param data
   */
  var exports = function(status, data) {

    this['status'] = status;
    this['data'] = data;
  };

  /**
   * Constructs a <code>CancelJobResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CancelJobResponse} obj Optional instance to populate.
   * @return {module:model/CancelJobResponse} The populated <code>CancelJobResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [CancelJobResponseData]);
      }
    }
    return obj;
  }


  /**
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Array.<module:model/CancelJobResponseData>} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
