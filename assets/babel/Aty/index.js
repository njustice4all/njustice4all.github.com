var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Aty = function (_React$Component) {
  _inherits(Aty, _React$Component);

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

export default Aty;