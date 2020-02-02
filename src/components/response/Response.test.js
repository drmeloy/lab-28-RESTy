import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response';

describe('Response component', () => {
  it('renders Response', () => {
    const wrapper = shallow(<Response />);
    expect(wrapper).toMatchSnapshot();
  });
});
