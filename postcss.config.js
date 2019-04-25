// postcss.config.js
const autoprefixer = require('autoprefixer');
const rpxToViewport = require('postcss-rpx-to-viewport');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                // 加这个后可以出现额外的兼容性前缀
                "> 0.01%"
            ]
        }),
        rpxToViewport()
    ]
};
