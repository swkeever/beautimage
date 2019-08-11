import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('<App />', () => {
  let component;

  beforeEach(() => {
    component = render(<App />);
  });

  it('contains title', () => {
    expect(component.container).toHaveTextContent('ImageExplorer');
  });
});
