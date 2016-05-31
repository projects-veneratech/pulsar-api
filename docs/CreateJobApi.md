# PulsarApi.CreateJobApi

All URIs are relative to *https://apispulsarcloud.veneratech.com/apibroker*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJob**](CreateJobApi.md#createJob) | **POST** /{account_id}/{api_key}/CreateJob | Post the content&#39;s URL for analysis.


<a name="createJob"></a>
# **createJob**
> CreateJobResponse createJob(accountId, apiKey, jobdata)

Post the content&#39;s URL for analysis.

The public url of the media content stored in AWS S3 storage when posted, the pulsar system creates a job for analysis of the content.

### Example
```javascript
var PulsarApi = require('pulsar-api');

var apiInstance = new PulsarApi.CreateJobApi()

var accountId = 56; // {Integer} Pulsar Cloud - Account ID of the user

var apiKey = "apiKey_example"; // {String} Pulsar Cloud - API KEY of the user

var jobdata = new PulsarApi.Jobdata(); // {Jobdata} Body parameters structure.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createJob(accountId, apiKey, jobdata, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**Integer**](.md)| Pulsar Cloud - Account ID of the user | 
 **apiKey** | **String**| Pulsar Cloud - API KEY of the user | 
 **jobdata** | [**Jobdata**](Jobdata.md)| Body parameters structure. | 

### Return type

[**CreateJobResponse**](CreateJobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

