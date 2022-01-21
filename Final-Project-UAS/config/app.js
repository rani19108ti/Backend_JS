(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1642683180157
//APP_KEY=3NDZ3th0SFHrDpeLUr4132U03dLS2e1xfsj50O5LrwVyYrmEDQCLzH2wwov2nmGgfZSF5l7kqp4-byi7_z9lBA