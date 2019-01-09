var accesskey = "!!!Your-Api-Key-Here!!!";
var secretkey = CryptoJS.enc.Base64.parse("!!!Your-Secret-Key-Here!!!");

var moment = require("moment")
var timestamp = moment(new Date()).valueOf().toString()

postman.setGlobalVariable("X-PCK", accesskey);
postman.setGlobalVariable("X-Stamp", timestamp);

var signatureBytes = CryptoJS.HmacSHA256(CryptoJS.enc.Utf8.parse(accesskey+timestamp), secretkey)
var signature = CryptoJS.enc.Base64.stringify(signatureBytes);

postman.setGlobalVariable("X-Signature", signature);
