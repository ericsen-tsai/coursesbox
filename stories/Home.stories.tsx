import Home from '../pages/index'
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'page/Pages',
  component: Home
} as ComponentMeta<typeof Home>;

export const HomePage = () => <Home />