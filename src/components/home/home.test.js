import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));

it('renders without crashing', () => {
  shallow(<Home />);
});