import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Nav from './Nav';

afterEach(cleanup);

describe('<Nav />', () => {
  let component;

  beforeEach(() => {
    component = render(<Nav />);
  });

  it('contains app name', () => {
    expect(component.container).toHaveTextContent('ImageExplorer');
  });

  it('contains search field', () => {
    expect(component.container.querySelector('input')).toBeDefined();
  });

  describe('icons', () => {
    it('contains night theme', () => {
      expect(component.container.querySelector('.moon')).toBeDefined();
    });

    it('contains list theme', () => {
      expect(component.container.querySelector('.list')).toBeDefined();
    });

    it('contains block theme', () => {
      expect(component.container.querySelector('.block')).toBeDefined();
    });

    it('contains grid theme', () => {
      expect(component.container.querySelector('.grid')).toBeDefined();
    });
  });
});
