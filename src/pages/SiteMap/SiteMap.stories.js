import React from 'react';
import { SiteMap as SiteMapComponent } from './SiteMap';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'pages/SiteMap',
  component: SiteMapComponent,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

export const SiteMap = () => <SiteMapComponent />;
