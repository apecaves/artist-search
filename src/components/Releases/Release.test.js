import React from 'react';
import { shallow } from 'enzyme';
import Release from './Release';

describe('Release component', () => {
  it('renders Release', () => {
    const wrapper = shallow(<Release release={{
      title: '', id: '', date: '', country: '', 'cover-art-archive': {}
    }} artistName={''}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  