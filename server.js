const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(morgan('combined'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});


app.get('/api/ping', function (req, res) {
	res.status(200).end();
});

app.use(express.static(__dirname + '/dist'));

app.listen(port, () => {
	console.log('app started on port: ', port);
});