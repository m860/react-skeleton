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
 * SkeletonView : Skeleton容器
 *
 * @example <caption>simple usage</caption>
 *
 * <SkeletonView show={true}>
 *     <Skeleton>
 *         <span>title</span>
 *     </Skeleton>
 * </SkeletonView>
 *
 * @example <caption>custom skeleton</caption>
 *
 * <SkeletonView show={true}>
 *     <Skeleton renderSkeleton={()=>(<p style={{backgroundColor:"silver"}}>placeholder</p>)}>
 *         <span>title</span>
 *     </Skeleton>
 * </SkeletonView>
 *
 * */
var SkeletonView = (_temp = _class = function (_PureComponent) {
	_inherits(SkeletonView, _PureComponent);

	function SkeletonView() {
		_classCallCheck(this, SkeletonView);

		return _possibleConstructorReturn(this, (SkeletonView.__proto__ || Object.getPrototypeOf(SkeletonView)).apply(this, arguments));
	}

	_createClass(SkeletonView, [{
		key: "getChildContext",
		value: function getChildContext() {
			return {
				showSkeleton: this.props.show
			};
		}
		/**
   * @property {bool} show [false] - 是否显示skeleton
   * @property {any} children
   * */

	}, {
		key: "render",
		value: function render() {
			return _react2.default.Children.only(this.props.children);
		}
	}]);

	return SkeletonView;
}(_react.PureComponent), _class.propTypes = {
	show: _propTypes2.default.bool,
	children: _propTypes2.default.any
}, _class.defaultProps = {
	show: false
}, _class.childContextTypes = {
	showSkeleton: _propTypes2.default.bool
}, _temp);
exports.default = SkeletonView;