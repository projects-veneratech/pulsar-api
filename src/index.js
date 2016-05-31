(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CancelJobResponse', 'model/CancelJobResponseData', 'model/CreateJobResponse', 'model/CreateJobResponseData', 'model/GetReportPath', 'model/GetReportPathData', 'model/JobDetails', 'model/JobDetailsData', 'model/JobList', 'model/JobStatus', 'model/JobStatusData', 'model/Jobdata', 'api/CancelJobApi', 'api/CreateJobApi', 'api/GetReportPathApi', 'api/JobDetailsApi', 'api/JobStatusApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CancelJobResponse'), require('./model/CancelJobResponseData'), require('./model/CreateJobResponse'), require('./model/CreateJobResponseData'), require('./model/GetReportPath'), require('./model/GetReportPathData'), require('./model/JobDetails'), require('./model/JobDetailsData'), require('./model/JobList'), require('./model/JobStatus'), require('./model/JobStatusData'), require('./model/Jobdata'), require('./api/CancelJobApi'), require('./api/CreateJobApi'), require('./api/GetReportPathApi'), require('./api/JobDetailsApi'), require('./api/JobStatusApi'));
  }
}(function(ApiClient, CancelJobResponse, CancelJobResponseData, CreateJobResponse, CreateJobResponseData, GetReportPath, GetReportPathData, JobDetails, JobDetailsData, JobList, JobStatus, JobStatusData, Jobdata, CancelJobApi, CreateJobApi, GetReportPathApi, JobDetailsApi, JobStatusApi) {
  'use strict';

  /**
   * QC your content in AWS Cloud S3 with Pulsar Cloud Service# API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var PulsarApi = require('index'); // See note below*.
   * var xxxSvc = new PulsarApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new PulsarApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new PulsarApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new PulsarApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CancelJobResponse model constructor.
     * @property {module:model/CancelJobResponse}
     */
    CancelJobResponse: CancelJobResponse,
    /**
     * The CancelJobResponseData model constructor.
     * @property {module:model/CancelJobResponseData}
     */
    CancelJobResponseData: CancelJobResponseData,
    /**
     * The CreateJobResponse model constructor.
     * @property {module:model/CreateJobResponse}
     */
    CreateJobResponse: CreateJobResponse,
    /**
     * The CreateJobResponseData model constructor.
     * @property {module:model/CreateJobResponseData}
     */
    CreateJobResponseData: CreateJobResponseData,
    /**
     * The GetReportPath model constructor.
     * @property {module:model/GetReportPath}
     */
    GetReportPath: GetReportPath,
    /**
     * The GetReportPathData model constructor.
     * @property {module:model/GetReportPathData}
     */
    GetReportPathData: GetReportPathData,
    /**
     * The JobDetails model constructor.
     * @property {module:model/JobDetails}
     */
    JobDetails: JobDetails,
    /**
     * The JobDetailsData model constructor.
     * @property {module:model/JobDetailsData}
     */
    JobDetailsData: JobDetailsData,
    /**
     * The JobList model constructor.
     * @property {module:model/JobList}
     */
    JobList: JobList,
    /**
     * The JobStatus model constructor.
     * @property {module:model/JobStatus}
     */
    JobStatus: JobStatus,
    /**
     * The JobStatusData model constructor.
     * @property {module:model/JobStatusData}
     */
    JobStatusData: JobStatusData,
    /**
     * The Jobdata model constructor.
     * @property {module:model/Jobdata}
     */
    Jobdata: Jobdata,
    /**
     * The CancelJobApi service constructor.
     * @property {module:api/CancelJobApi}
     */
    CancelJobApi: CancelJobApi,
    /**
     * The CreateJobApi service constructor.
     * @property {module:api/CreateJobApi}
     */
    CreateJobApi: CreateJobApi,
    /**
     * The GetReportPathApi service constructor.
     * @property {module:api/GetReportPathApi}
     */
    GetReportPathApi: GetReportPathApi,
    /**
     * The JobDetailsApi service constructor.
     * @property {module:api/JobDetailsApi}
     */
    JobDetailsApi: JobDetailsApi,
    /**
     * The JobStatusApi service constructor.
     * @property {module:api/JobStatusApi}
     */
    JobStatusApi: JobStatusApi
  };

  return exports;
}));
