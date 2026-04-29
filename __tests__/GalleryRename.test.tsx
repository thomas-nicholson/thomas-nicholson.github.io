import React from 'react';
import * as fs from 'fs';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout';

describe('gallery rename', () => {
  it('shows Gallery in the primary navigation instead of Projects', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Content</div>
        </Layout>
      </MemoryRouter>
    );

    const galleryLinks = screen.getAllByRole('link', { name: 'Gallery' });

    expect(galleryLinks).toHaveLength(2);
    galleryLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/gallery');
    });
  });

  it('defines a /gallery route in App', () => {
    const appSource = fs.readFileSync(`${process.cwd()}/src/App.tsx`, 'utf8');

    expect(appSource).toContain('path="/gallery"');
    expect(appSource).not.toContain('path="/projects"');
  });
});
