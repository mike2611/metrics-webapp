import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Details from '../Details';

jest.mock('../Details');

describe('Details Component tests', () => {
  test('Should render Home component', () => {
    const component = render(<Details />);
    expect(component.container).toHaveTextContent('Stock Details');
  });
  test('Should render stock symbol', () => {
    const component = render(<Details />);
    expect(component.container).toHaveTextContent('APPL');
  });
  test('Should render stock currency', () => {
    const component = render(<Details />);
    expect(component.container).toHaveTextContent('USD');
  });
  test('Should render stock name', () => {
    const component = render(<Details />);
    expect(component.container).toHaveTextContent('Apple');
  });
});
