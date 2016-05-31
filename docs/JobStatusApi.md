# PulsarApi.JobStatusApi

All URIs are relative to *https://apispulsarcloud.veneratech.com/apibroker*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobStatus**](JobStatusApi.md#jobStatus) | **GET** /{account_id}/{api_key}/JobStatus | Get the state and status of job.


<a name="jobStatus"></a>
# **jobStatus**
> JobStatus jobStatus(accountId, apiKey, jobIdList)

Get the state and status of job.

The status is the percentage defining how much analysis is completed. The state defines whether the job is running, completed, or waiting(queued). jobstatus (-1) for jobs in completed state means that the content analysis failed. jobstatus (100) means the content analysis was done till the end of file. jobstatus between (0) and (100) for jobs in completed state means the file was aborted either by user or by application.

### Example
```javascript
var PulsarApi = require('pulsar-api');

var apiInstance = new PulsarApi.JobStatusApi();

var accountId = 56; // Integer | Pulsar Cloud - Account ID of the user

var apiKey = "apiKey_example"; // String | Pulsar Cloud - API KEY of the user

var jobIdList = "jobIdList_example"; // String | Comma separated string of valid integer job ids provided in response to CreateJob API.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jobStatus(accountId, apiKey, jobIdList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **Integer**| Pulsar Cloud - Account ID of the user | 
 **apiKey** | **String**| Pulsar Cloud - API KEY of the user | 
 **jobIdList** | **String**| Comma separated string of valid integer job ids provided in response to CreateJob API. | 

### Return type

[**JobStatus**](JobStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

