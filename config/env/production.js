/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
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
	     host: process.env.MONGODB_USER ? 'mongodb' : 'localhost',
	     port: 27017,
	     user: process.env.MONGODB_USER || '',
	     password: process.env.MONGODB_PASSWORD || '',
	     database: process.env.MONGODB_DATABASE || 'sampledb'
	   },
	},
	environment: process.env.NODE_ENV || 'development',
	host: process.env.NODE_IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
	log: {
		level: 'silent'
	},
	models: {
		connection: 'localDiskDb',
		// connection: 'mongodbServer',
		migrate: 'safe'
	},
	port: process.env.NODE_PORT || process.env.OPENSHIFT_NODEJS_PORT || 1337,
};
