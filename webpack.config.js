const path = require('path'); // node에서 경로를 쉽게 조작할 수 있게 사용할 수 있는 것

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실제 서비스에서는 production
  devtool: 'eval', // 빠르게 하겠다는 것
  resolve: {
    extensions: ['.js', '.jsx'], // 확장자가 많아질 것이기 때문에 일일이 client.jsx 적어줄 수 없다
  },
  entry: {
    app: ['./client'],
    // client.jsx안에 WordRelay가 있기 때문에 웹팩이 알아서 다 불러서 처리해준다.
    // 알아서 웹팩이 알아서 client.jsx이 있는 것을 찾아서 app.js로 만들어준다
  }, // 입력
  output: {
    path: path.join(__dirname, 'dist'), // 경로를 알아서 합쳐준다, __dirname은 현재 폴더
    filename: 'app.js',
  }, // 출력
};

// 웹팩은 webpack.config.js로 모든게 돌아간다
