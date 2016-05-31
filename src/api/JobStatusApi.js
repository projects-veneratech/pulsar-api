(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/JobStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JobStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.PulsarApi) {
      root.PulsarApi = {};
    }
    root.PulsarApi.JobStatusApi = factory(root.PulsarApi.ApiClient, root.PulsarApi.JobStatus);
  }
}(this, function(ApiClient, JobStatus) {
  'use strict';

  /**
   * JobStatus service.
   * @module api/JobStatusApi
   * @version 1.0.0
   */

  /**
   * Constructs a new JobStatusApi. 
   * @alias module:api/JobStatusApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the jobStatus operation.
     * @callback module:api/JobStatusApi~jobStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the state and status of job.
     * The status is the percentage defining how much analysis is completed. The state defines whether the job is running, completed, or waiting(queued). jobstatus (-1) for jobs in completed state means that the content analysis failed. jobstatus (100) means the content analysis was done till the end of file. jobstatus between (0) and (100) for jobs in completed state means the file was aborted either by user or by application.
     * @param {Integer} accountId Pulsar Cloud - Account ID of the user
     * @param {String} apiKey Pulsar Cloud - API KEY of the user
     * @param {String} jobIdList Comma separated string of valid integer job ids provided in response to CreateJob API.
     * @param {module:api/JobStatusApi~jobStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobStatus}
     */
    this.jobStatus = function(accountId, apiKey, jobIdList, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw "Missing the required parameter 'accountId' when calling jobStatus";
      }

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling jobStatus";
      }

      // verify the required parameter 'jobIdList' is set
      if (jobIdList == undefined || jobIdList == null) {
        throw "Missing the required parameter 'jobIdList' when calling jobStatus";
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
      var returnType = JobStatus;

      return this.apiClient.callApi(
        '/{account_id}/{api_key}/JobStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
