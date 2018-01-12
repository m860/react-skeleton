"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Skeleton
 * */
var Skeleton = (_temp = _class = function (_PureComponent) {
	_inherits(Skeleton, _PureComponent);

	function Skeleton() {
		_classCallCheck(this, Skeleton);

		return _possibleConstructorReturn(this, (Skeleton.__proto__ || Object.getPrototypeOf(Skeleton)).apply(this, arguments));
	}

	_createClass(Skeleton, [{
		key: "render",

		/**
   * @property {func} renderSkeleton - 自定义skeleton
   * @property {any} children
   * */
		value: function render() {
			if (this.context.showSkeleton) {
				if (this.props.renderSkeleton) {
					return this.props.renderSkeleton();
				}
				return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
					className: this.props.children.props.className ? "skeleton " + this.props.children.props.className : "skeleton"
				});
			}
			return this.props.children;
		}
	}]);

	return Skeleton;
}(_react.PureComponent), _class.propTypes = {
	children: _propTypes2.default.any,
	renderSkeleton: _propTypes2.default.func
}, _class.contextTypes = {
	showSkeleton: _propTypes2.default.bool
}, _temp);
exports.default = Skeleton;