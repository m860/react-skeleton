/**
 * Created by jean.h.ma on 10/08/2017.
 */
import React from "react";
import {mount, configure} from "enzyme";
import SkeletonView from '../src/components/SkeletonView'
import Skeleton from '../src/components/Skeleton'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe("test <SkeletonView/> & <Skeleton/>", () => {
	test(`show/hide skeleton`, () => {
		function render(props) {
			return mount(
				<SkeletonView {...props}>
					<Skeleton>
						<span>abc</span>
					</Skeleton>
				</SkeletonView>)
		}

		let ele = render({show: false});
		expect(ele.props().show).toBe(false);
		expect(ele.find('span').props().className).toBeUndefined();

		ele = render({show: true});
		expect(ele.props().show).toBe(true);
		expect(ele.find('span').props().className).toMatch(/skeleton/);
	})

	test(`concat className`, () => {
		const ele = mount(
			<SkeletonView show={true}>
				<Skeleton>
					<span className="abc">abc</span>
				</Skeleton>
			</SkeletonView>
		);
		const className = ele.find('span').props().className;
		expect(className).toMatch(/abc/);
		expect(className).toMatch(/skeleton/);
	})

	test(`custom render skeleton`, () => {
		const ele = mount(
			<SkeletonView show={true}>
				<Skeleton renderSkeleton={() => (<p></p>)}>
					<span className="abc">abc</span>
				</Skeleton>
			</SkeletonView>
		);
		expect(ele.find('span').length).toBe(0);
		expect(ele.find('p').length).toBe(1);
	})
})