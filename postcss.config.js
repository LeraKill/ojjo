const postcssShort = require('postcss-short');
const cssNano = require('cssnano');

module.exports = {
	plugins: [
		require('autoprefixer'),
		require('@hail2u/css-mqpacker'),
		require('postcss-focus'),
		require('postcss-size'),
		postcssShort({
			features: {
				'font-size': true,
				'postcss-short-position': true,
			}
		}),
		cssNano({
			preset: 'default',
		}),
	]
}
