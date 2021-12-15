
const { Placing } = require('../models');

module.exports = {
	async index(req, res){
		await Placing.findOne().then(result => {
			if(result) {
				return res.json({
					success: true,
					message: "Welcome to the backend."
				});
			}
			return res.json({
				success: false,
				message: "Whoomp whoomp, you forgot to seed!"
			});
		})
	}
}