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
