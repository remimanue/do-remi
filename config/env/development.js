/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
	connections: {
		localDiskDb: {
	     adapter: 'sails-disk'
	   },
		mongodbServer: {
	     adapter: 'sails-mongo',
	     host: 'localhost',
	     port: 27017
	   },
		fakeServer: {
	     adapter: 'sails-mongo',
	     host: 'unknowed',
	     port: 27017
	   },
	},
	environment: process.env.NODE_ENV || 'development',
	host: process.env.NODE_IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
	log: {
		level: 'verbose'
	},
	models: {
		// connection: 'fakeServer',
		connection: 'mongodbServer',
		migrate: 'alter'
	},
	port: process.env.NODE_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
};
