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
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
  mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
  mongoURLLabel = "";

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
	var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
		mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
		mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
		mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
		mongoPassword = process.env[mongoServiceName + '_PASSWORD']
		mongoUser = process.env[mongoServiceName + '_USER'];

	if (mongoHost && mongoPort && mongoDatabase) {
		mongoURLLabel = mongoURL = 'mongodb://';
		if (mongoUser && mongoPassword) {
			mongoURL += mongoUser + ':' + mongoPassword + '@';
		}
		// Provide UI label that excludes user id and pw
		mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
		mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;
   }
}

// console.log('mongo host', mongoHost);
// console.log('mongo port', mongoPort);
// console.log('mongo user', mongoUser);
// console.log('mongo password', mongoPassword);
// console.log('mongo db', mongoDatabase);
// console.log('mongo url', mongoURL);
// console.log('mongo url label', mongoURLLabel);

module.exports = {
	connections: {
		localDiskDb: {
	     adapter: 'sails-disk'
	   },
		mongodbServer: {
	     adapter: 'sails-mongo',
	     host: mongoHost,
	     port: mongoPort,
	     user: mongoUser,
	     password: mongoPassword,
	     database: mongoDatabase
	   },
	},
	environment: process.env.NODE_ENV || 'development',
	host: process.env.NODE_IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
	log: {
		level: 'silent'
	},
	models: {
		// connection: 'localDiskDb',
		connection: 'mongodbServer',
		migrate: 'alter'
	},
	port: process.env.NODE_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
	session: {
		adapter: 'mongo',
		url: mongoURLLabel,
		collection: 'sessions',
		stringify: true,
	   // mongoOptions: {
	   //   server: {
	   //     ssl: true
	   //   }
	   // }
	}
};
