const getRecipe = replyWithingredients => {
	const requestForIngredients = replyWithingredients;

	fetch(
		'https://themealdb.p.rapidapi.com/filter.php?i=chicken_breast%2Cgarlic%2Csalt',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-key': 'cd6b41d509msh6a944615c801a8ap1c82dfjsnefbcad185b66',
				'x-rapidapi-host': 'themealdb.p.rapidapi.com',
			},
		}
	)
		.then(response => {
			console.log(response);
			return response;
		})
		.catch(err => {
			console.error(err);
		});
};
