const knex = require('knex')({
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'root',
		password: 'pass123!@#',
		database: 'quran_app'
	}
});


module.exports = knex