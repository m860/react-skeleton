/**
 * Created by jean.h.ma on 10/08/2017.
 */
import React from "react";
import {mount,configure} from "enzyme";
import TestComponent from '../src/components/SkeletonView'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("render `<TestComponent/>` ", ()=> {
	const wrapper = mount((
		<TestComponent/>
	));
	test(`text container 'hello'`, ()=> {
		const titleEl = wrapper.find('p');
		const text = titleEl.text();
		expect(text).toContain('hello')
	});
})