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
		mongodbServer: {
	     adapter: 'sails-mongo',
	     host: 'do-mongodb',
	     port: 27017,
	     user: process.env.MONGODB_USER || '',
	     password: process.env.MONGODB_PASSWORD || '',
	     database: process.env.MONGODB_DATABASE || 'do-db'
	   },
	},
	environment: process.env.NODE_ENV || 'development',
	host: process.env.NODE_IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
	log: {
		level: 'silent'
	},
	port: process.env.NODE_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMysqlServer'
  // },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  // port: 80,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }

};
