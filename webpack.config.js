const path = require('path');

module.exports = {
    mode: 'production', // или 'development' для отладки
    entry: './src/index.ts', // Точка входа вашего TypeScript кода
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
