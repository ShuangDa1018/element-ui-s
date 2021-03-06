const list = {}
const glob = require('glob')
const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
async function makeList(dirPath,list){
    const files = glob.sync(`${dirPath}/**/index.js`)
    for(let file of files){
        const component = file.split(/[/.]/)[2]
        list[component] = `./${file}`
    }
}
makeList('packages/lib',list)
module.exports = {
    entry:list,
    mode:'production',
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'lib'),
        library:'mui',
        libraryTarget:'umd'
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    resolve:{
        extensions:['.js','.vue']
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use:{
                   loader:'vue-loader'
                }
            }
        ]
    }
}