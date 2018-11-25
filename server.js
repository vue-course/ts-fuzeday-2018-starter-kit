const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(express.static('dist'));

app.listen(process.env.PORT || 3000, () => {
	console.log('app started on port: ', process.env.PORT || 3000);
});