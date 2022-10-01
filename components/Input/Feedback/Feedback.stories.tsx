import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { expect } from '@storybook/jest'
import { screen } from '@storybook/testing-library'

import Feedback from './index'

export default {
  title: 'Controls/Feedback',
  component: Feedback,
} as ComponentMeta<typeof Feedback>

export const ValidFeedback: ComponentStoryObj<typeof Feedback> = {
  play: async () => {
    await expect(screen.getByText('Looks good!')).toBeInTheDocument()
  },
  args: {
    isValid: true,
    children: 'Looks good!',
  },
}

export const InvalidFeedback: ComponentStoryObj<typeof Feedback> = {
  play: async () => {
    await expect(
      screen.getByText('Please provide a valid value')
    ).toBeInTheDocument()
  },
  args: {
    isValid: false,
    children: 'Please provide a valid value',
  },
}
