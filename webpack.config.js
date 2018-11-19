/*
O Webpack é usado para compilar e empacotar todos os arquivos de projeto 
para que eles estejam prontos para serem carregados em um navegador. 
Isso é feito com a ajuda de carregadores e plug-ins configurados no arquivo webpack.config.js.
 Para mais informações sobre o webpack, confira os documentos do webpack.

O arquivo de configuração do webpack também define um objeto de configuração global
 para o aplicativo usando a propriedade externals. Você também pode usá-lo para definir 
 diferentes variáveis de configuração para seus ambientes de desenvolvimento e produção.
*/

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
                test: /\.vue?$/,
                exclude: /(node_modules)/,
                use: 'vue-loader'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}