'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Goodoc = function (_React$Component) {
  _inherits(Goodoc, _React$Component);

  function Goodoc() {
    _classCallCheck(this, Goodoc);

    return _possibleConstructorReturn(this, (Goodoc.__proto__ || Object.getPrototypeOf(Goodoc)).apply(this, arguments));
  }

  _createClass(Goodoc, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "project-container" },
        React.createElement(
          "div",
          { className: "section" },
          React.createElement(
            "h1",
            { className: "content-title" },
            "\uAD7F\uB2E5 v3 \uC811\uC218\uC608\uC57D \uAD00\uB9AC\uC2DC\uC2A4\uD15C"
          ),
          React.createElement(
            "ul",
            { className: "content-description" },
            React.createElement(
              "li",
              null,
              "\uD0C0\uC784\uD14C\uC774\uBE14\uC758 \uC2DC\uAC01\uD654\uB97C \uD1B5\uD574 \uC811\uC218\uC608\uC57D\uC744 \uAD00\uB9AC"
            ),
            React.createElement(
              "li",
              null,
              "\uB85C\uC9C1\uC740 \uD504\uB860\uD2B8\uC5D0\uC11C \uAD6C\uD604\uD558\uACE0 api\uB97C \uD1B5\uD574 \uB370\uC774\uD130\uB9CC \uC8FC\uACE0\uBC1B\uC74C"
            ),
            React.createElement(
              "li",
              null,
              "typescript / react / redux"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h4",
              null,
              "\uC2A4\uCF00\uC974 \uC9C1\uC811 \uC785\uB825"
            ),
            React.createElement(
              "video",
              { width: "100%", controls: true },
              React.createElement("source", {
                src: "/assets/images/posts/200217/schedule_direct-input.mp4",
                type: "video/mp4"
              })
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h4",
              null,
              "\uC2A4\uCF00\uC974 \uB300\uB7C9 \uC785\uB825"
            ),
            React.createElement(
              "video",
              { width: "100%", controls: true },
              React.createElement("source", { src: "/assets/images/posts/200217/schedule_bulk-input.mp4", type: "video/mp4" })
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h4",
              null,
              "\uC2A4\uCF00\uC974 \uB300\uB7C9 \uC0AD\uC81C"
            ),
            React.createElement(
              "video",
              { width: "100%", controls: true },
              React.createElement("source", { src: "/assets/images/posts/200217/schedule_bulk-delete.mp4", type: "video/mp4" })
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h4",
              null,
              "\uC2A4\uCF00\uC974 \uC6D4\uBCF5\uC0AC"
            ),
            React.createElement(
              "video",
              { width: "100%", controls: true },
              React.createElement("source", { src: "/assets/images/posts/200217/schedule_copy.mp4", type: "video/mp4" })
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "h4",
              null,
              "\uC811\uC218 \uC9C1\uC811 \uC785\uB825"
            ),
            React.createElement(
              "video",
              { width: "100%", controls: true },
              React.createElement("source", { src: "/assets/images/posts/200217/local_direct-input.mp4", type: "video/mp4" })
            )
          )
        ),
        React.createElement(
          "div",
          { className: "section" },
          React.createElement(
            "h1",
            { className: "content-title" },
            "\uAD7F\uB2E5 \uC6B4\uC601 \uC5B4\uB4DC\uBBFC \uBC30\uB108 \uC5C5\uB85C\uB4DC \uC790\uB3D9\uD654"
          ),
          React.createElement(
            "ul",
            { className: "content-description" },
            React.createElement(
              "li",
              null,
              "\uC6B4\uC601\uD300\uC774 \uB2F4\uB2F9\uD558\uBA70 \uC694\uCCAD\uD55C \uC774\uBCA4\uD2B8 \uC774\uBBF8\uC9C0 \uBC0F \uBC30\uB108\uB97C s3\uC5D0 \uC608\uC57D\uC2DC\uAC04\uC5D0 \uB9DE\uCDB0 \uC5C5\uB85C\uB4DC \uC790\uB3D9\uD654"
            ),
            React.createElement(
              "li",
              null,
              "node / express / typescript"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "section" },
          React.createElement(
            "h1",
            { className: "content-title" },
            "\uAD7F\uB2E5 \uC811\uC218 \uC54C\uB9BC\uD1A1 \uB9C8\uC774\uADF8\uB808\uC774\uC158\uBC0F \uC6B4\uC601"
          ),
          React.createElement(
            "ul",
            { className: "content-description" },
            React.createElement(
              "li",
              null,
              "\uBCD1\uC6D0\uC811\uC218 -> \uCE74\uCE74\uC624\uD1A1 \uC54C\uB9BC\uD1A1 -> \uBAA8\uBC14\uC77C\uD654\uBA74"
            ),
            React.createElement(
              "li",
              null,
              "treasureData, GoogleAnalytics\uCD94\uAC00 / angular -> react / typescript / redux-saga"
            )
          ),
          React.createElement(
            "div",
            { className: "flex-center" },
            React.createElement("img", { src: "/assets/images/posts/200217/goodoc-alarm-talk.png" })
          )
        )
      );
    }
  }]);

  return Goodoc;
}(React.Component);

var Aty = function (_React$Component2) {
  _inherits(Aty, _React$Component2);

  function Aty() {
    _classCallCheck(this, Aty);

    return _possibleConstructorReturn(this, (Aty.__proto__ || Object.getPrototypeOf(Aty)).apply(this, arguments));
  }

  _createClass(Aty, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "project-container" },
        React.createElement(
          "div",
          { className: "section" },
          React.createElement(
            "h1",
            { className: "content-title" },
            "ATY Editor \uCEF4\uD3EC\uB10C\uD2B8 \uAC1C\uBC1C"
          ),
          React.createElement(
            "ul",
            { className: "content-description" },
            React.createElement(
              "li",
              null,
              "\uD55C\uAD6D\uD615 wix + \uC1FC\uD551\uBAB0 \uAE30\uB2A5 \uCD94\uAC00 \uBC0F \uBC84\uADF8\uC218\uC815"
            ),
            React.createElement(
              "li",
              null,
              "\uAC80\uC0C9 \uAC1C\uCCB4, \uC774\uBBF8\uC9C0 \uC2AC\uB77C\uC774\uB354, \uD1B5\uACC4\uD398\uC774\uC9C0, \uB4DC\uB798\uADF8\uC564\uB4DC\uB86D 3 \uB381\uC2A4 \uBA54\uB274, \uCE74\uCE74\uC624\uD1A1 \uD50C\uB7EC\uC2A4 \uCE5C\uAD6C \uCD94\uAC00, \uC57C\uB180\uC790 \uC608\uC57D \uB2EC\uB825\uB4F1"
            ),
            React.createElement(
              "li",
              null,
              "react.js"
            )
          ),
          React.createElement(
            "div",
            { className: "flex-center" },
            React.createElement("img", { src: "/assets/images/posts/200217/aty/3.png" })
          ),
          React.createElement(
            "div",
            { className: "flex", style: { marginTop: '30px' } },
            React.createElement(
              "div",
              { className: "flex-center" },
              React.createElement("img", { src: "/assets/images/posts/200217/aty/1.png" })
            ),
            React.createElement(
              "div",
              { className: "flex-center", style: { marginLeft: '20px' } },
              React.createElement("img", { src: "/assets/images/posts/200217/aty/5.png" })
            )
          )
        ),
        React.createElement(
          "div",
          { className: "section" },
          React.createElement(
            "h1",
            { className: "content-title" },
            "\uB2E8\uACE8\uC0AC\uC7A5\uB2D8"
          ),
          React.createElement(
            "ul",
            { className: "content-description" },
            React.createElement(
              "li",
              null,
              "\uBC30\uB2EC,\uB9E4\uC7A5,\uD3EC\uC7A5 \uC8FC\uBB38\uB4F1\uC744 \uD478\uC2DC\uBA54\uC138\uC9C0\uB85C \uAD00\uB9AC"
            ),
            React.createElement(
              "li",
              null,
              "react-native"
            )
          ),
          React.createElement(
            "div",
            { className: "flex-center", style: { flexDirection: 'column', alignItems: 'center' } },
            React.createElement(
              "a",
              {
                href: "https://itunes.apple.com/us/app/%EB%8B%A8%EA%B3%A8%EC%82%AC%EC%9E%A5%EB%8B%98/id1358583165?l=ko&ls=1&mt=8",
                rel: "nofollow"
              },
              "iOS"
            ),
            React.createElement(
              "a",
              {
                href: "https://play.google.com/store/apps/details?id=kr.aty.bossapp&hl=ko",
                rel: "nofollow"
              },
              "android"
            )
          )
        )
      );
    }
  }]);

  return Aty;
}(React.Component);

var Tpall = function (_React$Component3) {
  _inherits(Tpall, _React$Component3);

  function Tpall() {
    _classCallCheck(this, Tpall);

    return _possibleConstructorReturn(this, (Tpall.__proto__ || Object.getPrototypeOf(Tpall)).apply(this, arguments));
  }

  _createClass(Tpall, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "project-container" },
        React.createElement(
          "div",
          { className: "section" },
          React.createElement(
            "h1",
            { className: "content-title" },
            "signet-air \uC5B4\uB4DC\uBBFC"
          ),
          React.createElement(
            "ul",
            { className: "content-description" },
            React.createElement(
              "li",
              null,
              "IFE(Inflight Entertainment)\uC81C\uD488\uC758 \uAD00\uB9AC\uC790 \uC6F9\uC571 (\uBA74\uC138\uD488\uBC0F \uAE30\uB0B4\uC2DD \uC8FC\uBB38, \uBE44\uB514\uC624 \uC2A4\uD2B8\uB9AC\uBC0D, \uD56D\uACF5\uC815\uBCF4 \uB4F1)"
            ),
            React.createElement(
              "li",
              null,
              "React + React-Redux + JWT + videojs"
            ),
            React.createElement(
              "li",
              null,
              "infinite slider carousel \uC81C\uC791"
            ),
            React.createElement(
              "li",
              null,
              "\uC0AC\uC6A9\uC790\uC640 \uC2B9\uBB34\uC6D0 \uD398\uC774\uC9C0\uC758 \uB514\uC790\uC778"
            )
          ),
          React.createElement(
            "div",
            { className: "flex" },
            React.createElement(
              "div",
              { className: "flex-center" },
              React.createElement("img", { src: "/assets/images/posts/200217/signet.png" })
            ),
            React.createElement(
              "div",
              { className: "flex-center" },
              React.createElement("img", { src: "/assets/images/posts/200217/thumbnail_tpall.png" })
            )
          )
        ),
        React.createElement(
          "div",
          { className: "section" },
          React.createElement(
            "h1",
            { className: "content-title" },
            "Calvary Christian Scholars \uAD6D\uC81C\uC678\uAD6D\uC778\uD559\uAD50 \uD648\uD398\uC774\uC9C0"
          ),
          React.createElement(
            "ul",
            { className: "content-description" },
            React.createElement(
              "li",
              null,
              "\uAC15\uB0A8 \uAD6D\uC81C \uC678\uAD6D\uC778 \uD559\uAD50 \uD648\uD398\uC774\uC9C0 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C"
            ),
            React.createElement(
              "li",
              null,
              "React / React-Redux / wordpress rest api / bootstrap grid system"
            ),
            React.createElement(
              "li",
              null,
              "\uAD6C\uAE00 \uCE98\uB9B0\uB354 api \uC0AC\uC6A9 \uBC0F carousel \uC81C\uC791"
            ),
            React.createElement(
              "li",
              null,
              "\uAC8C\uC2DC\uD310 paging \uCC98\uB9AC \uC54C\uACE0\uB9AC\uC998 \uAD6C\uD604\uBC0F \uBAA8\uBC14\uC77C\uD398\uC774\uC9C0 \uB514\uC790\uC778"
            )
          ),
          React.createElement(
            "div",
            { className: "flex-center" },
            React.createElement("img", { src: "/assets/images/posts/200217/ccs/ccs.png" })
          )
        ),
        React.createElement(
          "div",
          { className: "section" },
          React.createElement(
            "h1",
            { className: "content-title" },
            "\uC544\uD2B8\uB85C\uD790\uB9C1"
          ),
          React.createElement(
            "ul",
            { className: "content-description" },
            React.createElement(
              "li",
              null,
              "\uADF8\uB9BC\uC73C\uB85C \uC2EC\uB9AC\uCE58\uB8CC\uB97C \uD558\uAE30\uC704\uD55C \uADF8\uB9BC\uD310 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158"
            ),
            React.createElement(
              "li",
              null,
              "Electron / React.js / React-Redux"
            )
          ),
          React.createElement(
            "div",
            { className: "flex-center" },
            React.createElement("img", { src: "/assets/images/posts/200217/artro-healing/1.png" })
          ),
          React.createElement(
            "div",
            { className: "flex" },
            React.createElement(
              "div",
              null,
              React.createElement("img", { src: "/assets/images/posts/200217/artro-healing/2.png" })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("img", { src: "/assets/images/posts/200217/artro-healing/3.png" })
            )
          )
        )
      );
    }
  }]);

  return Tpall;
}(React.Component);

var Wow = function (_React$Component4) {
  _inherits(Wow, _React$Component4);

  function Wow() {
    var _ref;

    var _temp, _this4, _ret;

    _classCallCheck(this, Wow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this4 = _possibleConstructorReturn(this, (_ref = Wow.__proto__ || Object.getPrototypeOf(Wow)).call.apply(_ref, [this].concat(args))), _this4), _this4.state = {
      view: 'default',
      isVisiblePop: false
    }, _this4.onChangeView = function (view) {
      return function (e) {
        setTimeout(function () {
          var _document$getElements = document.getElementsByTagName('html'),
              _document$getElements2 = _slicedToArray(_document$getElements, 1),
              html = _document$getElements2[0];

          var _document$getElements3 = document.getElementsByClassName('header-home'),
              _document$getElements4 = _slicedToArray(_document$getElements3, 1),
              header = _document$getElements4[0];

          _this4.setState({ view: view });
          html.scrollTo(0, 0);
          header.classList.toggle('active');
        }, 100);
      };
    }, _this4.onClickBack = function (e) {
      setTimeout(function () {
        var _document$getElements5 = document.getElementsByTagName('html'),
            _document$getElements6 = _slicedToArray(_document$getElements5, 1),
            html = _document$getElements6[0];

        var _document$getElements7 = document.getElementsByClassName('header-home'),
            _document$getElements8 = _slicedToArray(_document$getElements7, 1),
            header = _document$getElements8[0];

        _this4.setState({ view: 'default' });
        header.classList.toggle('active');
        html.scrollTo(0, 0);
      }, 100);
    }, _this4.renderView = function () {
      var view = _this4.state.view;

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
    }, _temp), _possibleConstructorReturn(_this4, _ret);
  }

  _createClass(Wow, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          view = _state.view,
          isVisiblePop = _state.isVisiblePop;


      return React.createElement(
        "div",
        null,
        view !== 'default' && React.createElement(
          "header",
          { className: "flex-center" },
          React.createElement(
            "button",
            { className: "btn-back", onClick: this.onClickBack },
            "\uB3CC\uC544\uAC00\uAE30"
          )
        ),
        view === 'default' ? React.createElement(
          "div",
          { className: "default-wrapper" },
          React.createElement(
            "div",
            { className: "item", onClick: this.onChangeView('goodoc') },
            React.createElement(
              "h1",
              null,
              "\uAD7F\uB2E5"
            ),
            React.createElement("img", { src: "/assets/images/posts/200217/thumbnail_goodoc.png" })
          ),
          React.createElement(
            "div",
            { className: "item", onClick: this.onChangeView('aty') },
            React.createElement(
              "h1",
              null,
              "\uC544\uD2F0\uCEF4\uD37C\uB2C8"
            ),
            React.createElement("img", { src: "/assets/images/posts/200217/thumbnail_aty.png" })
          ),
          React.createElement(
            "div",
            { className: "item", onClick: this.onChangeView('tpall') },
            React.createElement(
              "h1",
              null,
              "\uD2F0\uD53C\uC62C"
            ),
            React.createElement("img", { src: "/assets/images/posts/200217/thumbnail_tpall.png" })
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