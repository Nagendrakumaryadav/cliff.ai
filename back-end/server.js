require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', require('./users/users.controller'));
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 7100;
app.listen(port, () => console.log('Server listening on port ' + port));