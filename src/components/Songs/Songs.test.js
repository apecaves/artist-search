import React from 'react';
import { shallow } from 'enzyme';
import Songs from './Songs';

describe('Songs component', () => {
  it('renders Songs', () => {
    const wrapper = shallow(<Songs songList={[]} artistName={''}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  