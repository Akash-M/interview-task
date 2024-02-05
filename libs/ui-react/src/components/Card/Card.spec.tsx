import { render } from '@testing-library/react';

import Card from './Card';

describe('UiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();

    // TODO: Add unit tests.
  });
});
