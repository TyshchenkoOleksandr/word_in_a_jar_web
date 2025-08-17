import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';

// Mock the AppHeader component since it uses react-router and i18n
vi.mock('../appHeader/AppHeader', () => ({
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  AppHeader: () => <div data-testid="app-header">App Header</div>,
}));

describe('Layout', () => {
  it('renders AppHeader and children', () => {
    render(
      <BrowserRouter>
        <Layout>
          <div data-testid="test-children">Test Content</div>
        </Layout>
      </BrowserRouter>,
    );

    // Check that AppHeader is rendered
    expect(screen.getByTestId('app-header')).toBeInTheDocument();

    // Check that children are rendered
    expect(screen.getByTestId('test-children')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders without children', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );

    // Check that AppHeader is still rendered
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
  });
});
