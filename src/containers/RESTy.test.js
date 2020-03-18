import React from 'react';
import { shallow } from 'enzyme';
import RESTy from './RESTy';

describe('RESTy component', () => {
  it('can handle change', () => {
    const wrapper = shallow(<RESTy />);
    const instance = wrapper.instance();

    expect(wrapper.state('url')).toEqual('');

    instance.handleChange({
      target: {
        name: 'url',
        value: 'www.megaman.com'
      }
    });

    expect(wrapper.state('url')).toEqual('www.megaman.com');
  });
});
