var app = require('./server-config.js');

// app.set('port', (process.env.PORT || 3468));

// var port = 4568;

app.listen((process.env.PORT || 3468), function() {
  console.log('Server now listening on port ' + port);
});


