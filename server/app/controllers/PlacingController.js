const { Placing } = require('../models');
const moment = require('moment');

module.exports = {

	async index(req, res){
		var date = req.query.day ? moment(req.query.day) : moment().subtract(1, 'days');
		await Placing.find({date: {$gt: date}}, function (err, docs) { 
			return res.json(docs)
		}).limit(1);
	},

	async save(req, res) {
		const queryToCheck = {
			_id: req.body.dayId,
			'seats.person': req.body.person
		}

		const check = await Placing.find(queryToCheck, function (err, docs) { 
			return docs
		});

		if(check.length == 0) {
			const update = {
				"seats.$.occupied" : true,
				"seats.$.person" : req.body.person
			}
	
			const query = {
				_id: req.body.dayId,
				'seats._id': req.body._id
			} 
	
			Placing.updateOne(query, {$set: update}, function (err, docs) { 
				return res.json({
					success: true,
					doc: docs,
					message: 'See you in 2 days'
				})
			});
		} else {
			return res.json({
				success: false,
				message: 'User already registered'
			})
		}

		
	}

};