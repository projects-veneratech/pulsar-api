(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CancelJobResponse', 'model/JobList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CancelJobResponse'), require('../model/JobList'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.CancelJobApi = factory(root.PulsarApi.ApiClient, root.PulsarApi.CancelJobResponse, root.PulsarApi.JobList);
  }
}(this, function(ApiClient, CancelJobResponse, JobList) {
  'use strict';

  /**
   * CancelJob service.
   * @module api/CancelJobApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CancelJobApi. 
   * @alias module:api/CancelJobApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelJob operation.
     * @callback module:api/CancelJobApi~cancelJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelJobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel the ongoing analysis of content.
     * The analysis of content is refered by unique job id provided in response to CreateJob API. This API can be used to cancel such analysis with a condition that the analysis has not been completed.
     * @param {Integer} accountId Pulsar Cloud - Account ID of the user
     * @param {String} apiKey Pulsar Cloud - API KEY of the user
     * @param {module:model/JobList} jobList Body parameters structure.
     * @param {module:api/CancelJobApi~cancelJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CancelJobResponse}
     */
    this.cancelJob = function(accountId, apiKey, jobList, callback) {
      var postBody = jobList;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling cancelJob";
      }

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling cancelJob";
      }

      // verify the required parameter 'jobList' is set
      if (jobList == undefined || jobList == null) {
        throw "Missing the required parameter 'jobList' when calling cancelJob";
      }


      var pathParams = {
        'account_id': accountId,
        'api_key': apiKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CancelJobResponse;

      return this.apiClient.callApi(
        '/{account_id}/{api_key}/CancelJob', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
