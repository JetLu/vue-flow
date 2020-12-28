const merge = require('webpack-merge');
module.exports = {
	productionSourceMap: false,
	chainWebpack: config => {
		const svgRule = config.module.rule('svg');
		svgRule.uses.clear();
		svgRule
			.use('url-loader')
			.loader('url-loader')
			.tap(options => {
				return merge(options, {
					limit: 10000, // default 10k
				});
			})
			.end();
	},
	css: { extract: false },
	devServer: {
		port: 8000,
		hot: true,
		open: true,
	},
};
