const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    // 최상위 자바스크립트 파일의 위치를 webpack에 알려야 하며 이를 entry속성에 명시한다.
    // entry 설정은 항상 프로젝트 디렉토리 내부이므로 상대경로로 사용
    entry: "./src/index.js",
    // 합쳐진 소스에서의 에러정보 표시가 아닌 본래 소스의 에러위치를 표시함.
    devtool: "inline-source-map",
    // output 설정은 항상 프로젝트 내부란 보장이 없으므로 절대경로 사용
    output: {
        path: __dirname,
        filename: "biuld.js"
    },
    module: {
        // 처리 규칙 등록
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\/html$/,
                use: [{
                    loader: "html-loader",
                    options: {minimize: true}
                }]
            },
            {
                // css 파일만 인식하도록 정규식 사용
                test: /\.css$/,
                // 정규식에 의해 매칭되는 파일은 아래 use항목에 등록된 loader를 통해 처리되도록함.
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
} 