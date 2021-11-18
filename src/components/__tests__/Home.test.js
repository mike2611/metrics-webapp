import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from '../Home';

jest.mock('../Home');

describe('Home Component tests', () => {
  test('Should render Home component', () => {
    const component = render(<Home />);
    expect(component.container).toHaveTextContent('Today Most Gainer Stocks');
  });
  test('Should display CLICK A STOCK FOR MORE DETAILS text', () => {
    const component = render(<Home />);
    expect(component.container).toHaveTextContent('CLICK A STOCK FOR MORE DETAILS');
  });
});
