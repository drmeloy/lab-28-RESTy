import React from 'react';
import { shallow } from 'enzyme';
import ResHeaders from './ResHeaders';

describe('ResHeaders component', () => {
  it('renders ResHeaders', () => {
    const wrapper = shallow(<ResHeaders />);
    expect(wrapper).toMatchSnapshot();
  });
});
