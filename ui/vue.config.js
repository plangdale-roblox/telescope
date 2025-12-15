const { defineConfig } = require('@vue/cli-service')

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = defineConfig({
    outputDir: 'dist',
    assetsDir: 'static',
    publicPath: './',
    transpileDependencies: true,
    devServer: {
        client: false,
        webSocketServer: false,
        proxy: 'http://127.0.0.1:8008',
        historyApiFallback: true,
        hot: true,
        liveReload: true,
    },
    configureWebpack: {
        plugins: [
            new MonacoWebpackPlugin({
                languages: ['json'],
            }),
        ],
    },
})
