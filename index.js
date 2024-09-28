var express = require('express');
var PORT = process.env.PORT || 4000;

// App setup
var app = express();
var server = app.listen(PORT, function(){
    console.log(`listening for requests on port ${PORT}`);
});

// Static files
app.use(express.static('public'));
