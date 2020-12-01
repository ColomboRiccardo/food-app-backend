const handleFilter = require('./handleFilter');

const imageUpload = (req, res) => {
	const { ingredientsUrl } = req.body;

	// Insert here the initialization code as outlined on this page:
	// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions
	const { ClarifaiStub } = require('clarifai-nodejs-grpc');
	const grpc = require('@grpc/grpc-js');

	// Construct one of the stubs you want to use
	const stub = ClarifaiStub.json();

	// This will be used by every Clarifai endpoint call.
	const metadata = new grpc.Metadata();
	metadata.set('authorization', 'Key 6f1ca1685c3c4e2da0e7a6d33ec1d125');

	stub.PostModelOutputs(
		{
			model_id: 'bd367be194cf45149e75f01d59f77ba7',
			version_id: '', // This is optional. Defaults to the latest model version.
			inputs: [
				{
					data: {
						image: { url: ingredientsUrl },
					},
				},
			],
		},
		metadata,
		(err, response) => {
			if (err) {
				throw new Error(err);
			}

			if (response.status.code !== 10000) {
				throw new Error(
					'Post model outputs failed, status: ' + response.status.description
				);
			}

			// Since we have one input, one output will exist here.
			const output = response.outputs[0].data.concepts;

			res.send(handleFilter.filterOutput(output));

			/*for (const concept of output.data.concepts) {
				console.log(concept.name + ' ' + concept.value);
			}*/
		}
	);
};

module.exports = { imageUpload };
