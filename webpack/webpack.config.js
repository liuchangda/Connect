const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
module.exports={
    mode:'development',
    entry:{
        index:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
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
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:"127.0.0.1",//或者localhost
        compress:true,
        port:"8081",
        hot:true
    }
}