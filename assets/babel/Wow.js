'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Default from './default.js';
import Goodoc from './goodoc/index.js';
import Aty from './aty/index.js';
import Tpall from './tpall/index.js';

var Wow = function (_React$Component) {
  _inherits(Wow, _React$Component);

  function Wow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Wow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Wow.__proto__ || Object.getPrototypeOf(Wow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: 'default',
      isVisiblePop: false
    }, _this.onChangeView = function (view) {
      return function (e) {
        setTimeout(function () {
          var _document$getElements = document.getElementsByTagName('html'),
              _document$getElements2 = _slicedToArray(_document$getElements, 1),
              html = _document$getElements2[0];

          var _document$getElements3 = document.getElementsByClassName('header-home'),
              _document$getElements4 = _slicedToArray(_document$getElements3, 1),
              header = _document$getElements4[0];

          _this.setState({ view: view });
          html.scrollTo(0, 0);
          header.classList.toggle('active');
        }, 100);
      };
    }, _this.onClickBack = function (e) {
      setTimeout(function () {
        var _document$getElements5 = document.getElementsByTagName('html'),
            _document$getElements6 = _slicedToArray(_document$getElements5, 1),
            html = _document$getElements6[0];

        var _document$getElements7 = document.getElementsByClassName('header-home'),
            _document$getElements8 = _slicedToArray(_document$getElements7, 1),
            header = _document$getElements8[0];

        _this.setState({ view: 'default' });
        header.classList.toggle('active');
        html.scrollTo(0, 0);
      }, 100);
    }, _this.renderView = function () {
      var view = _this.state.view;

      switch (view) {
        case 'goodoc':
          return React.createElement(Goodoc, null);
        case 'aty':
          return React.createElement(Aty, null);
        case 'tpall':
          return React.createElement(Tpall, null);
        default:
          return null;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Wow, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          view = _state.view,
          isVisiblePop = _state.isVisiblePop;


      return React.createElement(
        'div',
        null,
        view !== 'default' && React.createElement(
          'header',
          { className: 'flex-center' },
          React.createElement(
            'button',
            { className: 'btn-back', onClick: this.onClickBack },
            '\uB3CC\uC544\uAC00\uAE30'
          )
        ),
        view === 'default' ? React.createElement(
          'div',
          { className: 'default-wrapper' },
          React.createElement(
            'div',
            { className: 'item', onClick: this.onChangeView('goodoc') },
            React.createElement(
              'h1',
              null,
              '\uAD7F\uB2E5'
            ),
            React.createElement('img', { src: '/assets/images/posts/200217/thumbnail_goodoc.png' })
          ),
          React.createElement(
            'div',
            { className: 'item', onClick: this.onChangeView('aty') },
            React.createElement(
              'h1',
              null,
              '\uC544\uD2F0\uCEF4\uD37C\uB2C8'
            ),
            React.createElement('img', { src: '/assets/images/posts/200217/thumbnail_aty.png' })
          ),
          React.createElement(
            'div',
            { className: 'item', onClick: this.onChangeView('tpall') },
            React.createElement(
              'h1',
              null,
              '\uD2F0\uD53C\uC62C'
            ),
            React.createElement('img', { src: '/assets/images/posts/200217/thumbnail_tpall.png' })
          )
        ) : this.renderView()
      );
    }
  }]);

  return Wow;
}(React.Component);

var dom = document.querySelector('#projects');
if (dom) {
  ReactDOM.render(React.createElement(Wow, null), dom);
}