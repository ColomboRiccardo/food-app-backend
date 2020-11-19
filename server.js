const express = require('express');
const app = express();
//* this is done so express uses bodyparser
app.use(express.json());

const handleImageUpload = require('./functions/handleImageUpload');
const handleSignin = require('./functions/handleSignin');
const handleRegister = require('./functions/handleRegister');

//* this is a temporary object that i'm going to use as a database
const mockDatabase = [
	{ id: 1, name: 'luca', email: 'luca@gmail.com', password: 'luca' },
	{ id: 2, name: 'laura', email: 'laura@gmail.com', password: 'laura' },
];

//* these are now the usual requests

app.get('/', (req, res) => {
	res.send('It works');
});

app.get('/profiles', (req, res) => {
	res.send(mockDatabase);
});

app.listen(3000, () => {
	console.log('app is listening to port 3000');
});

app.post('/register', (req, res) => {
	handleRegister.register(req, res, mockDatabase);
});

app.post('/signin', (req, res) => {
	handleSignin.signin(req, res, mockDatabase);
});

app.post('/image', (req, res) => {
	handleImageUpload.imageUpload(req, res);
});
