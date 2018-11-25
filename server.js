const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const app = express();
app.use(cors());
app.use(morgan('combined'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000, () => {
	console.log('app started on port: ', process.env.PORT || 3000);
});