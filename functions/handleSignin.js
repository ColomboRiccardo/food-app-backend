const signin = (req, res, mockDatabase) => {
	const { email, password } = req.body;
	const loginUser = mockDatabase.filter(user => user.email === email);
	console.log(loginUser);
	if (loginUser[0].password === password) {
		res.send('password correct');
	} else {
		res.send('something is wrong');
	}
};

module.exports = { signin };
