import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from '../src/components/Pages/Projects';

it('filters projects by selected technology', () => {
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>
  );

  expect(screen.getByText('Money Talks')).toBeInTheDocument();
  const reactCheckbox = screen.getByLabelText('React');
  fireEvent.click(reactCheckbox);
  expect(screen.queryByText('Money Talks')).toBeNull();
  expect(screen.getByText('Deja Do')).toBeInTheDocument();
  expect(screen.getByText('AI Chat Interface')).toBeInTheDocument();
});
