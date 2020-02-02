import React from 'react';
import { shallow } from 'enzyme';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  it('renders HistoryList', () => {
    const wrapper = shallow(<HistoryList historyList={[{
      url: 'https://swapi.co/api/people/',
      method: 'GET',
      requestBody: ''
    }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
