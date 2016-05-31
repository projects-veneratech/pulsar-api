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
    root.PulsarApi.JobList = factory(root.PulsarApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JobList model module.
   * @module model/JobList
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>JobList</code>.
   * parameters defined as object for CancelJob body
   * @alias module:model/JobList
   * @class
   * @param jobIdList
   */
  var exports = function(jobIdList) {
    var _this = this;

    _this['job_id_list'] = jobIdList;
  };

  /**
   * Constructs a <code>JobList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobList} obj Optional instance to populate.
   * @return {module:model/JobList} The populated <code>JobList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('job_id_list')) {
        obj['job_id_list'] = ApiClient.convertToType(data['job_id_list'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} job_id_list
   */
  exports.prototype['job_id_list'] = undefined;




  return exports;
}));


