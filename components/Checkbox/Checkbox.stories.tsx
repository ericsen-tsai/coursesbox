import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { expect } from '@storybook/jest'
import { screen, userEvent } from '@storybook/testing-library'

import Checkbox from './index'

export default {
  title: 'Controls/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const PrimaryCheckbox: ComponentStoryObj<typeof Checkbox> = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByLabelText('✓'))
    await expect(args.onChange).toHaveBeenCalled()
  },
}
