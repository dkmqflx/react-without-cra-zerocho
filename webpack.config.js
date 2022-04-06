const path = require('path'); // node에서 경로를 쉽게 조작할 수 있게 사용할 수 있는 것
const webpack = require('webpack');

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

  // babel core가 바벨의 기본적인 것들 들어있는 것
  // bable/preset-env가 브라우저에 맞게 알아서 최신 문법을 예전 문법으로 바꿔준다
  // babel/preset-react : jsx 같은 것 지원할 수 있다, jsx 같은 것들을 바꿔준다
  // babel-loader : bable과 웹팩을 연결해준다
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader', // 옛날 브라우저와 호횐되는 문법으로 바꿔주겠다
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR', 'last 2 chrome versions'], // 가장 최신의 크롬의 2 버전만 (ex. 69, 70)
                  // 지원하는 구체적인 브라우저를 명시해줄 수 있다
                  // 예전 브라우저를 할 수록 최신 문법을 예전 문법으로 바꿔야 하기 때문에 바벨의 작업량이 너무 많아져서 점점 더 느려진다
                  // 따라서 회사에 지원하려는 브라우저만 적어준다
                  // https://github.com/browserslist/browserslist
                  // 예를 들어 어떤 타겟을 잡아야할 지 모르겠다
                  // browsers: ['> 5% in KR', 'last 2 chrome versions'],
                  // 한국에서 브라우저 점유율이 5퍼센트 이상인 브라우저는 다 지원한다
                  // 한국에는 ie 사용 비율이 높으니까 지원되는데 미국에는 ie 사용 비율이 적으니까 지원안할 수 있다.
                },
                debug: true, // 개발용에서는 디버그 true
              },
            ],
            '@babel/preset-react',
          ],

          plugins: [],

          // '@babel/preset-env', 이러한 방법으로 설정을 해줄 수 있다
          // preset은 plugin들의 모음이다
          //'@babel/preset-env'이 하나로 보여도 안에 많은 플러그인들이 합쳐져 있다
        }, // babel의 옵션들
      },
    ],
  },

  // 플러그인은 확장 프로그램 같은 것, 웹팩에서 module 적용하는 것 이외에 추가적으로 무엇인가 하고 싶을 때 사용한다
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

  output: {
    path: path.join(__dirname, 'dist'), // 경로를 알아서 합쳐준다, __dirname은 현재 폴더
    filename: 'app.js',
  }, // 출력
};

// 웹팩은 webpack.config.js로 모든게 돌아간다
