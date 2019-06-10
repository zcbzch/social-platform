module.exports = {
    devServer: {
        proxy: {
            '/api/v1': {
                target: 'http://47.106.249.150:5000',
                changeOrigin: false,
            },
        }
    }
}