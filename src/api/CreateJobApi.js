(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CreateJobResponse', '../model/Jobdata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateJobResponse'), require('../model/Jobdata'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.CreateJobApi = factory(root.PulsarApi.ApiClient, root.PulsarApi.CreateJobResponse, root.PulsarApi.Jobdata);
  }
}(this, function(ApiClient, CreateJobResponse, Jobdata) {
  'use strict';

  /**
   * CreateJob service.
   * @module api/CreateJobApi
   * @version Beta
   */

  /**
   * Constructs a new CreateJobApi. 
   * @alias module:api/CreateJobApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createJob operation.
     * @callback module:api/CreateJobApi~createJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateJobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Post the content&#39;s URL for analysis.
     * The public url of the media content stored in AWS S3 storage when posted, the pulsar system creates a job for analysis of the content.
     * @param {Integer} accountId Pulsar Cloud - Account ID of the user
     * @param {String} apiKey Pulsar Cloud - API KEY of the user
     * @param {module:model/Jobdata} jobdata Body parameters structure.
     * @param {module:api/CreateJobApi~createJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CreateJobResponse}
     */
    this.createJob = function(accountId, apiKey, jobdata, callback) {
      var postBody = jobdata;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling createJob";
      }

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling createJob";
      }

      // verify the required parameter 'jobdata' is set
      if (jobdata == undefined || jobdata == null) {
        throw "Missing the required parameter 'jobdata' when calling createJob";
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
      var returnType = CreateJobResponse;

      return this.apiClient.callApi(
        '/{account_id}/{api_key}/CreateJob', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
