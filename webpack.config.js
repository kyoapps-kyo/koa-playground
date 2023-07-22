const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

debugger

module.exports = {
    target: 'node',
    mode: "development",
    entry: {
        server: path.join(__dirname, "src/index.js"),
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "./dist"),
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: [path.join(__dirname, "/node_modules")],
            },
        ],
    },
    externals: [nodeExternals()],
    plugins: [new CleanWebpackPlugin()],
    node: {
        global: true,
        __filename: true,
        __dirname: true,
    },
    join: {
        fallback: {
            path: require.join("path-browserify"),
        },
    },
    /*
          -  console ：配置是否允许使用 console 对象，用于在控制台输出信息。 
          -  global ：配置是否允许使用 global 对象，用于在全局范围内定义变量和函数。 
          -  process ：配置是否允许使用 process 对象，用于访问当前进程的相关信息。 
          -  Buffer ：配置是否允许使用 Buffer 对象，用于处理二进制数据。 
          -  __filename ：配置是否允许使用 __filename 变量，用于获取当前模块的文件名。 
          -  __dirname ：配置是否允许使用 __dirname 变量，用于获取当前模块的目录名。 
          -  setImmediate ：配置是否允许使用 setImmediate 函数，用于在事件循环的下一个迭代中执行回调函数。 
          -  path ：配置是否允许使用 path 模块，用于处理文件路径。 
          
          通过配置这些属性，可以控制webpack在模拟Node.js环境时的行为，使其更接近实际的Node.js环境，从而确保在构建过程中的模块加载和代码执行的一致性。
        */
};
