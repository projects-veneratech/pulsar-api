(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetReportPath'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetReportPath'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.GetReportPathApi = factory(root.PulsarApi.ApiClient, root.PulsarApi.GetReportPath);
  }
}(this, function(ApiClient, GetReportPath) {
  'use strict';

  /**
   * GetReportPath service.
   * @module api/GetReportPathApi
   * @version 1.0.0
   */

  /**
   * Constructs a new GetReportPathApi. 
   * @alias module:api/GetReportPathApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getReportPath operation.
     * @callback module:api/GetReportPathApi~getReportPathCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetReportPath} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the analysis/job report link.
     * The output of job is a pulsar system generated report. The report can be downloaded via S3 URL provided in response to this API. The job is refered by job id provided in response to CreateJob
     * @param {Integer} accountId Pulsar Cloud - Account ID of the user
     * @param {String} apiKey Pulsar Cloud - API KEY of the user
     * @param {String} jobIdList Comma separated string of valid integer job ids provided in response to CreateJob API.
     * @param {module:api/GetReportPathApi~getReportPathCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GetReportPath}
     */
    this.getReportPath = function(accountId, apiKey, jobIdList, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling getReportPath";
      }

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getReportPath";
      }

      // verify the required parameter 'jobIdList' is set
      if (jobIdList == undefined || jobIdList == null) {
        throw "Missing the required parameter 'jobIdList' when calling getReportPath";
      }


      var pathParams = {
        'account_id': accountId,
        'api_key': apiKey
      };
      var queryParams = {
        'job_id_list': jobIdList
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetReportPath;

      return this.apiClient.callApi(
        '/{account_id}/{api_key}/GetReportPath', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
