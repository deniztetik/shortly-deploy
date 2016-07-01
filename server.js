var app = require('./server-config.js');

//var port = 4568;

app.listen((process.env.PORT || 3468), function() {
  console.log('Server now listening on port ' + port);
});
