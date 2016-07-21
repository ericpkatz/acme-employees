var express = require('express');
var swig = require('swig');
swig.setDefaults({ cache: false });

var app = express();
app.use(express.static(__dirname + '/node_modules'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.get('/', function(req, res, next){
   res.render('index', { title: 'Welcome'}); 
});

app.get('/', function(req, res, next){
   res.render('foo', { title: 'Welcome'}); 
});

app.use('/employees', require('./employees.routes'));

app.listen(process.env.PORT, function(){
    console.log('listening');
});