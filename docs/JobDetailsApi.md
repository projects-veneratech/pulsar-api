# PulsarApi.JobDetailsApi

All URIs are relative to *https://apispulsarcloud.veneratech.com/apibroker*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobDetails**](JobDetailsApi.md#jobDetails) | **GET** /{account_id}/{api_key}/JobDetails | Get the details such as state, status, startdatetime, enddatetime, error count, warning count.


<a name="jobDetails"></a>
# **jobDetails**
> JobDetails jobDetails(accountId, apiKey, jobIdList)

Get the details such as state, status, startdatetime, enddatetime, error count, warning count.

The details describes the state, status, startdatetime, enddatetime, number of errors, number of warnings, with detailed message briefing the analysis of content.

### Example
```javascript
var PulsarApi = require('pulsar-api');

var apiInstance = new PulsarApi.JobDetailsApi()

var accountId = 56; // {Integer} Pulsar Cloud - Account ID of the user

var apiKey = "apiKey_example"; // {String} Pulsar Cloud - API KEY of the user

var jobIdList = "jobIdList_example"; // {String} Comma separated string of valid integer job ids provided in response to CreateJob API.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.jobDetails(accountId, apiKey, jobIdList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**Integer**](.md)| Pulsar Cloud - Account ID of the user | 
 **apiKey** | **String**| Pulsar Cloud - API KEY of the user | 
 **jobIdList** | **String**| Comma separated string of valid integer job ids provided in response to CreateJob API. | 

### Return type

[**JobDetails**](JobDetails.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

