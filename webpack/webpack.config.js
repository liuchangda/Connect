const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
    mode:'development',
    entry:{
        index:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].js",
        publicPath:'http://127.0.0.1:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test:/\.(jpg|png|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500000,
                        outputPath:'img/'
                    }
                }]
            },
            {
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(), //热更新
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true,//去引号
                collapseWhitespace:false //去空白
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin("./css/main.css")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:"127.0.0.1",//或者localhost
        compress:true,
        port:"8081",
        hot:true
    }
}