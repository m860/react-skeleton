import React, {PureComponent} from "react";
import PropTypes from 'prop-types'

/**
 * Skeleton
 * */
export default class Skeleton extends PureComponent {
	/**
	 * @property {func} renderSkeleton - 自定义skeleton
	 * @property {any} children
	 * */
	static propTypes = {
		children: PropTypes.any,
		renderSkeleton: PropTypes.func
	};
	static contextTypes = {
		showSkeleton: PropTypes.bool,
	};

	render() {
		if (this.context.showSkeleton) {
			if (this.props.renderSkeleton) {
				return this.props.renderSkeleton();
			}
			return React.cloneElement(React.Children.only(this.props.children), {
				className: this.props.children.props.className ? `skeleton ${this.props.children.props.className}` : "skeleton"
			});
		}
		return this.props.children;
	}
}
