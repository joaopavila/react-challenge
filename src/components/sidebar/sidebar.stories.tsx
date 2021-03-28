import { Story, Meta } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';

import Sidebar from './sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
} as Meta;

export const SidebarStory: Story = () => (
  <MemoryRouter>
    <Sidebar />
  </MemoryRouter>
);
