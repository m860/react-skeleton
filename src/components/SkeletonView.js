import React, {PureComponent} from "react";
import PropTypes from 'prop-types'

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
export default class SkeletonView extends PureComponent {
	/**
	 * @property {bool} show [false] - 是否显示skeleton
	 * @property {any} children
	 * */
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
