const path = require("path");

module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    //输出文件目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    // eslint-loader  是否在保存的时候验证代码
    lintOnSave : false,

    // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
    chainWebpack: (config) =>{
        // const svgRule = config.module.rule("svg");     
        // svgRule.uses.clear();     
        // svgRule
        // .use("svg-sprite-loader")
        // .loader("svg-sprite-loader")
        // .options({ 
        //     symbolId: "icon-[name]",
        //     include: ["./src/icons"] 
        // });
    },
    configureWebpack: (config) =>{
        config.resolve = { // 配M解析别名
            extensions: ['.js', '.json', '.vue'],//自动添加文件名后缀
            alias: {
                'vue': 'vue/dist/vue.js',
                '@': path.resolve(__dirname, './src'),
                // 'public': path.resolve(_dirname, './public'),
                '@c': path.resolve(__dirname, './src/components'),
                // 'common': path.resolve(_dirname, './src/common'),
                // 'api': path.resolve(_dimame, './src/ae-i'),
                // 'views': path.resolve(_dirname, './src/views'),
                // 'data': path.resolve(_dirname, './src/data')
            }
        }
    },
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建,生产环境是否生产souceMap文件
    productionSourceMap: false,
    css: {
        //是否使用css分离插件 ExtractTextPlugin、
        extract: false,
        //开启css source Map？设置为 true 之后可能会影响构建的性能
        sourceMap: false,
        //css预设器配置项
        loaderOptions: {},
        // 当为true时，css文件名可省略 module 默认为 false
        requireModuleExtension: true,
        //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
        loaderOptions: {
        // css: {},
        // less: {},
        sass: {
            prependData: `@import "./src/assets/style/index.scss";`
        },
        },
    },
    // 是否为 Babel 或 TypeScript 使用 thread-loader
    parallel: require('os').cpus().length > 1,
    // 向 PWA 插件传递选项
    pwa: {},
    // 所有 webpack-dev-server 的选项都支持
    devServer: {
        // open: true,  //配置编译完成自动启动浏览器
        // host: '0.0.0.0', //指定使用地址
        // port: 8080, // 端口号
        // https: false, // https:{type:Boolean}编译失败刷新页面
        // hot: true, //开启热加载
        // hotOnly: false,
        // proxy: {
        //     '/devApi': {
        //         target: 'http://www.web-jshtml.cn/productapi/token', // 需要跨域请求的地址或者IP
        //         changeOrigin: true, //  表示是否跨域
        //         pathRewrite: {
        //             '^/devApi': '' //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉 
        //         }
        //     },
        //     // '/devApi': {
        //     //     target: 'http://www.web-jshtml.cn', // 需要跨域请求的地址或者IP
        //     //     changeOrigin: true, //  表示是否跨域
        //     //     pathRewrite: {
        //     //         '^/devApi': '/productapi' //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉 
        //     //     }
        //     // },
        // }, //设置代理（指跨域）
        // overlay: { //全屏模式下是否显示脚本错误
        //     warnings: true,
        //     errors: true,
        // },
        // before: app => {}
    },
    //第三方插件选项
    pluginOptions: {}
}
