const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/templates/index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                },
            ],
        }),
        new WebpackPwaManifest({
            filename: 'manifest.json',
            name: 'Fologue',
            short_name: 'Fologue',
            description: 'We provide the best restaurant for you!',
            theme_color: '#5165f4',
            background_color: '#5165f4',
            display: 'standalone',
            start_url: './index.html',
            icons: [
                {
                    src: path.resolve(
                        __dirname,
                        'src/public/images/logo/logo.png'
                    ),
                    sizes: [96, 128, 192, 256, 384, 512],
                    purpose: 'any maskable',
                    destination: path.join('icons', 'logo'),
                },
                {
                    src: path.resolve(
                        __dirname,
                        'src/public/images/logo/logo.png'
                    ),
                    size: '1024x1024',
                    purpose: 'any maskable',
                    destination: path.join('icons', 'logo'),
                },
                {
                    src: path.resolve(
                        __dirname,
                        'src/public/images/logo/logo.png'
                    ),
                    size: '1024x1024',
                    purpose: 'any maskable',
                    destination: path.join('icons', 'logo'),
                },
            ],
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
                {
                    urlPattern: new RegExp('.+\\.js$'),
                    options: {
                        cacheName: 'js-cache',
                    },
                    handler: 'StaleWhileRevalidate',
                },
                {
                    urlPattern: new RegExp('.+\\.css$'),
                    options: {
                        cacheName: 'css-cache',
                    },
                    handler: 'StaleWhileRevalidate',
                },
                {
                    urlPattern: new RegExp(
                        'https://restaurant-api.dicoding.dev/images/'
                    ),
                    options: {
                        cacheName: 'api-image-cache',
                    },
                    handler: 'StaleWhileRevalidate',
                },
                {
                    urlPattern: new RegExp(
                        'https://restaurant-api.dicoding.dev/list'
                    ),
                    options: {
                        cacheName: 'restaurant-list-cache',
                    },
                    handler: 'StaleWhileRevalidate',
                },
                {
                    urlPattern: new RegExp(
                        'https://restaurant-api.dicoding.dev/detail/'
                    ),
                    options: {
                        cacheName: 'restaurant-detail-cache',
                    },
                    handler: 'StaleWhileRevalidate',
                },
                {
                    urlPattern: new RegExp('/.*'),
                    handler: 'StaleWhileRevalidate',
                    method: 'GET',
                },
            ],
        }),
    ],
};
