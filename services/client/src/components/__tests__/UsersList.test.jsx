import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import UsersList from '../UsersList';

const users = [
  {
    'active': false,
    'email': 'tosmak@gmail.com',
    'id': 1,
    'username': 'tosmak'
  },
    {
    'active': true,
    'email': 'tobi@john.org',
    'id': 2,
    'username': 'tobi'
  },
    {
    'active': false,
    'email': 'tope@gmail.org',
    'id': 3,
    'username': 'tope'
  }
];

test('UsersList renders properly', () => {
  const wrapper = shallow(<UsersList users={users}/>);
  const element = wrapper.find('h4');
  expect(element.length).toBe(3);
  expect(element.get(2).props.children).toBe('tope');
});

test('UsersList renders a snapshot properly', () => {
  const tree = renderer.create(<UsersList users={users}/>).toJSON();
  expect(tree).toMatchSnapshot();
});