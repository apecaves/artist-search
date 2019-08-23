import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist component', () => {
  it('renders Artist', () => {
    const wrapper = shallow(<Artist artist={{
      id: '', name: ''
    }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  