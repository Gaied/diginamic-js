const express = require('express');

const app = express();
// importing routes
const A = require('./routes/A');
const B = require('./routes/B');

// settings
app.set('port', process.env.PORT || 3000);
//Views ejs or html
app.set('view engine', 'ejs');
app.set('views','src/views');

// middlewares
app.use(express.static('public'));

// routes
app.use ('/index', A);
app.use ('/profile',B);


app.listen(app.get('port'), function() {
    console.log('server on port ',app.get('port'));
});