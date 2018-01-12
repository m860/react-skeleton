import './sass/skeleton.sass'
import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import SkeletonView from './components/SkeletonView'
import Skeleton from './components/Skeleton'
import PropTypes from 'prop-types'


class Test extends PureComponent {
	static propTypes = {
		title: PropTypes.string,
		show: PropTypes.bool
	};

	render() {
		return (
			<SkeletonView show={this.props.show}>
				<div style={{backgroundColor:"#eaebed",padding:10}}>
					<Skeleton>
						<span className="test">{this.props.title}</span>
					</Skeleton>
				</div>
			</SkeletonView>
		);
	}
}

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			title: "hello world!"
		};
	}

	render() {
		return (
			<div>
				<button type="button" onClick={() => {
					this.setState(Object.assign({}, {
						show: true,
						title:"-------------------"
					}), () => {
						setTimeout(() => {
							this.setState(Object.assign({}, {
								show: false,
								title:'hello world!'
							}))
						}, 2000)
					})
				}}>fetch data
				</button>
				<Test title={this.state.title} show={this.state.show}/>
			</div>
		);
	}
}

ReactDOM.render(
	<App></App>
	, document.getElementById("view"));