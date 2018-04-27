'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./App.css');

var _BlockLoad = require('./components/BlockLoad');

var _BlockLoad2 = _interopRequireDefault(_BlockLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {Grid, Jumbotron } from 'react-bootstrap';


var App = function (_Component) {
  _inherits(App, _Component);

  _createClass(App, [{
    key: 'handleClick',
    value: function handleClick() {}
  }]);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      numOfClicks: 0
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'body' },
        _react2.default.createElement(
          'h1',
          { id: 'title' },
          'EOS 10 Most Recent Blocks'
        ),
        _react2.default.createElement(
          'div',
          { id: 'main' },
          _react2.default.createElement(
            'div',
            { className: 'block' },
            _react2.default.createElement(
              'p',
              { className: 'blockText' },
              'Block'
            ),
            _react2.default.createElement('div', { className: 'blockContext' })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
