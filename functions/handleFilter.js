const filterOutput = output => {
	const filteredIngredients = output.filter(
		concept =>
			concept.value > 0.6 &&
			concept.name != 'vegetable' &&
			concept.name != 'pasture'
	);
	return filteredIngredients;
};

module.exports = { filterOutput };
