const React = require('react');
const ReactDom = require('react-dom');
// react 와 react dom을 불러온다

const { default: WordRelay } = require('./WordRelay');

ReactDom.render(<WordRelay></WordRelay>, document.querySelector('#id'));
