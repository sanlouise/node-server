// Dependencies
const express = require('express');
const middleware = require('./middleware.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express server started, running at port ' + PORT)
});
