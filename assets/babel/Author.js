'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Author = function (_React$Component) {
  _inherits(Author, _React$Component);

  function Author() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Author);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Author.__proto__ || Object.getPrototypeOf(Author)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      strings: ['I', ' ', 'W', 'A', 'N', 'T', ' ', 'T', 'O', ' ', 'B', 'E', 'L', 'I', 'E', 'V', 'E'],
      stack: [],
      index: 0,
      indicator: true,
      direction: 'forward'
    }, _this.pushStringToStack = function () {
      var _this$state = _this.state,
          strings = _this$state.strings,
          index = _this$state.index,
          direction = _this$state.direction;


      if (index === 0) {
        _this.setState(function (prevState) {
          return { direction: 'forward' };
        });
      }

      if (index === strings.length) {
        _this.setState(function (prevState) {
          return { index: 0, stack: [] };
        });
        return;
        // this.setState(prevState => ({ direction: 'backward' }));
      }

      _this.setState(function (prevState) {
        return {
          stack: [].concat(_toConsumableArray(prevState.stack), [strings[index]]),
          index: direction === 'forward' ? index + 1 : index - 1
        };
      });
    }, _this.flashIndicator = function () {
      _this.setState(function (prevState) {
        return { indicator: !prevState.indicator };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Author, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.stringInterval = window.setInterval(this.pushStringToStack, 600);
      this.flashInterval = window.setInterval(this.flashIndicator, 250);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.clearInterval(this.stringInterval);
      window.clearInterval(this.flashInterval);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          stack = _state.stack,
          indicator = _state.indicator;

      var renderString = stack.join('');
      var indicatorID = indicator && 'indicator';

      return React.createElement(
        'div',
        { className: 'string-stack' },
        React.createElement(
          'section',
          { className: 'author' },
          React.createElement(
            'div',
            { className: 'toleft' },
            React.createElement('img', { className: 'selfie', src: '../assets/images/profile.jpeg' })
          ),
          React.createElement(
            'div',
            { className: 'toright' },
            React.createElement(
              'h4',
              { className: 'name' },
              'AngelKing47'
            ),
            React.createElement(
              'div',
              { style: { height: '24px' } },
              React.createElement(
                'h3',
                null,
                renderString
              ),
              React.createElement('span', { id: indicatorID })
            )
          )
        )
      );
    }
  }]);

  return Author;
}(React.Component);

var dom = document.querySelector('#author-container');
if (dom) {
  ReactDOM.render(React.createElement(Author, null), dom);
}