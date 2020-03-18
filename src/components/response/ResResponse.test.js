import React from 'react';
import { shallow } from 'enzyme';
import ResResponse from './ResResponse';

describe('ResResponse component', () => {
  it('renders ResResponse ', () => {
    const wrapper = shallow(<ResResponse responseBody={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
