var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var userAgent = req.get("User-Agent");
  var startIndex = userAgent.indexOf("(") + 1;
  var endIndex = userAgent.indexOf(")");
  var remoteAddress = "::ffff:10.69.198.55";
  var remoteAddressArray = remoteAddress.split(":");
  var remoteAddress = remoteAddressArray[remoteAddressArray.length - 1];

  res.end(JSON.stringify({
    "IP": remoteAddress,
    "Language": req.get("Accept-Language"),
    "User": userAgent.substring(startIndex, endIndex)
  }));

})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})
