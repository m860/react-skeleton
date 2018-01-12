import React, {PureComponent} from "react";
import PropTypes from 'prop-types'

export default class SkeletonView extends PureComponent {
	static propTypes = {
		show: PropTypes.bool,
		children: PropTypes.any
	}
	static defaultProps = {
		show: false
	};
	static childContextTypes = {
		showSkeleton: PropTypes.bool
	}

	getChildContext() {
		return {
			showSkeleton: this.props.show
		}
	}


	render() {
		return React.Children.only(this.props.children);
	}
}
