const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(morgan('combined'));

app.use(express.static(__dirname + '/dist'));

app.listen(port, () => {
	console.log('app started on port: ', port);
});