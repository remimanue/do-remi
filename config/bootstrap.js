/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
	var values = { email: "remiman@hotmail.com" };
	sails.models.user.find(values).exec(function (err, records) {
		sails.log('err', err);
		if (err) return cb();
		sails.log('records', records);
		if (records.length > 0) return cb();
		sails.models.user.create(values).exec(function (err, records) {
			sails.log('err', err);
			if (err) return cb();
			sails.log('records', records)
			cb();
		});
	});

	sails.log('config session', sails.config.session);
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  // cb();
};
