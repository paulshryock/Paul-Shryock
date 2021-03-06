/**
 * Default configuration.
 *
 * @since 0.0.1
 *
 * @type {Object}
 */
module.exports = {
	build: {
		environment: '',
		published: '',
	},
	get isProduction () {
		return this.build.environment === 'production'
	},
	get isPublished () {
		return this.build.published === 'true'
	},
	site: {
		url: ''
	},
	vendor: {
		ava: require('./vendor/ava'),
		babel: require('./vendor/babel'),
		beautify: require('./vendor/beautify'),
		critical: require('./vendor/critical'),
		cssnano: require('./vendor/cssnano'),
		eslint: require('./vendor/eslint'),
		gulp: require('./vendor/gulp'),
		htmllint: require('./vendor/htmllint'),
		htmlmin: require('./vendor/htmlmin'),
		node_sass: require('./vendor/node-sass'),
		purgecss: require('./vendor/purgecss'),
		stylelint: require('./vendor/stylelint'),
		twitter: require('./vendor/twitter')
	}
}
