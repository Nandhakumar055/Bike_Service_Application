const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.MONGODB, connectionParams);
		console.log("Connected to Database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};