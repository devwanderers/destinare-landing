const tailswindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const CracoLessPlugin = require('craco-less')
// craco
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    style: {
        postcss: {
            plugins: [tailswindcss, autoprefixer],
        },
    },
}
