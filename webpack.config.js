var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = function (env) {
	if (!env) {
		env = {};
	}
	if (!env.NODE_ENV) {
		env.NODE_ENV = 'development';
	}
	console.log('env.NODE_ENV=' + env.NODE_ENV);
	var isProduction = env.NODE_ENV !== 'development';
	var plugins = [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
			, filename: "vendor.bundle.js"
		})
		//clean dist
		, new CleanWebpackPlugin(['dist'], {
			root: __dirname,
			verbose: true,
			dry: false
		})
		//inject style & javascript to index.html template
		, new HtmlWebpackPlugin({
			filename: "index.html",
			template: './src/index.html',
			inject: false
		})
		, new ExtractTextPlugin(isProduction ? "[contenthash].css" : "style.[contenthash].css")
		, new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer({
						browsers: ['> 5%']
					})
				]
			}
		})
		, new webpack.HotModuleReplacementPlugin()
	];
	if (isProduction) {
		plugins.push(new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}));
	}
	var opt = {
		devtool: 'source-map',
		entry: "./src/app.js"
		, output: {
			path: path.join(__dirname, "dist")
			, filename: isProduction ? '[hash].js' : 'bundle.[hash].js'
			, chunkFilename: isProduction ? '[chunkhash].[hash].js' : '[id].[chunkhash].[hash].js'
		}
		, module: {
			rules: [{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: "css-loader"
					}]
				})
			}, {
				test: /\.(jsx|js)?$/
				, exclude: /(node_modules|bower_components)/
				, use: "babel-loader"
			}, {
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						"css-loader",
						"postcss-loader",
						"sass-loader"
					]
				})
			}, {
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			}, {
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: "url-loader?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: "file-loader"
			}, {
				test: /\.(ogg|mp3)$/,
				use: "file-loader"
			}]
		}
		, resolve: {
			//设置别名
			alias: {}
		}
		, plugins: plugins
	};

	return opt;
};