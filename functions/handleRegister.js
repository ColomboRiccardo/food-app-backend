const register = (req, res, mockDatabase) => {
	const { name, email, password } = req.body;
	mockDatabase.push({ id: mockDatabase.length + 1, name, email, password });
	res.send('User registered');
};

module.exports = { register };
