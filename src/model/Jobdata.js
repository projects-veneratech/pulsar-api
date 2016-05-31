(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.Jobdata = factory(root.PulsarApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Jobdata model module.
   * @module model/Jobdata
   * @version Beta
   */

  /**
   * Constructs a new <code>Jobdata</code>.
   * parameters defined as object for CreateJob body
   * @alias module:model/Jobdata
   * @class
   * @param filePath
   * @param templateName
   * @param templateType
   * @param jobType
   * @param accessKeyID
   * @param accessKeySECRET
   */
  var exports = function(filePath, templateName, templateType, jobType, accessKeyID, accessKeySECRET) {

    this['file_path'] = filePath;
    this['template_name'] = templateName;
    this['template_type'] = templateType;
    this['job_type'] = jobType;
    this['access-key-ID'] = accessKeyID;
    this['access-key-SECRET'] = accessKeySECRET;

  };

  /**
   * Constructs a <code>Jobdata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Jobdata} obj Optional instance to populate.
   * @return {module:model/Jobdata} The populated <code>Jobdata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('file_path')) {
        obj['file_path'] = ApiClient.convertToType(data['file_path'], 'String');
      }
      if (data.hasOwnProperty('template_name')) {
        obj['template_name'] = ApiClient.convertToType(data['template_name'], 'String');
      }
      if (data.hasOwnProperty('template_type')) {
        obj['template_type'] = ApiClient.convertToType(data['template_type'], 'Integer');
      }
      if (data.hasOwnProperty('job_type')) {
        obj['job_type'] = ApiClient.convertToType(data['job_type'], 'Integer');
      }
      if (data.hasOwnProperty('access-key-ID')) {
        obj['access-key-ID'] = ApiClient.convertToType(data['access-key-ID'], 'String');
      }
      if (data.hasOwnProperty('access-key-SECRET')) {
        obj['access-key-SECRET'] = ApiClient.convertToType(data['access-key-SECRET'], 'String');
      }
      if (data.hasOwnProperty('user_note')) {
        obj['user_note'] = ApiClient.convertToType(data['user_note'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} file_path
   */
  exports.prototype['file_path'] = undefined;

  /**
   * @member {String} template_name
   */
  exports.prototype['template_name'] = undefined;

  /**
   * @member {Integer} template_type
   */
  exports.prototype['template_type'] = undefined;

  /**
   * @member {Integer} job_type
   */
  exports.prototype['job_type'] = undefined;

  /**
   * @member {String} access-key-ID
   */
  exports.prototype['access-key-ID'] = undefined;

  /**
   * @member {String} access-key-SECRET
   */
  exports.prototype['access-key-SECRET'] = undefined;

  /**
   * @member {String} user_note
   */
  exports.prototype['user_note'] = undefined;




  return exports;
}));
