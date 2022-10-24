import { ComponentStory, ComponentMeta } from '@storybook/react'

import Layout from './index'

export default {
  title: 'Content/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const BasicLayout = Template.bind({})
BasicLayout.args = {
  children: 'test text',
}
