const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '~': path.resolve(__dirname, 'src'),          // Алиас для src
            '@app': path.resolve(__dirname, 'src/app'),   // Алиас для app
            '@entities': path.resolve(__dirname, 'src/entities'),   // Алиас для entities
            '@features': path.resolve(__dirname, 'src/features'),   // Алиас для features
            '@shared': path.resolve(__dirname, 'src/shared'),       // Алиас для shared
            '@pages': path.resolve(__dirname, 'src/pages'),         // Алиас для pages
        },
    },
};