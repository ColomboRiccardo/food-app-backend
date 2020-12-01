const https = require('https');

const getRecipe = replyWithingredients => {
	const requestForIngredients = replyWithingredients[0];

	const options = {
		hostname: 'themealdb.com',
		path: `/api/json/v1/1/filter.php?i=chicken_breast`,
		method: 'GET',
	};

	const req = https.request(options, res => {
		console.log(`statusCode: ${res.statusCode}`);

		res.on('data', d => {
			process.stdout.write(d);
			return d.meals[0].strMeal;
		});
	});

	req.on('error', error => {
		console.error(error);
	});

	req.end();
};

module.exports = { getRecipe };
