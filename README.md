# react-skeleton

<!-- badge -->
[![npm version](https://img.shields.io/npm/v/@m860/react-skeleton.svg)](https://www.npmjs.com/package/@m860/react-skeleton)
[![npm license](https://img.shields.io/npm/l/@m860/react-skeleton.svg)](https://www.npmjs.com/package/@m860/react-skeleton)
[![npm download](https://img.shields.io/npm/dm/@m860/react-skeleton.svg)](https://www.npmjs.com/package/@m860/react-skeleton)
[![npm download](https://img.shields.io/npm/dt/@m860/react-skeleton.svg)](https://www.npmjs.com/package/@m860/react-skeleton)
[![Build Status](https://travis-ci.org/m860/react-skeleton.svg?branch=master)](https://travis-ci.org/m860/react-skeleton)
[![Coverage Status](https://coveralls.io/repos/github/m860/react-skeleton/badge.svg)](https://coveralls.io/github/m860/react-skeleton)
<!-- endbadge -->

[Documentation & Examples](./API.md)

## Install

```shell
$ npm i @m860/react-skeleton --save
```

## Import

```javascript
import '@m860/react-skeleton/css/skeleton.css'
import {SkeletonView,Skeleton} from '@m860/react-skeleton'
```

## Example

_Test.js_

```javascript
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
```

_App.js_

```javascript
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
```

**screenshot**

<img src="https://raw.githubusercontent.com/m860/react-skeleton/master/screenshots/react-skeleton-example.gif"/>
