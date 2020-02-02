import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader component', () => {
  it('renders Loader', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
