(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/JobDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JobDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.JobDetailsApi = factory(root.PulsarApi.ApiClient, root.PulsarApi.JobDetails);
  }
}(this, function(ApiClient, JobDetails) {
  'use strict';

  /**
   * JobDetails service.
   * @module api/JobDetailsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new JobDetailsApi. 
   * @alias module:api/JobDetailsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the jobDetails operation.
     * @callback module:api/JobDetailsApi~jobDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details such as state, status, startdatetime, enddatetime, error count, warning count.
     * The details describes the state, status, startdatetime, enddatetime, number of errors, number of warnings, with detailed message briefing the analysis of content.
     * @param {Integer} accountId Pulsar Cloud - Account ID of the user
     * @param {String} apiKey Pulsar Cloud - API KEY of the user
     * @param {String} jobIdList Comma separated string of valid integer job ids provided in response to CreateJob API.
     * @param {module:api/JobDetailsApi~jobDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobDetails}
     */
    this.jobDetails = function(accountId, apiKey, jobIdList, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling jobDetails";
      }

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling jobDetails";
      }

      // verify the required parameter 'jobIdList' is set
      if (jobIdList == undefined || jobIdList == null) {
        throw "Missing the required parameter 'jobIdList' when calling jobDetails";
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
      var returnType = JobDetails;

      return this.apiClient.callApi(
        '/{account_id}/{api_key}/JobDetails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
