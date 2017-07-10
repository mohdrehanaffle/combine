var express= require('express');
var app= express();
var bodyParser= require('body-parser');
var Routes= require('./Routes/user');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use('/hospital', Routes);

app.listen(1100);
