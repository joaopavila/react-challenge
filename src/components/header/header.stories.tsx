import { Story, Meta } from '@storybook/react/types-6-0';
import Header from './header';

export default {
  title: 'Header',
  component: Header,
} as Meta;

export const HeaderStory: Story = () => <Header />;
