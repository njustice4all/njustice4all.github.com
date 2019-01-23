'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StickNavigator = function (_React$Component) {
  _inherits(StickNavigator, _React$Component);

  function StickNavigator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StickNavigator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StickNavigator.__proto__ || Object.getPrototypeOf(StickNavigator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      headers: []
    }, _this.getHTags = function (elements) {
      var links = document.querySelectorAll('h1, h2, h3');
      var headers = [];
      links.forEach(function (link) {
        if (link.hasAttribute('id')) {
          elements ? headers.push(link) : headers.push(link.getAttribute('id'));
        }
      });

      return headers;
    }, _this.makeHeaders = function () {
      var headers = _this.getHTags();

      _this.setState(function (prevState) {
        return { headers: headers };
      });
    }, _this.onScroll = function (e) {
      var headers = _this.getHTags('elements');
      var ids = [];

      headers.forEach(function (header) {
        var rect = header.getBoundingClientRect();

        if (rect.top < 10) {
          ids.push(header.getAttribute('id'));
        }
      });

      var activeText = ids[ids.length - 1];

      _this.ul.childNodes.forEach(function (li) {
        li.classList.remove('active');
        if (li.firstChild.text === activeText) {
          li.classList.add('active');
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StickNavigator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.makeHeaders();

      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var headers = this.state.headers;


      return React.createElement(
        'div',
        { className: 'stick-nav__wrapper' },
        React.createElement(
          'ul',
          { ref: function ref(ul) {
              return _this2.ul = ul;
            } },
          headers.map(function (header, index) {
            return React.createElement(
              'li',
              { key: index, className: 'sticky-nav__wrapper list' },
              React.createElement(
                'a',
                { href: '#' + header },
                header
              )
            );
          })
        )
      );
    }
  }]);

  return StickNavigator;
}(React.Component);

var dom = document.querySelector('#app-navigator');
if (dom) {
  ReactDOM.render(React.createElement(StickNavigator, null), dom);
}