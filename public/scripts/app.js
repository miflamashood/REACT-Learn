"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            var title = "My First React";
            var subtitle = "way to go";
            var options = ['One', 'Two', 'Three', 'Four'];
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, null),
                React.createElement(Options, { options: options }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    null,
                    "What should I not do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.removeAll = _this4.removeAll.bind(_this4);
        return _this4;
    }

    _createClass(Options, [{
        key: "removeAll",
        value: function removeAll() {
            console.log(this.props.options);
            alert('I amm remove all');
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.removeAll },
                    "Remove All"
                ),
                this.props.options.map(function (item) {
                    return React.createElement(Option, { key: item, optiontext: item });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.optiontext
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: "onFormSubmit",
        value: function onFormSubmit(event) {
            event.preventDefault();
            var option = event.target.elements.txtoption.value;
            if (option) alert(option);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.onFormSubmit },
                    React.createElement("input", { type: "text", name: "txtoption" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var jsx = React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(Action, null),
    React.createElement(Options, null),
    React.createElement(AddOption, null)
);

var Counter = function (_React$Component7) {
    _inherits(Counter, _React$Component7);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this7 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this7.handleAddMore = _this7.handleAddMore.bind(_this7);
        _this7.handleMinusOne = _this7.handleMinusOne.bind(_this7);
        _this7.handleResetOne = _this7.handleResetOne.bind(_this7);
        _this7.state = { count: 0 };
        return _this7;
    }

    _createClass(Counter, [{
        key: "handleAddMore",
        value: function handleAddMore() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: "handleMinusOne",
        value: function handleMinusOne() {
            alert('minus one');
        }
    }, {
        key: "handleResetOne",
        value: function handleResetOne() {
            alert('reset');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Count: ",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleAddMore },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleMinusOne },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleResetOnes },
                    "Reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
