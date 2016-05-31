# PulsarApi.GetReportPathApi

All URIs are relative to *https://apispulsarcloud.veneratech.com/apibroker*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReportPath**](GetReportPathApi.md#getReportPath) | **GET** /{account_id}/{api_key}/GetReportPath | Get the analysis/job report link.


<a name="getReportPath"></a>
# **getReportPath**
> GetReportPath getReportPath(accountId, apiKey, jobIdList)

Get the analysis/job report link.

The output of job is a pulsar system generated report. The report can be downloaded via S3 URL provided in response to this API. The job is refered by job id provided in response to CreateJob

### Example
```javascript
var PulsarApi = require('pulsar-api');

var apiInstance = new PulsarApi.GetReportPathApi()

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
api.getReportPath(accountId, apiKey, jobIdList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**Integer**](.md)| Pulsar Cloud - Account ID of the user | 
 **apiKey** | **String**| Pulsar Cloud - API KEY of the user | 
 **jobIdList** | **String**| Comma separated string of valid integer job ids provided in response to CreateJob API. | 

### Return type

[**GetReportPath**](GetReportPath.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

