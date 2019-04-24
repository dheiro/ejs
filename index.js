const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const routes = require('./routes');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

routes(app);

app.listen(port);
console.log('Server running on port ' + port);