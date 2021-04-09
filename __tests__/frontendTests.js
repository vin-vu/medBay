import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import jest from 'jest-mock';

import NavBar from '../client/components/common/NavBar';

configure({ adapter: new Adapter() });


describe('React unit tests', () => {
  describe('NavBar', () => {
    let wrapper;
    const props = {
      label: 'medBay',
      text: 'Catagories',
    };

    beforeAll(() => {
      wrapper = shallow(<NavBar {...props} />);
    });

    it('Renders the title text', () => {
      expect(wrapper.text()).toEqual('medBay');
    });

    it('Renders the correct number of Button components', () => {
      expect(wrapper.find('button').getElements().length).toEqual(2);
    })
  });
};