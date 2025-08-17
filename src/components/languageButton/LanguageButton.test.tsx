import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import LanguageButton from './LanguageButton';

describe('LanguageButton', () => {
  it('renders without crashing', () => {
    render(<LanguageButton />);

    // The component should render something
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
