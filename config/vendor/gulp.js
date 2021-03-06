/**
 * gulp configuration.
 *
 * @since unreleased
 *
 * @type {Object}
 */
module.exports = {
	paths: {
		changelog: './CHANGELOG.md',
		dest: './build',
		csp: './build/csp',
		temp: './build/temp',
		markdown: {
			src: './src/**/*.md',
		},
		html: {
			src: './src/**/*.html',
			get lint () { return this.src },
			temp: './build/temp/**/*.html',
			written: [
				'./build/**/*.html',
				'!./build/csp/**/*.html',
				'!./build/temp/**/*.html'
			]
		},
		json: {
			csp: [
				'./build/csp/**/*.json',
				'./build/csp/**/*.*.json',
			]
		},
		svg: {
			src: './src/**/*.svg',
		},
		images: {
			src: './src/**/*.+(png|jpg|gif)',
		},
		webManifest: {
			temp: './build/temp/**/*.webmanifest',
		},
		underscore: {
			temp: './build/temp/**/_*',
		},
		xml: {
			temp: './build/temp/**/*.xml',
		},
		txt: {
			temp: './build/temp/**/*.txt',
		},
		favicon: {
			src: './src/**/favicon.ico',
		},
		sass: {
			src: './src/**/sass/*.s+(a|c)ss',
			lint: {
				src: [
					'./src/**/*.s+(a|c)ss',
					'!./src/**/vendor/**/*.s+(a|c)ss'
				],
				dest: './src'
			}
		},
		css: {
			written: './build/**/*.css'
		},
		javascript: {
			config: './config/*.js',
			entry: './src/**/js/*.js',
			unbundled: './src/**/js/**/*.js',
			src: './src/**/*.js',
			written: [
				'./build/**/*.js',
				'!./build/**/*.legacy.js',
			],
			get assets () {
				return [
					this.src,
					'!./src/**/*.11tydata.js',
					'!./src/**/data/**/*.js'
				]
			},
			root: {
				files: './*.js',
				dotfiles: './.*.js',
				get all () {
					return [
						this.files,
						this.dotfiles
					]
				}
			},
			get lint () {
				return {
					src: [
						this.config,
						this.src,
						this.root.files
					],
					dest: './'
				}
			},
			test: [
				'./*.test.js',
				'./.*.test.js',
				'./config/**/*.test.js',
				'./src/**/*.test.js',
			]
		}
	},
}
