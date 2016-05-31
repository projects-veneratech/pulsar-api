# PulsarApi.CancelJobApi

All URIs are relative to *https://apispulsarcloud.veneratech.com/apibroker*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelJob**](CancelJobApi.md#cancelJob) | **POST** /{account_id}/{api_key}/CancelJob | Cancel the ongoing analysis of content.


<a name="cancelJob"></a>
# **cancelJob**
> CancelJobResponse cancelJob(accountId, apiKey, jobList)

Cancel the ongoing analysis of content.

The analysis of content is refered by unique job id provided in response to CreateJob API. This API can be used to cancel such analysis with a condition that the analysis has not been completed.

### Example
```javascript
var PulsarApi = require('pulsar-api');

var apiInstance = new PulsarApi.CancelJobApi()

var accountId = 56; // {Integer} Pulsar Cloud - Account ID of the user

var apiKey = "apiKey_example"; // {String} Pulsar Cloud - API KEY of the user

var jobList = new PulsarApi.JobList(); // {JobList} Body parameters structure.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelJob(accountId, apiKey, jobList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**Integer**](.md)| Pulsar Cloud - Account ID of the user | 
 **apiKey** | **String**| Pulsar Cloud - API KEY of the user | 
 **jobList** | [**JobList**](JobList.md)| Body parameters structure. | 

### Return type

[**CancelJobResponse**](CancelJobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

