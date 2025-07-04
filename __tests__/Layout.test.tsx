import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../src/components/Layout/Layout';
import { MemoryRouter } from 'react-router-dom';

test('renders children inside Layout', () => {
  render(
    <MemoryRouter>
      <Layout>
        <div>Test Content</div>
      </Layout>
    </MemoryRouter>
  );
  expect(screen.getByText('Test Content')).toBeInTheDocument();
});

test('mobile nav includes dark mode classes', () => {
  const { container } = render(
    <MemoryRouter>
      <Layout>
        <div>Content</div>
      </Layout>
    </MemoryRouter>
  );
  const mobileNav = container.querySelector('div.fixed.bottom-0');
  expect(mobileNav).not.toBeNull();
  expect(mobileNav?.className).toContain('dark:bg-gray-800');
});
