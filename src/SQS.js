function sendSQSMessage(params, region = null) {
  var sqsPromise = new AWS.SQS({
    apiVersion: '2016-11-15',
    region: region || AWS.config.region,
  })
    .sqs.sendMessage(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.MessageId);
      }
    })
    .promise();

  return sqsPromise
    .then((data) => {
      return data;
    })
    .catch((err) => {
      Logger.log(err, err.stack);
      return false;
    });
}
