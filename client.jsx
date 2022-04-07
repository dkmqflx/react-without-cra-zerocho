const React = require('react');
const ReactDom = require('react-dom');
// react 와 react dom을 불러온다

const { default: WordRelay } = require('./WordRelay');

ReactDom.render(<WordRelay></WordRelay>, document.querySelector('#root'));

/* 
require vs import

require는 node의 모듈 시스템

module.exports = Number 로 export 해주면 

다른 파일에서 불러와서 사용할 수 있다

const Number = require('./Number')

import는 정적 임포트, require는 동적 임포트라는 차이가 있다
import는 항상 파일 상단에, require는 파일 아무데서나 쓸 수 있다


export default Number는 es2015 문법, node의 모듈이랑 다르다 
-> import로 가져올 수 있다

엄밀히 말하면 export default와 module.exports는 다르다.
하지만 리액트에서 사용하는 정도라면 호환된다, 거의 호환된다


기본적으로 노드에서 웹팩을 돌리기 때문에, 노드에서는 module.exports 문법만 지원한다 
-> 그래서 import 사용하면 에러나지만 babel이 import도 require로 바꿔주기 때문에 Import를 쓸 수 있는 것 

웹팩은 노드가 돌리기 때문에 웹팩 상단에서 아래처럼 require를 써주는 것이다
const path = require('path'); // node에서 경로를 쉽게 조작할 수 있게 사용할 수 있는 것
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


*/
