'use strict';
var AV = require('leancloud-storage');
const LC_APP_ID = process.env.LC_APP_ID
const LC_APP_KEY = process.env.LC_APP_KEY
const port = process.env.PORT

AV.init({
  appId: LC_APP_ID,
  appKey: LC_APP_KEY,
});

var app = require('./app');

app.listen(port, function () {
  console.log('Ping++ WebHook server is running', 'port:', port);

  // 注册全局未捕获异常处理器
  process.on('uncaughtException', function(err) {
    console.error("Caught exception:", err.stack);
  });
  process.on('unhandledRejection', function(reason, p) {
    console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
  });
});
