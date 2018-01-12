import './sass/skeleton.sass'
import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import SkeletonView from './components/SkeletonView'
import Skeleton from './components/Skeleton'
import PropTypes from 'prop-types'


class Test extends PureComponent {
	static propTypes = {
		title: PropTypes.string
	};

	constructor(props) {
		super(props);
		this.state = {
			show: true
		};
	}

	render() {
		return (
			<SkeletonView show={this.state.show}>
				<div>
					<Skeleton>
						<span className="test">{this.props.title}</span>
					</Skeleton>
					<button type="button" onClick={() => {
						this.setState({
							show: !this.state.show
						})
					}}>toggle skeleton
					</button>
				</div>
			</SkeletonView>
		);
	}
}

class App extends PureComponent {
	render() {
		return (
			<div>
				<Test title="Hello"/>
			</div>
		);
	}
}

ReactDOM.render(
	<App></App>
	, document.getElementById("view"));