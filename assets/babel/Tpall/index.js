var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tpall = function (_React$Component) {
  _inherits(Tpall, _React$Component);

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

export default Tpall;