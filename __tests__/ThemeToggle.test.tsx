import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout';

it('toggles dark mode class on html element', () => {
  render(
    <MemoryRouter>
      <Layout>
        <div>content</div>
      </Layout>
    </MemoryRouter>
  );
  const button = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(document.documentElement.classList.contains('dark')).toBe(false);
  fireEvent.click(button);
  expect(document.documentElement.classList.contains('dark')).toBe(true);
});
